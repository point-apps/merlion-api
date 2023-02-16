import { NextFunction, Request, Response } from "express";
import { ReadManyCaptureService } from "../services/read-many.service.js";
import { QueryInterface } from "@src/database/connection.js";
import { db } from "@src/database/database.js";

export const readMany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const readManyCaptureService = new ReadManyCaptureService(db);
    console.log(req.query);
    const query: QueryInterface = {
      fields: (req.query.fields as string) ?? "",
      restrictedFields: ["password"],
      filter: (req.query.filter as any) ?? {},
      page: Number(req.query.page ?? 1),
      pageSize: Number(req.query.pageSize ?? 10),
      sort: (req.query.sort as string) ?? "",
    };

    const result = await readManyCaptureService.handle(query, req.query.search);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
