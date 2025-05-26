import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { connectDB } from "./config/db";
import {
  categoryRoutes,
  landscapeRoutes,
  productRoutes,
  tourRoutes,
} from "./routes";

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(cors({ origin: "*" })); // Allow all origins
app.use(bodyParser.json());

connectDB();

// Routes
app.use("/api/tours", tourRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/landscapes", landscapeRoutes);
app.use("/api/products", productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
