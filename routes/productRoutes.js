import express from 'express';
import productModel from '../models/productModel.js';
import verifyToken from '../middleware/auth.js'; // 🔐 Middleware to protect routes

const productRouter = express.Router();

// ✅ Public: Get all products
productRouter.get('/', async (req, res) => {
  try {
    const products = await productModel.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
});

// 🔐 Protected: Add new product (requires valid JWT)
productRouter.post("/add", verifyToken, async (req, res) => {
  try {
    const { name, description, imgUrl, price } = req.body;
    const newProduct = new productModel({ name, description, imgUrl, price });
    const result = await newProduct.save();
    return res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Error adding product", error });
  }
});

export default productRouter;
