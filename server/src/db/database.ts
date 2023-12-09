import "dotenv/config";
import mongoose from "mongoose";

let database: mongoose.Connection;

export const connectToMongodb = () => {
  const uri = 'mongodb://127.0.0.1:27017';  
  // const uri = `${process.env.MONGODB_URI}`;
  if (database) {
    return;
  }

  mongoose.connect(uri, {});
  database = mongoose.connection;
  database.once("open", async () => {
    console.log("Connected to database");
  });
  database.on("error", () => {
    console.log("Error connecting to database");
  });
};

export const disconnect = () => {
  if (!database) {
    return;
  }
  mongoose.disconnect();
};
