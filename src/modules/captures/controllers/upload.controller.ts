import { ApiError } from "@point-hub/express-error-handler";
import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { validate } from "../request/upload.request.js";
import { UploadCaptureService } from "../services/upload.service.js";
import { db } from "@src/database/database.js";
import { VerifyTokenUserService } from "@src/modules/auth/services/verify-token.service.js";
import { uploadFile } from "@src/utils/upload.js";

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
    console.log(1);
    console.log(2);
    console.log(3);

    req.body.files = [];

    const mimeTypesMap = {
      // Images
      "image/jpeg": "jpg",
      "image/jpg": "jpg",
      "image/png": "png",
      "image/gif": "gif",
      "image/webp": "webp",
      "image/svg+xml": "svg",
      "image/bmp": "bmp",
      "image/tiff": "tiff",
      "image/heic": "heic",

      // Documents
      "application/pdf": "pdf",

      // Videos
      "video/mp4": "mp4",
      "video/webm": "webm",
      "video/quicktime": "mov", // .mov
      "video/x-msvideo": "avi", // .avi
      "video/x-matroska": "mkv", // .mkv
      "video/3gpp": "3gp",
      "video/3gpp2": "3g2",
      "video/ogg": "ogv",
    };

    // Upload to drive
    const files = req.files as Express.Multer.File[];
    console.log("upload to drive ", files.length, files);
    for (let i = 0; i < files.length; i++) {}

    if (files && files.length > 0) {
      console.log("a1");
      for (const [index, documentFile] of files.entries()) {
        console.log("a2");
        const documentMimeType = documentFile.mimetype;
        const document = `document-${uuidv4()}.${
          mimeTypesMap[documentFile.mimetype as unknown as keyof typeof mimeTypesMap]
        }`;
        console.log("a3");
        req.body.files.push({
          id: index,
          name: document,
          mimeType: documentMimeType,
        });

        console.log("a4");
        await uploadFile(`${document}`, documentFile.buffer);
        console.log("a5");
      }
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
