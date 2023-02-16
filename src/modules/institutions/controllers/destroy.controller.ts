import { NextFunction, Request, Response } from "express";
import { DestroyInstitutionService } from "../services/destroy.service.js";
import { db } from "@src/database/database.js";

export const destroy = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = db.startSession();

    db.startTransaction();
    const destroyInstitutionService = new DestroyInstitutionService(db);
    const result = await destroyInstitutionService.handle(req.params.id, { session });

    await db.commitTransaction();

    res.status(204).json(result);
  } catch (error) {
    await db.abortTransaction();
    next(error);
  } finally {
    await db.endSession();
  }
};
