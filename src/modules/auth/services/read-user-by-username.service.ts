import DatabaseConnection, { QueryInterface } from "@src/database/connection.js";
import { UserRepository } from "@src/modules/users/repositories/user.repository.js";

export class ReadUserByUsernameService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(username: string) {
    const query: QueryInterface = {
      fields: "",
      filter: {
        username: {
          $regex: `^${username}$`,
          $options: "i",
        },
      },
      page: 1,
      pageSize: 1,
      sort: "",
    };

    const userRepository = new UserRepository(this.db);
    const result = await userRepository.readMany(query);

    return result.data[0];
  }
}
