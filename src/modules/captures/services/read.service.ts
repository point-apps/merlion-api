import { ObjectId } from "mongodb";
import { CaptureRepository } from "../repositories/capture.repository.js";
import DatabaseConnection from "@src/database/connection.js";
import { fields } from "@src/database/mongodb-util.js";

export class ReadCaptureService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(id: string, filter: any) {
    const captureRepository = new CaptureRepository(this.db);

    const aggregates: any = [
      {
        $match: {
          _id: new ObjectId(id),
        },
      },
      {
        $lookup: {
          from: "institutions",
          localField: "institution_id",
          foreignField: "_id",
          as: "institution",
        },
      },
      {
        $set: {
          institution: {
            $arrayElemAt: ["$institution", 0],
          },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "createdBy_id",
          foreignField: "_id",
          pipeline: [{ $project: { name: 1, email: 1 } }],
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
      { $limit: 1 },
    ];

    if (filter && filter.fields) {
      aggregates.push({ $project: fields(filter.fields) });
    }

    if (filter && filter.restrictedFields) {
      aggregates.push({ $unset: filter.restrictedFields });
    }

    const query = {
      page: 1,
      pageSize: 1,
      sort: "",
      search: "",
    };

    const aggregateResult = captureRepository.aggregate(aggregates, query);

    const result = (await aggregateResult) as any;

    return result.data[0];
  }
}
