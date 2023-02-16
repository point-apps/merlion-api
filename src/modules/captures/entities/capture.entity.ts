import { ObjectId } from "mongodb";

export interface CaptureInterface {
  _id?: string;
  date?: Date;
  activity?: string;
  description?: string;
  observer?: string;
  clusters?: [];
  isDraft?: boolean;
}

export const restricted = [];

export class CaptureEntity {
  public capture: CaptureInterface;

  constructor(capture: CaptureInterface) {
    this.capture = capture;
  }
}
