import express, { Request, Response } from "express";
import Landscape from "../models/Landscape";
import Category from "../models/Category";
import { delay } from "../utils";

export const landscapeRoutes = express.Router();

// Create Landscape
landscapeRoutes.post("/", async (req: Request, res: Response) => {
  try {
    const landscape = new Landscape(req.body);
    await landscape.save();
    res.status(201).json(landscape);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});

// Get all Landscapes with embedded category object, paginated
landscapeRoutes.get("/", async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = 16;
    const skip = (page - 1) * limit;

    // Get paginated landscapes
    const [landscapes, total] = await Promise.all([
      Landscape.find().skip(skip).limit(limit).lean(),
      Landscape.countDocuments(),
    ]);

    // Get all categoryIds from landscapes
    const categoryIds = landscapes.map((l) => l.categoryId);

    // Fetch categories for these landscapes
    const categories = await Category.find({
      _id: { $in: categoryIds },
    }).lean();

    // Embed category object in each landscape
    const landscapesWithCategory = landscapes.map((landscape) => ({
      ...landscape,
      category:
        categories.find(
          (cat) => cat._id.toString() === landscape.categoryId.toString()
        ) || null,
    }));

    await delay(2000);
    res.json({
      data: landscapesWithCategory,
      page,
      pageSize: limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// Get single Landscape by ID with embedded category object
landscapeRoutes.get("/:id", async (req: Request, res: Response) => {
  try {
    const landscape = await Landscape.findById(req.params.id).lean();
    if (!landscape) {
      res.status(404).json({ error: "Landscape not found" });
      return;
    }
    const category = await Category.findById(landscape.categoryId).lean();
    res.json({ ...landscape, category: category || null });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});
