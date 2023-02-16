import { ClusterRepository } from "../repositories/cluster.repository.js";
import { issuer, secretKey } from "@src/config/auth.js";
import DatabaseConnection, { QueryInterface } from "@src/database/connection.js";
import { verify } from "@src/utils/hash.js";
import { signNewToken } from "@src/utils/jwt.js";

export class SigninClusterService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(clustername: string, password: string) {
    const iQuery: QueryInterface = {
      fields: "",
      filter: { clustername: clustername },
      page: 1,
      pageSize: 1,
      sort: "",
    };
    const clusterRepository = new ClusterRepository(this.db);
    const result = (await clusterRepository.readMany(iQuery)) as any;
    console.log(result);
    let isVerified = false;
    if (result.totalDocument === 1) {
      isVerified = await verify(result.data[0].password, password);
    }

    let token = "";
    if (isVerified) {
      token = signNewToken(issuer, secretKey, result.data[0]._id);
    }

    return {
      token: token,
    };
  }
}
