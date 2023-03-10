import { dotNotation } from "@point-hub/express-utils";
import { UserRepository } from "../repositories/user.repository.js";
import DatabaseConnection, { DocumentInterface } from "@src/database/connection.js";
import { UserEntity } from "@src/modules/users/entities/user.entity.js";

export class AcceptInvitationService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(id: string, doc: DocumentInterface, session: unknown) {
    const userEntity = new UserEntity(
      dotNotation({
        status: "registered",
      })
    );

    const userRepository = new UserRepository(this.db);
    return await userRepository.update(id, userEntity.user, { session });
  }
}
