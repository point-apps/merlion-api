import { NotificationRepository } from "../repositories/notification.repository.js";
import DatabaseConnection, { QueryInterface } from "@src/database/connection.js";
import { fields, limit, page, skip, sort } from "@src/database/mongodb-util.js";

export class ReadManyNotificationService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(query: QueryInterface, search: any) {
    const notificationRepository = new NotificationRepository(this.db);

    console.log(query);

    const searchData: any = [];
    if (search.subject) {
      searchData.push({ subject: { $regex: search["subject"], $options: "i" } });
    }
    if (search.institution) {
      searchData.push({ "institution.name": { $regex: search["institution"], $options: "i" } });
    }

    console.log(searchData);

    const aggregates: any = [
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
    ];

    if (searchData.length) {
      aggregates.push({ $match: { $or: searchData } });
    }

    if (query && query.fields) {
      aggregates.push({ $project: fields(query.fields) });
    }

    if (query && query.restrictedFields) {
      aggregates.push({ $unset: query.restrictedFields });
    }

    const aggregateResult = await notificationRepository.aggregate(aggregates, query);

    return aggregateResult;
  }
}
