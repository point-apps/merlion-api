import { UserRepository } from "../repositories/user.repository.js";
import DatabaseConnection, { DocumentInterface } from "@src/database/connection.js";
import { UserEntity } from "@src/modules/users/entities/user.entity.js";

export class UpdateGoogleInfoService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(id: string, doc: DocumentInterface, session: unknown) {
    const userEntity = new UserEntity({
      oauthVerification: {
        google: doc.verificationCode,
      },
      oauth: {
        google: {
          id: doc.id,
          email: doc.email,
          verified_email: doc.verified_email,
          name: doc.name,
          given_name: doc.given_name,
          family_name: doc.family_name,
          picture: doc.picture,
          locale: doc.locale,
        },
      },
    });

    const userRepository = new UserRepository(this.db);
    return await userRepository.update(id, userEntity.user, { session });
  }
}
