import { endOfDay, startOfMinute, toDate } from "date-fns";
import { CaptureRepository } from "../repositories/capture.repository.js";
import DatabaseConnection, { QueryInterface } from "@src/database/connection.js";
import { fields, limit, page, skip, sort } from "@src/database/mongodb-util.js";

export class CheckCaptureService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(query: QueryInterface, afterDate: any, createdBy_id: any, role?: string) {
    const captureRepository = new CaptureRepository(this.db);

    const searchData: any = [];

    if (afterDate && Date.parse(afterDate)) {
      searchData.push({
        date: { $gte: new Date(afterDate) },
      });
    }

    const aggregates: any = [];

    aggregates.push(
      {
        $lookup: {
          from: "users",
          localField: "createdBy_id",
          foreignField: "_id",
          pipeline: [{ $project: { name: 1 } }],
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

    aggregates.push({ $count: "total" });

    const aggregateResult = await captureRepository.aggregate(aggregates, query);

    return aggregateResult;
  }
}
