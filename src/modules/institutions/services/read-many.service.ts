import { InstitutionRepository } from "../repositories/institution.repository.js";
import DatabaseConnection, { QueryInterface } from "@src/database/connection.js";

export class ReadManyInstitutionService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(query: QueryInterface) {
    const institutionRepository = new InstitutionRepository(this.db);
    return await institutionRepository.readMany(query);
  }
}
