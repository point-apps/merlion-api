import { ObjectId } from "mongodb";
import { ClusterEntity } from "../entities/cluster.entity.js";
import { ClusterRepository } from "../repositories/cluster.repository.js";
import DatabaseConnection, { CreateOptionsInterface, DocumentInterface } from "@src/database/connection.js";
import { hash } from "@src/utils/hash.js";

export class CreateClusterService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(doc: DocumentInterface, options?: CreateOptionsInterface) {
    const clusterEntity = new ClusterEntity({
      name: doc.name,
    });

    const clusterRepository = new ClusterRepository(this.db);
    return await clusterRepository.create(clusterEntity.cluster, options);
  }
}
