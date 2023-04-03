import { NextFunction, Request, Response } from "express";
import { validate } from "../request/request-password.request.js";
import { db } from "@src/database/database.js";
import { RequestPasswordService } from "@src/modules/users/services/request-password.service.js";

export const requestPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = db.startSession();

    db.startTransaction();

    validate(req.body);

    const requestPasswordService = new RequestPasswordService(db);
    await requestPasswordService.handle(req.body, { session });

    await db.commitTransaction();

    res.status(200).json();
  } catch (error) {
    await db.abortTransaction();
    next(error);
  } finally {
    await db.endSession();
  }
};
