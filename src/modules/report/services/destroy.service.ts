import { CaptureRepository } from "../repositories/capture.repository.js";
import DatabaseConnection, { DeleteOptionsInterface } from "@src/database/connection.js";

export class DestroyCaptureService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(id: string, options?: DeleteOptionsInterface) {
    const captureRepository = new CaptureRepository(this.db);
    return await captureRepository.delete(id, options);
  }
}
