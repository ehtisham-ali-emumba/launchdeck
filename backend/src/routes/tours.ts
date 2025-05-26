import express from "express";
import {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} from "../controllers/tourController";

export const tourRoutes = express.Router();

tourRoutes.get("/", getAllTours);
tourRoutes.get("/:id", getTourById);
tourRoutes.post("/", createTour);
tourRoutes.put("/:id", updateTour);
tourRoutes.delete("/:id", deleteTour);
