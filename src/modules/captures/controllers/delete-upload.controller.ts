import { ApiError } from "@point-hub/express-error-handler";
import { NextFunction, Request, Response } from "express";
import { validate } from "../request/delete-upload.request.js";
import { UpdateUploadCaptureService } from "../services/update-upload.service.js";
import { UploadCaptureService } from "../services/upload.service.js";
import { db } from "@src/database/database.js";
import { VerifyTokenUserService } from "@src/modules/auth/services/verify-token.service.js";
import { GoogleDrive } from "@src/utils/google-drive.js";

export const deleteUpload = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = db.startSession();

    db.startTransaction();

    /**
     * Request should come from authenticated user
     */
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

    // const googleDrive = new GoogleDrive(tokens);
    // await googleDrive.refreshToken();

    // await googleDrive.delete(req.body.id);

    const updateUploadService = new UpdateUploadCaptureService(db);
    await updateUploadService.handle(req.params.id, req.body, session);

    await db.commitTransaction();

    res.status(201).json({});
  } catch (error) {
    await db.abortTransaction();
    next(error);
  } finally {
    await db.endSession();
  }
};
