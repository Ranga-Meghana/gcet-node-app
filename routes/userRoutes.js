import express from 'express';
import userModel from '../models/userModel.js';
import bcrypt from 'bcryptjs';

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, pass } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists!" });

    const hashedPassword = await bcrypt.hash(pass, 10);

    const newUser = new userModel({
      name,
      email,
      pass: hashedPassword,
    });

    const savedUser = await newUser.save();
    res.json({
      _id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
    }); 
  } catch (err) {
    res.status(500).json({ message: "Error registering user", error: err.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(pass, user.pass);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    }); 
  } catch (err) {
    res.status(500).json({ message: "Login error", error: err.message });
  }
});

userRouter.get("/:id", async (req, res) => {
  const email = req.params.id;
  const result = await userModel.findOne({ email });
  return res.json(result);
});

userRouter.get("/:id/name", async (req, res) => {
  const email = req.params.id;
  const result = await userModel.findOne({ email }, { _id: 0, name: 1 });
  return res.json(result);
});

export default userRouter;
