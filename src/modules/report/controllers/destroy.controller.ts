import { NextFunction, Request, Response } from "express";
import { DestroyCaptureService } from "../services/destroy.service.js";
import { db } from "@src/database/database.js";

export const destroy = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = db.startSession();

    db.startTransaction();
    const destroyCaptureService = new DestroyCaptureService(db);
    const result = await destroyCaptureService.handle(req.params.id, { session });

    await db.commitTransaction();

    res.status(204).json(result);
  } catch (error) {
    await db.abortTransaction();
    next(error);
  } finally {
    await db.endSession();
  }
};
