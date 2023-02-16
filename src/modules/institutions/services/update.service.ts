import { InstitutionEntity } from "../entities/institution.entity.js";
import { InstitutionRepository } from "../repositories/institution.repository.js";
import DatabaseConnection, { DocumentInterface } from "@src/database/connection.js";

export class UpdateInstitutionService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(id: string, doc: DocumentInterface, session: unknown) {
    const institutionEntity = new InstitutionEntity({
      name: doc.name,
    });

    const institutionRepository = new InstitutionRepository(this.db);
    return await institutionRepository.update(id, institutionEntity.institution, { session });
  }
}
