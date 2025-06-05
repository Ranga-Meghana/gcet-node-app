import mongoose from "mongoose";
const orderSchema = mongoose.Schema({
  email: {type: String,required: true},
  price: {type: Number,required: true},}, 
  { timestamps: true });

export default mongoose.model("Order", orderSchema)