import { NextFunction, Request, Response } from "express";
import { validate } from "../request/create.request.js";
import { CreateCaptureService } from "../services/create.service.js";
import { db } from "@src/database/database.js";
import { GoogleAuth } from "@src/utils/google-auth.js";
import { GoogleDrive } from "@src/utils/google-drive.js";

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = db.startSession();

    db.startTransaction();

    console.log(req.headers);
    console.log(req.body);
    console.log(req.file);
    console.log(req.files);

    validate(req.body);

    const googleAuth = new GoogleAuth();
    const token = {
      tokens: {
        access_token:
          "ya29.a0AVvZVsrDB8vP8wggv-6FoI9UyaErOQnVRKJclhVy046Xn_Gs4ZymnZc4qBn9hxEIUxpQpX3Fc_Ba8VsHjni14Fau99RszSDpHJVzYu3UyJfvZgRR9jQqK2tjEtSBdHB23ZZgcWE9u0ksTASDdP26aBbN_PNEUAaCgYKAbASARISFQGbdwaIySV58vXQbxu6uDToNQFXTQ0165",
        scope:
          "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/drive.file",
        token_type: "Bearer",
        id_token:
          "eyJhbGciOiJSUzI1NiIsImtpZCI6IjU5NjJlN2EwNTljN2Y1YzBjMGQ1NmNiYWQ1MWZlNjRjZWVjYTY3YzYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI0NDc2MzY2NDY2NDItbjc5ajI3a3BxbGo4djBudHRpbTBoMWM1amEwdW1yNWIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI0NDc2MzY2NDY2NDItbjc5ajI3a3BxbGo4djBudHRpbTBoMWM1amEwdW1yNWIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDI0MzAzNDU1NzQ2NTA1ODY0NzgiLCJlbWFpbCI6Im1hcnRpZW5kdEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Il9IZXYxVXZHS2JGc0hXcHN0WjFzcVEiLCJuYW1lIjoiTWFydGllbiBEZXJtYXdhbiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BRWRGVHA3Qm9wWU15ZGVBQVBQWUJaYmpRUmQ4UEhBU1hETnU1SU9jZnN3N3d3PXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6Ik1hcnRpZW4iLCJmYW1pbHlfbmFtZSI6IkRlcm1hd2FuIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2NzY4OTMyOTksImV4cCI6MTY3Njg5Njg5OX0.KlkfsWdfcmMGwfQr-zNV8Ps_hraBecRkthAPeKH4BDbzkZQqGlHWw74IBUVJmnXffvmJv7siArhjUhpkQXcUpyXY11_UFvv0zWTtY6XnfWmQfWhQLb1Kp67ovTmJbz9XTuLluCtgrTuGaRFOsA5nCO0uNKMIMqN8FCXn43YQ-d4EKoUhDWUZ48FAuYelOh907KbteoVWlmIWiY8QQsoMTPTXaxvzC6TX12aqVvO7afvsyFb5evtqYGxN4z6rrNDalaDbXMIqEVUkI75kTtIZ8Q4Ma6B4keZfs82Raxm2i785AzGWVr2wct-hbrOMV6To2RZuxz7kbskjTiUqkvqG1g",
        expiry_date: 1676896897032,
      },
    };
    const googleDrive = new GoogleDrive(googleAuth.getOAuth2(token));

    googleDrive.uploadFile(req.files[0]);

    throw new Error("ERR");
    const createCaptureService = new CreateCaptureService(db);
    const result = await createCaptureService.handle(req.body, { session });

    await db.commitTransaction();

    res.status(201).json({
      _id: result._id,
    });
  } catch (error) {
    await db.abortTransaction();
    next(error);
  } finally {
    await db.endSession();
  }
};
