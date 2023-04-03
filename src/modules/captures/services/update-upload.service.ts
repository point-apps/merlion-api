import { CaptureRepository } from "../repositories/capture.repository.js";
import DatabaseConnection, { DocumentInterface } from "@src/database/connection.js";

export class UpdateUploadCaptureService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(id: string, doc: DocumentInterface, session: unknown) {
    const captureRepository = new CaptureRepository(this.db);
    console.log({
      $pull: {
        files: {
          id: doc.id,
        },
      },
    });
    return await captureRepository.update(
      id,
      {
        $pull: {
          files: {
            id: doc.id,
          },
        },
      },
      { session, xraw: true }
    );
  }
}
