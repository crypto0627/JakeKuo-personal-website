import { MongoClient, ServerApiVersion } from "mongodb";

// 從環境變數取得 MongoDB URI
// 注意：如果密碼包含特殊字符（如 @, :, /, #, ?, &），需要進行 URL 編碼
const uri = process.env.DATABASE_URI;

if (!process.env.DATABASE_URI) {
  throw new Error("DATABASE_URI not set");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // 防止 dev 模式 hot reload 重複建立連線
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// 建立 MongoClient 的選項
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  // 添加連接選項以提高穩定性
  maxPoolSize: 10, // 最大連接池大小
  minPoolSize: 1, // 最小連接池大小
  maxIdleTimeMS: 30000, // 空閒連接的最大時間（30秒）
  connectTimeoutMS: 10000, // 連接超時時間（10秒）
  socketTimeoutMS: 45000, // Socket 超時時間（45秒）
};

// 創建連接函數，包含錯誤處理
function createClient(): MongoClient {
  if (!uri) {
    throw new Error("DATABASE_URI is not defined");
  }
  try {
    const client = new MongoClient(uri, options);
    return client;
  } catch (error) {
    console.error("Failed to create MongoDB client:", error);
    throw new Error(
      `MongoDB connection error: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

if (process.env.NODE_ENV === "development") {
  // 在開發模式下，使用全域變數來快取連接
  if (!global._mongoClientPromise) {
    client = createClient();
    global._mongoClientPromise = client
      .connect()
      .then(() => {
        console.log("✅ MongoDB connected successfully");
        return client;
      })
      .catch((error) => {
        console.error("❌ MongoDB connection failed:", error);
        // 清除失敗的連接 promise，以便下次重試
        global._mongoClientPromise = undefined;
        throw error;
      });
  }
  clientPromise = global._mongoClientPromise;
} else {
  // 在生產模式下，每次都建立新的連接
  client = createClient();
  clientPromise = client
    .connect()
    .then(() => {
      console.log("✅ MongoDB connected successfully");
      return client;
    })
    .catch((error) => {
      console.error("❌ MongoDB connection failed:", error);
      throw error;
    });
}

export default clientPromise;
