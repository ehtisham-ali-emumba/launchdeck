import express, { Request, Response } from "express";
import Product from "../models/Product";
import Category from "../models/Category";

export const productRoutes = express.Router();

productRoutes.post("/", async (req: Request, res: Response) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});

productRoutes.get("/", async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = 16;
    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
      Product.find().skip(skip).limit(limit).lean(),
      Product.countDocuments(),
    ]);

    const categoryIds = products.map((p) => p.categoryId);

    const categories = await Category.find({
      _id: { $in: categoryIds },
    }).lean();

    const productsWithCategory = products.map((product) => ({
      ...product,
      category:
        categories.find(
          (cat) => cat._id.toString() === product.categoryId.toString()
        ) || null,
    }));

    res.json({
      data: productsWithCategory,
      page,
      pageSize: limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

productRoutes.get("/:id", async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id).lean();
    if (!product) {
      res.status(404).json({ error: "Product not found" });
      return;
    }

    const category = await Category.findById(product.categoryId).lean();
    res.json({ ...product, category: category || null });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

productRoutes.put("/:id", async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      res.status(404).json({ error: "Product not found" });
      return;
    }
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});

productRoutes.delete("/:id", async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      res.status(404).json({ error: "Product not found" });
      return;
    }
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});
