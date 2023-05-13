import { ObjectId } from "mongodb";
import { CaptureEntity } from "../entities/capture.entity.js";
import { CaptureRepository } from "../repositories/capture.repository.js";
import DatabaseConnection, { CreateOptionsInterface, DocumentInterface } from "@src/database/connection.js";

export class CreateCaptureService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(doc: DocumentInterface, options?: CreateOptionsInterface) {
    console.log("doc", doc);
    const obj: any = {
      date: new Date(doc.date),
      activity: doc.activity,
      description: doc.description,
      observer: doc.observer,
      clusters: doc.clusters,
      isDraft: doc.isDraft,
      createdBy_id: doc.createdBy_id,
    };
    const captureEntity = new CaptureEntity(obj);

    const captureRepository = new CaptureRepository(this.db);
    const result = await captureRepository.create(captureEntity.capture, options);
    return result;
  }
}
