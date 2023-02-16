import { IDatabaseAdapter } from "@src/database/connection";

export const name = "clusters";

export const restrictedFields = ["password"];

const isExists = async (db: IDatabaseAdapter) => {
  const collections = (await db.listCollections()) as [];
  return collections.some(function (el: any) {
    return el.name === name;
  });
};

export async function createCollection(db: IDatabaseAdapter) {
  try {
    if (!(await isExists(db))) {
      await db.createCollection(name);
    }

    await db.updateSchema(name, {
      bsonType: "object",
      required: ["name", "alias", "description", "typologies", "suggestion"],
      properties: {
        createdAt: {
          bsonType: "date",
          description: "must be a date and is required",
        },
        updatedAt: {
          bsonType: "date",
          description: "must be a date and is required",
        },
        name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        alias: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        description: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        suggestion: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        typologies: {
          bsonType: "array",
          description: "must be an array of string and is required",
        },
      },
    });
    await db.createIndex(
      name,
      { name: -1 },
      {
        unique: true,
        collation: {
          locale: "en",
          strength: 2,
        },
      }
    );
  } catch (error) {
    throw error;
  }
}

export async function dropCollection(db: IDatabaseAdapter) {
  try {
    if (await isExists(db)) {
      await db.dropCollection(name);
    }
  } catch (error) {
    throw error;
  }
}
