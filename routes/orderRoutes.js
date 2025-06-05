import express from 'express'
import orderModel from '../models/orderModel.js'

const orderRouter = express.Router()

orderRouter.post("/new", async (req, res) => {
  try {
    const { email, price } = req.body;

    const newOrder = new orderModel({ email, price });
    const savedOrder = await newOrder.save();

    return res.json(savedOrder);
  } catch (err) {
    return res.status(500).json({ message: "Error creating order", error: err.message });
  }
});


orderRouter.get("/:id", async(req, res)=>{
    const email = req.params.id
    const results = await orderModel.find({ email }, { _id: 0, price: 1 });
    return res.json(results);

})

export default orderRouter