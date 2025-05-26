import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { connectDB } from "./config/db";
import { tourRoutes } from "./routes/tours";

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(cors({ origin: "*" })); // Allow all origins
app.use(bodyParser.json());

connectDB();

// Routes
app.use("/api/tours", tourRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
