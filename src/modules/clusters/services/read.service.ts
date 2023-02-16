import { ClusterEntity, ClusterInterface } from "../entities/cluster.entity.js";
import { ClusterRepository } from "../repositories/cluster.repository.js";
import DatabaseConnection from "@src/database/connection.js";

export class ReadClusterService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(id: string) {
    const clusterRepository = new ClusterRepository(this.db);
    const result = (await clusterRepository.read(id)) as unknown as ClusterInterface;
    console.log(result);

    const cluster: ClusterInterface = {
      _id: result._id as string,
      name: result.name as string,
      alias: result.alias as string,
      description: result.description as string,
      suggestion: result.suggestion as string,
      typologies: result.typologies as Array<string>,
    };
    const clusterEntity = new ClusterEntity(cluster);

    return clusterEntity.cluster;
  }
}
