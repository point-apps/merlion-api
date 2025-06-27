import { ApiError } from "@point-hub/express-error-handler";
import { NextFunction, Request, Response } from "express";
import { UpdateUploadCaptureService } from "../services/update-upload.service.js";
import { db } from "@src/database/database.js";

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
    /**
     * Validate all request data
     */
    // validate(req.body);

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
