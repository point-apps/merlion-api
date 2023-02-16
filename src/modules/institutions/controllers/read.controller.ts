import { NextFunction, Request, Response } from "express";
import { ReadInstitutionService } from "../services/read.service.js";
import { db } from "@src/database/database.js";

export const read = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const readInstitutionService = new ReadInstitutionService(db);
    console.log(req.params.id);
    const result = await readInstitutionService.handle(req.params.id);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
