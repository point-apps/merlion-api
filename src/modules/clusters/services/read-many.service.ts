import { ClusterRepository } from "../repositories/cluster.repository.js";
import DatabaseConnection, { QueryInterface } from "@src/database/connection.js";
import { fields, limit, page, skip, sort } from "@src/database/mongodb-util.js";

export class ReadManyClusterService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(query: QueryInterface, search: any) {
    const clusterRepository = new ClusterRepository(this.db);

    const searchData: any = [];
    if (search.name) {
      searchData.push({ name: { $regex: search.name, $options: "i" } });
    }
    if (search.description) {
      searchData.push({ groups: { $regex: search.description, $options: "i" } });
    }
    if (search.typology) {
      searchData.push({
        groups: { $elemMatch: { typologies: { $elemMatch: { name: { $regex: search.typology } } } } },
      });
    }

    const pipeline: any = [];
    console.log(searchData);
    if (searchData.length) {
      pipeline.push({ $match: { $or: searchData } });
    }

    if (query && query.fields) {
      pipeline.push({ $project: fields(query.fields) });
    }

    if (query && query.restrictedFields) {
      pipeline.push({ $unset: query.restrictedFields });
    }

    const result = await clusterRepository.aggregate(pipeline, query);

    return result;
  }
}
