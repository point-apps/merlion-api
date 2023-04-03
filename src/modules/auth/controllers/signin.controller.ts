import { trim } from "@point-hub/express-utils";
import { NextFunction, Request, Response } from "express";
import { validate } from "../request/signin.request.js";
import { SigninUserService } from "../services/signin.service.js";
import { db } from "@src/database/database.js";

export const signin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    validate(req.body);

    const signinUserService = new SigninUserService(db);

    const result = await signinUserService.handle(trim(req.body.username), trim(req.body.password));

    res.status(200).json({
      name: result.name,
      email: result.email,
      username: result.username,
      role: result.role,
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
      googleScopes: result.googleScopes,
    });
  } catch (error) {
    next(error);
  }
};
