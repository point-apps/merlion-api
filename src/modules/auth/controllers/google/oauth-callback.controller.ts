import process from "process";
import { NextFunction, Request, Response } from "express";
import { google } from "googleapis";
import { ReadUserByEmailService } from "../../services/read-user-by-email.service.js";
import { db } from "@src/database/database.js";
import { UpdateGoogleInfoService } from "@src/modules/auth/services/update-google-info.service.js";
import { hashObject } from "@src/utils/hash.js";

export const googleOauthCallback = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = db.startSession();
    db.startTransaction();
    const CLIENT_ID = process.env.GOOGLE_DRIVE_CLIENT_ID;
    const CLIENT_SECRET = process.env.GOOGLE_DRIVE_CLIENT_SECRET;
    const REDIRECT_URI = "http://localhost:3000/v1/auth/google/oauth-callback";

    const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

    if (req.query.code == null) return res.status(400).send("Invalid Request");

    const code: string = req.query.code as string;
    const token = await oauth2Client.getToken(code);

    if (token == null) return res.status(400).send("Token not found");

    oauth2Client.setCredentials(token.tokens);
    const oauth2 = google.oauth2({ version: "v2", auth: oauth2Client });

    const userInfo = await oauth2.userinfo.get();

    const readUserByEmailService = new ReadUserByEmailService(db);
    const result = await readUserByEmailService.handle(userInfo.data.email as string);

    let redirectUri = req.query.state as string;
    if (!result) {
      redirectUri += "?error=email address not found";
      return res.redirect(redirectUri);
    }

    const verificationCode = hashObject({
      date: new Date(),
      email: userInfo.data.email,
    });

    redirectUri += `?code=${verificationCode}`;

    const updateService = new UpdateGoogleInfoService(db);
    await updateService.handle(
      result._id.toString(),
      {
        ...userInfo.data,
        verificationCode: verificationCode,
      },
      session
    );

    await db.commitTransaction();

    return res.redirect(redirectUri);
  } catch (error) {
    await db.abortTransaction();
    next(error);
  } finally {
    await db.endSession();
  }
};
