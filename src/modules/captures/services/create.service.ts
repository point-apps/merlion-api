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
    const obj: any = {
      date: new Date(doc.date),
      activity: doc.activity,
      description: doc.description,
      observer: doc.observer,
      clusters: doc.clusters,
      isDraft: doc.isDraft,
    };
    const captureEntity = new CaptureEntity(obj);

    const captureRepository = new CaptureRepository(this.db);
    return await captureRepository.create(captureEntity.capture, options);
  }
}
