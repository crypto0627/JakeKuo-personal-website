import { MongoClient, ServerApiVersion } from "mongodb";

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  maxPoolSize: 5,
  minPoolSize: 0,
  maxIdleTimeMS: 30000,
  connectTimeoutMS: 30000,
  socketTimeoutMS: 45000,
};

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export function getMongoClient(): Promise<MongoClient> {
  if (!global._mongoClientPromise) {
    const uri = process.env.DATABASE_URI;
    if (!uri) {
      throw new Error("DATABASE_URI is not defined");
    }

    const client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }

  return global._mongoClientPromise;
}
