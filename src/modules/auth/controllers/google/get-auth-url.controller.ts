import { NextFunction, Request, Response } from "express";
import { getAuthUrl } from "@src/utils/google-auth.js";

export const googleGetAuthUrl = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const callbackUrl = req.query.callback as string;
    const url = await getAuthUrl(callbackUrl);

    return res.status(200).json(url);
  } catch (error) {
    next(error);
  }
};
