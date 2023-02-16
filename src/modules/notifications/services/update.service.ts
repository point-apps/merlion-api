import { ObjectId } from "mongodb";
import { NotificationEntity } from "../entities/notification.entity.js";
import { NotificationRepository } from "../repositories/notification.repository.js";
import DatabaseConnection, { DocumentInterface } from "@src/database/connection.js";

export class UpdateNotificationService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(id: string, doc: DocumentInterface, session: unknown) {
    const obj: any = {
      date: new Date(doc.date),
      subject: doc.subject,
      message: doc.message,
    };
    if (doc.institution_id) {
      obj.institution_id = new ObjectId(doc.institution_id);
    }

    const notificationEntity = new NotificationEntity(obj);

    const notificationRepository = new NotificationRepository(this.db);
    return await notificationRepository.update(id, notificationEntity.notification, { session });
  }
}
