import mongoose from "mongoose";

const { DB_URI } = process.env;

if (!DB_URI) {
  throw "Invalid DB_URI";
}

export async function connectToDB() {
  try {
    await mongoose.connect(DB_URI as string);
    return { error: null };
  } catch (err) {
    return { error: err };
  }
}
