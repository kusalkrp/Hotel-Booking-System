import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tours";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

mongoose.set("strictQuery", false);
// database connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB database connected");
  } catch (err) {
    console.log("MongoDB database not connected:", err.message);
  }
};

// connect to the database before starting the server

// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/tours", tourRoute);

// start the server
app.listen(port, () => {
  connect();
  console.log("Server listening on port", port);
});