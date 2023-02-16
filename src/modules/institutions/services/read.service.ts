import { InstitutionEntity, InstitutionInterface } from "../entities/institution.entity.js";
import { InstitutionRepository } from "../repositories/institution.repository.js";
import DatabaseConnection from "@src/database/connection.js";

export class ReadInstitutionService {
  private db: DatabaseConnection;
  constructor(db: DatabaseConnection) {
    this.db = db;
  }
  public async handle(id: string) {
    const institutionRepository = new InstitutionRepository(this.db);
    const result = (await institutionRepository.read(id)) as unknown as InstitutionInterface;

    const institution: InstitutionInterface = {
      _id: result._id as string,
      name: result.name as string,
    };
    const institutionEntity = new InstitutionEntity(institution);

    return institutionEntity.institution;
  }
}
