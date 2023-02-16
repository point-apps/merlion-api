import { CaptureRepository } from "../repositories/capture.repository.js";
import DatabaseConnection, { QueryInterface } from "@src/database/connection.js";
import { fields, limit, page, skip, sort } from "@src/database/mongodb-util.js";

export class IkigaiService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(query: QueryInterface, search: any) {
    const captureRepository = new CaptureRepository(this.db);

    const aggregates: any = [];

    const all = [];
    const nin = [];

    if (search === "easy") {
      all.push("easy");
      nin.push("enjoy");
      nin.push("excellent");
      nin.push("earn");
    }

    if (search === "enjoy") {
      nin.push("easy");
      all.push("enjoy");
      nin.push("excellent");
      nin.push("earn");
    }

    if (search === "excellent") {
      nin.push("easy");
      nin.push("enjoy");
      all.push("excellent");
      nin.push("earn");
    }

    if (search === "earn") {
      nin.push("easy");
      nin.push("enjoy");
      nin.push("excellent");
      all.push("earn");
    }

    if (search === "craft") {
      all.push("easy");
      all.push("enjoy");
      nin.push("excellent");
      nin.push("earn");
    }

    if (search === "creativity") {
      all.push("easy");
      nin.push("enjoy");
      all.push("excellent");
      nin.push("earn");
    }

    if (search === "competency") {
      nin.push("easy");
      nin.push("enjoy");
      all.push("excellent");
      all.push("earn");
    }

    if (search === "contribution") {
      nin.push("easy");
      all.push("enjoy");
      nin.push("excellent");
      all.push("earn");
    }

    if (search === "vocation") {
      all.push("easy");
      all.push("enjoy");
      nin.push("excellent");
      all.push("earn");
    }

    if (search === "passion") {
      all.push("easy");
      all.push("enjoy");
      all.push("excellent");
      nin.push("earn");
    }

    if (search === "profession") {
      all.push("easy");
      nin.push("enjoy");
      all.push("excellent");
      all.push("earn");
    }

    if (search === "mission") {
      nin.push("easy");
      all.push("enjoy");
      all.push("excellent");
      all.push("earn");
    }

    if (search === "ikigai") {
      all.push("easy");
      all.push("enjoy");
      all.push("excellent");
      all.push("earn");
    }

    aggregates.push({
      $unwind: "$clusters",
    });
    aggregates.push({
      $match: {
        $and: [{ "clusters.ikigai": { $all: all } }, { "clusters.ikigai": { $nin: nin } }],
      },
    });
    aggregates.push({
      $group: {
        _id: "$clusters.typology",
      },
    });
    const aggregateResult = await captureRepository.aggregate(aggregates, query);

    return aggregateResult;
  }
}
