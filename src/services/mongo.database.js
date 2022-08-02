import mongoose from "mongoose";
import config from "../utils/config";

const connectionString = config.MONGO_ATLAS_URL;

export const initMongoDB = async () => {
  try {
    console.log("Connecting to the Database");
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connection Established ");
  } catch (error) {
    console.log(`Error while connecting to the database => ${error}`);
    return error;
  }
};

export const disconnectDb = async () => {
  try {
    console.log("Disconnecting from the Database");
    await mongoose.disconnect();

    console.log("Disconnected");
  } catch (error) {
    console.log(`Error while disconnecting to the database => ${error}`);
    return error;
  }
};
