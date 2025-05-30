import express from "express";
import {
  createLandscape,
  getAllLandscapes,
  getLandscapeById,
} from "../controllers";

export const landscapeRoutes = express.Router();

// Create Landscape
landscapeRoutes.post("/", createLandscape);

// Get all Landscapes with embedded category object, paginated
landscapeRoutes.get("/", getAllLandscapes);

// Get single Landscape by ID with embedded category object
landscapeRoutes.get("/:id", getLandscapeById);
