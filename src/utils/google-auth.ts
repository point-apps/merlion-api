import { google } from "googleapis";
import { googleAuthConfig } from "@src/config/oauth.js";

export class GoogleAuth {
  private oAuth2Client;

  constructor() {
    this.oAuth2Client = new google.auth.OAuth2(
      googleAuthConfig.clientID,
      googleAuthConfig.clientSecret,
      googleAuthConfig.redirectUri
    );
  }

  public getUrl(scopes: string[], callbackUrl: string) {
    try {
      const result = this.oAuth2Client.generateAuthUrl({
        scope: scopes,
        state: callbackUrl,
      });

      return result;
    } catch (error) {
      throw error;
    }
  }

  public async getToken(code: string) {
    try {
      return await this.oAuth2Client.getToken(code);
    } catch (error) {
      throw error;
    }
  }

  public getOAuth2(token: any) {
    try {
      this.oAuth2Client.setCredentials(token);
      console.log("Toke", this.oAuth2Client);
      return google.oauth2({ version: "v2", auth: this.oAuth2Client });
    } catch (error) {
      throw error;
    }
  }
}
