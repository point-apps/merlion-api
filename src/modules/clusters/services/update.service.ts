import { ClusterEntity } from "../entities/cluster.entity.js";
import { ClusterRepository } from "../repositories/cluster.repository.js";
import DatabaseConnection, { DocumentInterface } from "@src/database/connection.js";

export class UpdateClusterService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(id: string, doc: DocumentInterface, session: unknown) {
    const clusterEntity = new ClusterEntity({
      suggestion: doc.suggestion,
    });

    const clusterRepository = new ClusterRepository(this.db);
    return await clusterRepository.update(id, clusterEntity.cluster, { session });
  }
}
