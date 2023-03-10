import { ObjectId } from "mongodb";
import { hash } from "@src/utils/hash.js";

export interface UserInterface {
  _id?: string | ObjectId;
  username?: string;
  email?: string;
  password?: string;
  name?: string;
  role?: string;
  emailVerificationCode?: string;
  status?: "registered" | "activated" | "suspended";
  googleDriveId?: string;
  oauth?: {
    google?: object;
  };
  oauthVerification?: {
    google?: string;
  };
}

export const restricted = ["password"];

export class UserEntity {
  public user: UserInterface;

  constructor(user: UserInterface) {
    this.user = user;
  }

  public generateEmailValidationCode() {
    this.user.emailVerificationCode = new ObjectId().toString();
  }

  public async generateRandomUsername() {
    this.user.username = `username-${Math.random()}`;
  }

  public async generateRandomPassword() {
    this.user.password = await hash(new Date().toString());
  }

  public async setPassword(value: string) {
    this.user.password = await hash(value);
  }

  public suspendUser() {
    this.user.status = "suspended";
  }
}
