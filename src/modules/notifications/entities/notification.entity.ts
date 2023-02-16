import { ObjectId } from "mongodb";

export interface NotificationInterface {
  _id?: string;
  date?: Date;
  subject?: string;
  message?: string;
  institution_id?: string | ObjectId;
}

export const restricted = [];

export class NotificationEntity {
  public notification: NotificationInterface;

  constructor(notification: NotificationInterface) {
    this.notification = notification;
  }
}
