import { UserEntity } from "../entities/user.entity.js";
import { UserRepository } from "../repositories/user.repository.js";
import { validate } from "../request/edit.request.js";
import DatabaseConnection, { DocumentInterface } from "@src/database/connection.js";
import { hash } from "@src/utils/hash.js";

export class UpdateUserService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(id: string, doc: DocumentInterface, session: unknown) {
    /**
     * Validate all request data
     */
    validate(doc);

    const userEntity = new UserEntity({
      password: await hash(doc.password),
    });

    const userRepository = new UserRepository(this.db);
    return await userRepository.update(id, userEntity.user, { session });
  }
}
