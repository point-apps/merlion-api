import { ObjectId } from "mongodb";
import { CaptureEntity } from "../entities/capture.entity.js";
import { CaptureRepository } from "../repositories/capture.repository.js";
import DatabaseConnection, { DocumentInterface } from "@src/database/connection.js";

export class UpdateCaptureService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(id: string, doc: DocumentInterface, session: unknown) {
    const obj: any = {
      date: new Date(new Date(doc.date).getTime() + new Date().getTimezoneOffset()),
      activity: doc.activity,
      description: doc.description,
      observer: doc.observer,
      clusters: doc.clusters,
      isDraft: doc.isDraft,
    };

    const captureEntity = new CaptureEntity(obj);

    const captureRepository = new CaptureRepository(this.db);
    return await captureRepository.update(id, captureEntity.capture, { session });
  }
}
