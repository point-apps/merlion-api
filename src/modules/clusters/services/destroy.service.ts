import { ClusterRepository } from "../repositories/cluster.repository.js";
import DatabaseConnection, { DeleteOptionsInterface } from "@src/database/connection.js";

export class DestroyClusterService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(id: string, options?: DeleteOptionsInterface) {
    const clusterRepository = new ClusterRepository(this.db);
    return await clusterRepository.delete(id, options);
  }
}
