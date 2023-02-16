import { NotificationRepository } from "../repositories/notification.repository.js";
import DatabaseConnection, { DeleteOptionsInterface } from "@src/database/connection.js";

export class DestroyNotificationService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(id: string, options?: DeleteOptionsInterface) {
    const notificationRepository = new NotificationRepository(this.db);
    return await notificationRepository.delete(id, options);
  }
}
