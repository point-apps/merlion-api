import { endOfDay, startOfDay } from "date-fns";
import { CaptureRepository } from "../repositories/capture.repository.js";
import DatabaseConnection, { QueryInterface } from "@src/database/connection.js";
import { fields } from "@src/database/mongodb-util.js";

export class ReadManyCaptureService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(query: QueryInterface, search: any, createdBy_id: any, role?: string) {
    const captureRepository = new CaptureRepository(this.db);

    const searchData: any = [];
    const postLookupSearchData: any = [];

    console.log(search);

    if (search.activity) {
      searchData.push({ activity: { $regex: search.activity, $options: "i" } });
    }
    if (search.cluster) {
      searchData.push({ clusters: { $elemMatch: { name: { $regex: search.cluster, $options: "i" } } } });
    }
    if (search.createdBy) {
      postLookupSearchData.push({ "createdBy.username": { $regex: search.createdBy, $options: "i" } });
    }

    if (search.fromDate && search.toDate) {
      searchData.push({
        date: { $gte: startOfDay(new Date(search.fromDate)), $lte: endOfDay(new Date(search.toDate)) },
      });
    }

    const aggregates: any = [];

    aggregates.push(
      {
        $lookup: {
          from: "users",
          localField: "createdBy_id",
          foreignField: "_id",
          pipeline: [{ $project: { name: 1, username: 1, email: 1 } }],
          as: "createdBy",
        },
      },
      {
        $set: {
          createdBy: {
            $arrayElemAt: ["$createdBy", 0],
          },
        },
      },
      {
        $set: {
          clusterIds: {
            $map: {
              input: "$clusters.cluster_id",
              in: { $toObjectId: "$$this" },
            },
          },
        },
      },
      {
        $lookup: {
          from: "clusters",
          localField: "clusterIds",
          foreignField: "_id",
          as: "_cluster",
          pipeline: [{ $project: { name: 1, description: 1 } }],
        },
      },
      {
        $unset: ["clusterIds"],
      }
    );

    if (searchData.length) {
      aggregates.push({ $match: { $or: searchData } });
    }

    // Apply post-lookup search filters (e.g., createdBy.name)
    if (postLookupSearchData.length) {
      aggregates.push({ $match: { $or: postLookupSearchData } });
    }

    if (role !== "admin") {
      aggregates.push({ $match: { createdBy_id: createdBy_id } });
    }

    if (query && query.fields) {
      aggregates.push({ $project: fields(query.fields) });
    }

    if (query && query.restrictedFields) {
      aggregates.push({ $unset: query.restrictedFields });
    }

    if (query && query.sort) {
      aggregates.push({ $sort: { date: -1 } });
    }

    if (query && query.filter) {
      aggregates.push({ $match: { ...query.filter } });
    }

    const aggregateResult = await captureRepository.aggregate(aggregates, query);

    return aggregateResult as any;
  }
}
