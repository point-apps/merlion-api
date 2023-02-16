import { ObjectId } from "mongodb";

export interface InstitutionInterface {
  _id?: string;
  name?: string;
}

export const restricted = [];

export class InstitutionEntity {
  public institution: InstitutionInterface;

  constructor(institution: InstitutionInterface) {
    this.institution = institution;
  }
}
