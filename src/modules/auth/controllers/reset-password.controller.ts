import { NextFunction, Request, Response } from "express";
import { validate } from "../request/reset-password.request.js";
import { ResetPasswordService } from "../services/reset-password.service.js";
import { db } from "@src/database/database.js";

export const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = db.startSession();

    db.startTransaction();

    validate(req.body);

    const resetPasswordService = new ResetPasswordService(db);
    await resetPasswordService.handle(req.body, session);

    await db.commitTransaction();

    res.status(200).json();
  } catch (error) {
    await db.abortTransaction();
    next(error);
  } finally {
    await db.endSession();
  }
};
