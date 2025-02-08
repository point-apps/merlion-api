import { NextFunction, Request, Response } from "express";
import { ActivateUserService } from "../services/activate.service.js";
import { db } from "@src/database/database.js";

export const activate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = db.startSession();

    db.startTransaction();

    const updateUserService = new ActivateUserService(db);
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
