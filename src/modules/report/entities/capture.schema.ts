import { IDatabaseAdapter } from "@src/database/connection";

export const name = "captures";

export const restrictedFields = [];

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
      required: ["activity", "description", "clusters", "observer", "isDraft"],
      properties: {
        createdAt: {
          bsonType: "date",
          description: "must be a date",
        },
        updatedAt: {
          bsonType: "date",
          description: "must be a date",
        },
        date: {
          bsonType: "date",
          description: "must be a date and is required",
        },
        activity: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        description: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        observer: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        isDraft: {
          bsonType: "bool",
          description: "must be a string and is required",
        },
      },
    });
    await db.createIndex(
      name,
      { activity: -1 },
      {
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
