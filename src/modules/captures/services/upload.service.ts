import { ObjectId } from "mongodb";
import { CaptureEntity } from "../entities/capture.entity.js";
import { CaptureRepository } from "../repositories/capture.repository.js";
import DatabaseConnection, { CreateOptionsInterface, DocumentInterface } from "@src/database/connection.js";

export class UploadCaptureService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(id: string, doc: DocumentInterface, options?: CreateOptionsInterface) {
    const captureRepository = new CaptureRepository(this.db);
    const result = await captureRepository.update(
      id,
      {
        $push: {
          files: {
            $each: doc.files,
          },
        },
      },
      {
        session: options?.session,
        xraw: true,
      }
    );
    return result;
  }
}
