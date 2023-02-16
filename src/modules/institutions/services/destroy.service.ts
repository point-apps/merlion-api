import { InstitutionRepository } from "../repositories/institution.repository.js";
import DatabaseConnection, { DeleteOptionsInterface } from "@src/database/connection.js";

export class DestroyInstitutionService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(id: string, options?: DeleteOptionsInterface) {
    const institutionRepository = new InstitutionRepository(this.db);
    return await institutionRepository.delete(id, options);
  }
}
