import { NextFunction, Request, Response } from "express";
import { SuspendUserService } from "../services/suspend.service.js";
import { db } from "@src/database/database.js";

export const suspend = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = db.startSession();

    db.startTransaction();

    const updateUserService = new SuspendUserService(db);
    await updateUserService.handle(req.params.id, req.body, session);

    await db.commitTransaction();

    res.status(204).json();
  } catch (error) {
    await db.abortTransaction();
    next(error);
  } finally {
    await db.endSession();
  }
};
