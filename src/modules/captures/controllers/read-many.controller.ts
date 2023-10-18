import { ApiError } from "@point-hub/express-error-handler";
import { NextFunction, Request, Response } from "express";
import { ReadManyCaptureService } from "../services/read-many.service.js";
import { QueryInterface } from "@src/database/connection.js";
import { db } from "@src/database/database.js";
import { VerifyTokenUserService } from "@src/modules/auth/services/verify-token.service.js";

export const readMany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    /**
     * Request should come from authenticated user
     */
    const authorizationHeader = req.headers.authorization ?? "";

    if (authorizationHeader === "") {
      throw new ApiError(401);
    }
    const verifyTokenUserService = new VerifyTokenUserService(db);
    const authUser = (await verifyTokenUserService.handle(authorizationHeader)) as any;

    const readManyCaptureService = new ReadManyCaptureService(db);

    const query: QueryInterface = {
      fields: (req.query.fields as string) ?? "",
      restrictedFields: ["password"],
      filter: (req.query.filter as any) ?? {},
      page: Number(req.query.page ?? 1),
      pageSize: Number(req.query.pageSize ?? 10),
      sort: (req.query.sort as string) ?? "",
    };

    if (query.filter["isDraft"]) {
      if (query.filter["isDraft"] === "false") {
        query.filter["isDraft"] = false;
      } else {
        authUser.role = "user";
        query.filter["isDraft"] = true;
      }
    }

    const result = await readManyCaptureService.handle(query, req.query.search, authUser._id, authUser.role);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
