import { IDatabaseAdapter } from "@src/database/connection";

export const name = "notifications";

export const restrictedFields = [];

const isExists = async (db: IDatabaseAdapter) => {
  const collections = (await db.listCollections()) as [];
  console.log(collections);
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
      required: ["subject"],
      properties: {
        createdAt: {
          bsonType: "date",
          description: "must be a date and is required",
        },
        updatedAt: {
          bsonType: "date",
          description: "must be a date and is required",
        },
        date: {
          bsonType: "date",
          description: "must be a date and is required",
        },
        subject: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        message: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        institution_id: {
          bsonType: "objectId",
          description: "must be an objectId",
        },
      },
    });
    await db.createIndex(
      name,
      { subject: -1 },
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
