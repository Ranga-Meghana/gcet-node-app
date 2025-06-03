import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors()); 
app.use(express.json());

app.listen(8080, () => {
    mongoose.connect("mongodb://localhost:27017/gcet");
  console.log("Server Started on port 8080");
});

const userSchema = mongoose.Schema({
    name: {type: String},
});

const user = mongoose.model("User", userSchema);

app.get("/register", async(req, res)=>{
    const result = await user.insertOne({name: "John"});
    return res.json(result);
})

app.get("/", (req, res) => {
  return res.send("Hello :)");
});

app.get("/weather", (req, res) => {
  return res.send("28"); 
});



app.get("/home", (req, res) => {
  return res.send(""); 
});