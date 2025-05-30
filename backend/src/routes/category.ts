import express from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
} from "../controllers";

export const categoryRoutes = express.Router();

categoryRoutes.post("/", createCategory);

categoryRoutes.get("/", getAllCategories);

categoryRoutes.get("/:id", getCategoryById);
