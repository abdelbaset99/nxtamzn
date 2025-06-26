import mongoose from "mongoose";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cached = (global as any).mongoose || { conn: null, promise: null };

export const dbConnect = async (uri = process.env.MONGODB_URI) => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!uri) {
    throw new Error("No URI provided");
  }

  cached.promise = cached.promise || mongoose.connect(uri);
  cached.conn = await cached.promise;
  return cached.conn;
};
