import { ObjectId } from "mongodb";
import { NotificationEntity, NotificationInterface } from "../entities/notification.entity.js";
import { NotificationRepository } from "../repositories/notification.repository.js";
import DatabaseConnection from "@src/database/connection.js";
import { fields, limit, page, skip, sort } from "@src/database/mongodb-util.js";

export class ReadNotificationService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(id: string, filter: any) {
    const notificationRepository = new NotificationRepository(this.db);

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

    const aggregateResult = notificationRepository.aggregate(aggregates, query);

    const result = (await aggregateResult) as any;

    return result.data[0];
  }
}
