import express, { Request, Response } from "express";
import Category from "../models/Category";

export const categoryRoutes = express.Router();

categoryRoutes.post("/", async (req: Request, res: Response) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});

categoryRoutes.get("/", async (_req: Request, res: Response) => {
  try {
    const categories = await Category.find().lean();

    const categoryMap: { [key: string]: any } = {};
    categories.forEach((cat) => {
      categoryMap[cat._id.toString()] = { ...cat, subCategories: [] };
    });

    categories.forEach((cat) => {
      if (cat.parentId) {
        const parent = categoryMap[cat.parentId.toString()];
        if (parent) {
          const { subCategories, ...catProps } =
            categoryMap[cat._id.toString()];
          parent.subCategories.push(catProps);
        }
      }
    });

    const rootCategories = categories
      .filter((cat) => !cat.parentId)
      .map((cat) => categoryMap[cat._id.toString()]);

    const formatted = rootCategories.map((cat) => {
      const result: any = { ...cat };
      if (cat.subCategories.length > 0) {
        result.subCategories = cat.subCategories;
      }
      return result;
    });

    res.json(formatted);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

categoryRoutes.get("/:id", async (req: Request, res: Response) => {
  try {
    const category = await Category.findById(req.params.id).lean();
    if (!category) {
      res.status(404).json({ error: "Category not found" });
      return;
    }

    const subCategories = await Category.find({
      parentId: category._id,
    }).lean();

    res.json({
      ...category,
      subCategories: subCategories.length > 0 ? subCategories : null,
    });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});
