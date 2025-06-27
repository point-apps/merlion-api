import { NextFunction, Request, Response } from "express";
import { ReadCaptureService } from "../services/read.service.js";
import { db } from "@src/database/database.js";
import { getFile } from "@src/utils/upload.js";

export const read = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const readCaptureService = new ReadCaptureService(db);

    const result = await readCaptureService.handle(req.params.id, {});

    const documentFiles = [];
    if (result.files) {
      for (const documentFile of result.files) {
        documentFiles.push({
          id: documentFile.id,
          name: documentFile.name,
          mimeType: documentFile.mimeType,
          url: (await getFile(documentFile.name)) as string,
        });
      }
    }
    result.files = documentFiles;

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
