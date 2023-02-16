import { InstitutionEntity } from "../entities/institution.entity.js";
import { InstitutionRepository } from "../repositories/institution.repository.js";
import DatabaseConnection, { CreateOptionsInterface, DocumentInterface } from "@src/database/connection.js";

export class CreateInstitutionService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(doc: DocumentInterface, options?: CreateOptionsInterface) {
    const institutionEntity = new InstitutionEntity({
      name: doc.name,
    });

    const institutionRepository = new InstitutionRepository(this.db);
    return await institutionRepository.create(institutionEntity.institution, options);
  }
}
