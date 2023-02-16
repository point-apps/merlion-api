import process from "process";
// import { authenticate } from "@google-cloud/local-auth";
import { NextFunction, Request, Response } from "express";
import { google } from "googleapis";
// import { drive } from "googleapis/build/src/apis/drive";

export const getAuthUrl = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const CLIENT_ID = process.env.GOOGLE_DRIVE_CLIENT_ID;
    const CLIENT_SECRET = process.env.GOOGLE_DRIVE_CLIENT_SECRET;
    const REDIRECT_URI = "http://localhost:3000/v1/auth/google-oauth-callback";

    const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

    if (req.body.code == null) return res.status(400).send("Invalid Request");
    oauth2Client.getToken(req.body.code, (err, token) => {
      if (err) {
        console.error("Error retrieving access token", err);
        return res.status(400).send("Error retrieving access token");
      }
      res.send(token);
    });

    return res.json("asd");
  } catch (error) {
    return res.json("error");
    next(error);
  }
};
