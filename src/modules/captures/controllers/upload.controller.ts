import { ApiError } from "@point-hub/express-error-handler";
import { NextFunction, Request, Response } from "express";
import { validate } from "../request/upload.request.js";
import { UpdateGoogleDriveFolderService } from "../services/update-google-drive-folder.service.js";
import { UploadCaptureService } from "../services/upload.service.js";
import { db } from "@src/database/database.js";
import { VerifyTokenUserService } from "@src/modules/auth/services/verify-token.service.js";
import { GoogleDrive } from "@src/utils/google-drive.js";

export const upload = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = db.startSession();

    db.startTransaction();

    /**
     * Request should come from authenticated user
     */
    console.log("is authenticated");
    const authorizationHeader = req.headers.authorization ?? "";

    if (authorizationHeader === "") {
      throw new ApiError(401);
    }
    const verifyTokenUserService = new VerifyTokenUserService(db);
    const authUser = (await verifyTokenUserService.handle(authorizationHeader)) as any;
    /**
     * Validate all request data
     */
    validate(req.body);

    const tokens = authUser.oauth?.google?.tokens;
    if (!tokens) {
      throw new ApiError(401);
    }

    const googleDrive = new GoogleDrive(tokens);
    await googleDrive.refreshToken();

    // If user don't have project folder in their google drive then create a new one
    let googleDriveId = authUser.googleDriveId;
    if (!googleDriveId) {
      googleDriveId = await googleDrive.createFolder();
      const updateService = new UpdateGoogleDriveFolderService(db);
      await updateService.handle(
        authUser._id,
        {
          googleDriveId: googleDriveId,
        },
        session
      );
    }

    req.body.files = [];

    // Upload to drive
    const files = req.files as Express.Multer.File[];
    console.log(files.length, files);
    for (let i = 0; i < files.length; i++) {
      const uploaded = await googleDrive.uploadFile(files[i], googleDriveId as string);

      // Generate public URL
      const publicUrl = await googleDrive.generatePublicUrl(uploaded?.id as string);
      req.body.files.push({
        id: uploaded?.id,
        name: uploaded?.name,
        mimeType: uploaded?.mimeType,
        url: publicUrl?.webContentLink,
      });
    }

    const uploadCaptureService = new UploadCaptureService(db);
    await uploadCaptureService.handle(req.body.capture_id, req.body, { session });

    await db.commitTransaction();

    res.status(201).json({});
  } catch (error) {
    await db.abortTransaction();
    next(error);
  } finally {
    await db.endSession();
  }
};
