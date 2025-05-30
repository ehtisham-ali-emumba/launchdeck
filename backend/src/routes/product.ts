import express from "express";
import {
  createProduct,
  deleteProductById,
  getAllProducts,
  getProductById,
  updateProductById,
} from "../controllers/productController";

export const productRoutes = express.Router();

productRoutes.post("/", createProduct);

productRoutes.get("/", getAllProducts);

productRoutes.get("/:id", getProductById);

productRoutes.put("/:id", updateProductById);

productRoutes.delete("/:id", deleteProductById);
