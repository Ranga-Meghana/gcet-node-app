import express from "express";
import cors from "cors";

const app = express();
app.use(cors()); 
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello");
});

app.get("/weather", (req, res) => {
  return res.send("28"); 
});

app.listen(8080, () => {
  console.log("Server Started on port 8080");
});


app.get("/home", (req, res) => {
  return res.send(""); 
});