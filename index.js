import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.json(users);
});


app.get("/products", (req, res) => {
  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 499 },
    { id: 3, name: "Headphones", price: 199 }
  ];
  
  return res.json(products);
});

app.listen(8080, () => {
  console.log("Server Started on port 8080");
});



// import express from "express";
// import cors from "cors";

// const app = express();
// app.use(cors()); 
// app.use(express.json());

// app.get("/", (req, res) => {
//   return res.send("Hello");
// });

// app.get("/weather", (req, res) => {
//   return res.send("28"); 
// });

// app.listen(8080, () => {
//   console.log("Server Started on port 8080");
// });


// app.get("/home", (req, res) => {
//   return res.send(""); 
// });