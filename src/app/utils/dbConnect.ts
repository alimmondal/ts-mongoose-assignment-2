import mongoose from "mongoose";
import { log } from "./logger";

// const URI = "mongodb://localhost:27017/practice";
const { URI } = process.env;
// const port = process.env.PORT || 5000;

// database connection
const dbConnect = async (): Promise<void> => {
  try {
    if (!URI) {
      log.error("URI is no defined");
      process.exit(1);
    }
    await mongoose.connect(URI);
    log.info("database connected");
  } catch (err: any) {
    log.error(err.message);
  }
};
export default dbConnect;
// console.log(URI);
