// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/productRoute");
const cors = require("cors");

// Initialize Express app
const app = express();

// Connect to MongoDB database
mongoose
  .connect(
    "mongodb+srv://product-api:product-api@rizanizulf.xmtkgjr.mongodb.net/?retryWrites=true&w=majority&appName=Rizanizulfe",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

// Enable CORS
app.use(cors());
app.use(express.json());

// Route for products
app.use("/products", productRouter);

// Define routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
