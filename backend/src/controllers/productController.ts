import { Request, Response } from "express";
import Product from "../models/Product";
import Category from "../models/Category";
import { generateMongoQuery } from "../services/groqService";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};

// Get all Products with embedded category object, paginated based on query params
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = (req.query.limit ?? 16) as number;
    const categoryId = req.query.categoryId as string;
    const skip = (page - 1) * limit;

    // Build filter object
    const filter: any = {};
    if (categoryId) {
      filter.categoryId = categoryId;
    }
    const [products, total] = await Promise.all([
      Product.find(filter).skip(skip).limit(limit).lean(),
      Product.countDocuments(filter),
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
};

export const getProductById = async (req: Request, res: Response) => {
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
};

export const updateProductById = async (req: Request, res: Response) => {
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
};

export const deleteProductById = async (req: Request, res: Response) => {
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
};

export const searchProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { query } = req.query;

    if (!query || typeof query !== "string") {
      res.status(400).json({ error: "Search query is required" });
      return;
    }

    // Get MongoDB filter from Groq AI
    const aiFilter = await generateMongoQuery(query);

    let mongoFilter = aiFilter;

    // Handle category lookup if needed
    if (aiFilter.needsCategoryLookup && aiFilter.categoryName) {
      const category = await Category.findOne({
        name: { $regex: aiFilter.categoryName, $options: "i" },
      });

      if (category) {
        mongoFilter = { categoryId: category._id };
      } else {
        mongoFilter = {};
      }
    }

    // Remove our custom fields
    delete mongoFilter.needsCategoryLookup;
    delete mongoFilter.categoryName;

    console.log("🚀 Generated MongoDB filter:", mongoFilter);

    const [products, total] = await Promise.all([
      Product.find(mongoFilter).populate("categoryId", "name").limit(5).lean(),
      Product.countDocuments(mongoFilter),
    ]);

    res.json({
      data: products,
      total,
      query: query,
      filter: mongoFilter,
    });
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ error: "Search failed" });
  }
};
