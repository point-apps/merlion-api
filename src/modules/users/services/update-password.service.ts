import { ApiError } from "@point-hub/express-error-handler";
import { UserEntity } from "../entities/user.entity.js";
import { UserRepository } from "../repositories/user.repository.js";
import DatabaseConnection, { DocumentInterface } from "@src/database/connection.js";
import { hash, verify } from "@src/utils/hash.js";

export class UpdatePasswordUserService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(id: string, doc: DocumentInterface, currentPassword: string, session: unknown) {
    const passwordResult = await verify(currentPassword, doc.currentPassword);
    if (!passwordResult) {
      throw new ApiError(422, {
        password: "Your current password is wrong",
      });
    }
    if (doc.newPassword !== doc.confirmPassword) {
      throw new ApiError(422, {
        password: "Your new password didn't match with confirmed password",
      });
    }
    const userEntity = new UserEntity({
      password: await hash(doc.newPassword),
    });

    const userRepository = new UserRepository(this.db);
    const result = await userRepository.update(id, userEntity.user, { session: session });
    return result;
  }
}
