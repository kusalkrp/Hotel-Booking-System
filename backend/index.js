import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/users.js";
import tourRoute from "./routes/tours.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOption = {
  origin: true,
  credential: true,
};

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
app.use(cors(corsOption));
app.use(cookieParser());
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/review", reviewRoute);

// start the server
app.listen(port, () => {
  connect();
  console.log("Server listening on port", port);
});
