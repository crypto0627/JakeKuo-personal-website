import { MongoClient, ServerApiVersion } from "mongodb";

const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  maxPoolSize: 10,
  minPoolSize: 1,
  maxIdleTimeMS: 30000,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
};

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

/**
 * 只在「真的被呼叫時」才：
 * 1. 讀 env
 * 2. 建立 MongoClient
 * 3. connect
 */
export function getMongoClient(): Promise<MongoClient> {
  const uri = process.env.DATABASE_URI;

  if (!uri) {
    throw new Error("DATABASE_URI is not defined");
  }

  // Dev：hot reload 共用同一條連線
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      const client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }
    return global._mongoClientPromise;
  }

  // Production：每個 lambda instance 共用
  const client = new MongoClient(uri, options);
  return client.connect();
}
