import { ObjectId } from "mongodb";
import { UserEntity } from "../entities/user.entity.js";
import { UserRepository } from "../repositories/user.repository.js";
import DatabaseConnection, { CreateOptionsInterface, DocumentInterface } from "@src/database/connection.js";

interface InviteResponseInterface {
  _id: string;
  email: string;
  name: string;
  password: string;
  emailVerificationCode: string;
  acknowledge: boolean;
}

function pad(num: string, size: number) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

export class InviteUserService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(doc: DocumentInterface, options?: CreateOptionsInterface) {
    const userEntity = new UserEntity({
      email: doc.email,
      name: doc.name,
      role: doc.role,
    });

    await userEntity.generateRandomUsername();
    const pass = pad(
      Number(Math.random() * 100000000)
        .toFixed(0)
        .toString(),
      8
    );
    await userEntity.setPassword(pass);
    userEntity.generateEmailValidationCode();

    const userRepository = new UserRepository(this.db);
    const createResponse = await userRepository.create(userEntity.user, options);
    const readResponse = await userRepository.read(createResponse._id, { session: options?.session });

    return {
      _id: createResponse._id,
      email: readResponse.email,
      name: readResponse.name,
      emailVerificationCode: readResponse.emailVerificationCode,
      password: pass,
      acknowledge: createResponse.acknowledged,
    } as InviteResponseInterface;
  }
}
