import DatabaseConnection, { DocumentInterface } from "@src/database/connection.js";
import { UserEntity } from "@src/modules/users/entities/user.entity.js";
import { UserRepository } from "@src/modules/users/repositories/user.repository.js";

export class UpdateGoogleDriveFolderService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(id: string, doc: DocumentInterface, session: unknown) {
    const userEntity = new UserEntity({
      googleDriveId: doc.googleDriveId,
    });

    const userRepository = new UserRepository(this.db);
    return await userRepository.update(id, userEntity.user, { session });
  }
}
