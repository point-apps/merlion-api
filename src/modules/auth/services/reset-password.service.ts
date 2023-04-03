import { ApiError } from "@point-hub/express-error-handler";
import { UserRepository } from "../repositories/user.repository.js";
import DatabaseConnection, { DocumentInterface } from "@src/database/connection.js";
import { hash } from "@src/utils/hash.js";

export class ResetPasswordService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(doc: DocumentInterface, session: unknown) {
    const { code, email, newPassword } = doc;
    const userRepository = new UserRepository(this.db);

    const existingUsers = await userRepository.readMany({
      fields: "",
      filter: {
        $and: [
          {
            email: {
              $regex: email,
              $options: "i",
            },
          },
          {
            requestPasswordCode: code,
          },
        ],
      },
      page: 1,
      pageSize: 1,
      sort: "",
    });

    if (existingUsers.data.length === 0) {
      throw new ApiError(422);
    }

    return await userRepository.update(
      existingUsers.data[0]._id.toString(),
      {
        password: await hash(newPassword),
        requestPasswordCode: null,
      },
      { session }
    );
  }
}
