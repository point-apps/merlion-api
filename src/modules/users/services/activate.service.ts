import { UserEntity } from "../entities/user.entity.js";
import { UserRepository } from "../repositories/user.repository.js";
import DatabaseConnection, { DocumentInterface } from "@src/database/connection.js";
import Mailer from "@src/services/mailer/index.js";

export class ActivateUserService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(id: string, doc: DocumentInterface, session: unknown) {
    /**
     * Validate all request data
     */

    const userEntity = new UserEntity({
      status: "active",
    });

    const userRepository = new UserRepository(this.db);
    const response = await userRepository.update(id, userEntity.user, { session });
    const user = await userRepository.read(id, { session });

    const message = {
      to: user.email as string,
      subject: "Pemberitahuan Pengaktifan Akun Anda",
      template: "users/email/activate",
      context: {
        name: user.name,
        email: user.email,
        date: new Date(),
      },
    };

    Mailer.send(message);

    return response;
  }
}
