import { endOfDay, startOfDay } from "date-fns";
import { CaptureRepository } from "../repositories/capture.repository.js";
import DatabaseConnection, { QueryInterface } from "@src/database/connection.js";
import { fields, limit, page, skip, sort } from "@src/database/mongodb-util.js";

export class ReadManyCaptureService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(query: QueryInterface, search: any, createdBy_id: any, role?: string) {
    const captureRepository = new CaptureRepository(this.db);

    const searchData: any = [];

    if (search.activity) {
      searchData.push({ activity: { $regex: search.activity, $options: "i" } });
    }
    if (search.cluster) {
      searchData.push({ clusters: { $elemMatch: { name: { $regex: search.cluster, $options: "i" } } } });
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

    const aggregateResult = await captureRepository.aggregate(aggregates, query);

    return aggregateResult;
  }
}
