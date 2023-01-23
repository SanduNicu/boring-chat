import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/boring-chat";

mongoose.set('strictQuery', true)

const connect = () => {
  mongoose
    .connect(MONGO_URI, {
      autoCreate: true,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("Database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};

export default connect;
