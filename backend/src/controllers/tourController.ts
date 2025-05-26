import { Request, Response } from "express";
import { TourModel, ITour } from "../models/Tour";

// Get all tours
export const getAllTours = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const tours: ITour[] = await TourModel.find();
    res.status(200).json(tours);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tours" });
  }
};

// Get a single tour by ID
export const getTourById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const tour: ITour | null = await TourModel.findById(id);

    if (!tour) {
      res.status(404).json({ error: "Tour not found" });
      return;
    }

    res.status(200).json(tour);
  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch tour",
      details: err instanceof Error ? err.message : "Unknown error",
    });
  }
};

// Create a new tour
export const createTour = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const newTour: ITour = new TourModel(req.body);
    const savedTour: ITour = await newTour.save();
    res.status(201).json(savedTour);
  } catch (err) {
    res.status(400).json({
      error: "Failed to create tour",
      details: err instanceof Error ? err.message : "Unknown error",
    });
  }
};

// Update a tour
export const updateTour = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedTour: ITour | null = await TourModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedTour) {
      res.status(404).json({ error: "Tour not found" });
      return;
    }

    res.status(200).json(updatedTour);
  } catch (err) {
    res.status(400).json({
      error: "Failed to update tour",
      details: err instanceof Error ? err.message : "Unknown error",
    });
  }
};

// Delete a tour
export const deleteTour = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedTour: ITour | null = await TourModel.findByIdAndDelete(id);

    if (!deletedTour) {
      res.status(404).json({ error: "Tour not found" });
      return;
    }

    res.status(200).json({ message: "Tour deleted successfully" });
  } catch (err) {
    res.status(500).json({
      error: "Failed to delete tour",
      details: err instanceof Error ? err.message : "Unknown error",
    });
  }
};
