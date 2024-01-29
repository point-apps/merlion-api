import { ApiError } from "@point-hub/express-error-handler";
import { ObjectId } from "mongodb";
import { UserRepository } from "../repositories/user.repository.js";
import { appUrl } from "@src/config/app.js";
import DatabaseConnection, { CreateOptionsInterface, DocumentInterface } from "@src/database/connection.js";
import Mailer from "@src/services/mailer/index.js";

export class RequestPasswordService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(doc: DocumentInterface, options?: CreateOptionsInterface) {
    const userRepository = new UserRepository(this.db);
    const existingUsers = await userRepository.readMany({
      fields: "",
      filter: {
        email: {
          $regex: `^${doc.email}$`,
          $options: "i",
        },
      },
      page: 1,
      pageSize: 1,
      sort: "",
    });
    if (existingUsers.data.length === 0) {
      throw new ApiError(404);
    }

    const requestPasswordCode = new ObjectId().toString();
    await userRepository.update(
      existingUsers.data[0]._id.toString(),
      {
        requestPasswordCode: requestPasswordCode,
      },
      { session: options?.session }
    );

    const message = {
      to: doc.email,
      subject: "Request Reset Password",
      template: "users/email/request-password",
      context: {
        domain: appUrl,
        resetPasswordCode: requestPasswordCode,
      },
    };

    Mailer.send(message);

    return {};
  }
}
