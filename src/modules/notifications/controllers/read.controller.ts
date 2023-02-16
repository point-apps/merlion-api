import { NextFunction, Request, Response } from "express";
import { ReadNotificationService } from "../services/read.service.js";
import { db } from "@src/database/database.js";

export const read = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const readNotificationService = new ReadNotificationService(db);

    const result = await readNotificationService.handle(req.params.id, {});

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
