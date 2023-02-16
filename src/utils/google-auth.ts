import process from "process";
import { google } from "googleapis";

export const getAuthUrl = async (callbackUrl: string) => {
  try {
    const CLIENT_ID = process.env.GOOGLE_DRIVE_CLIENT_ID;
    const CLIENT_SECRET = process.env.GOOGLE_DRIVE_CLIENT_SECRET;
    const REDIRECT_URI = `${process.env.BASE_URL}/v1/auth/google/oauth-callback`;

    const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

    const result = oauth2Client.generateAuthUrl({
      scope: ["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email"],
      state: callbackUrl,
    });

    return result;
  } catch (error) {
    throw error;
  }
};
