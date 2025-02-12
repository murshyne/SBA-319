// imports
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./db/conn.mjs";
import recipeRoutes from "./routes/recipeRoutes.mjs";
import userRoutes from "./routes/userRoutes.mjs"
import ingredientRoutes from "./routes/ingredientRoutes.mjs";

// Setups
const app = express();
dotenv.config();
let PORT = process.env.PORT || 3000;

// Connect to DB
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use("/ingredients", ingredientRoutes);
app.use("/recipes", recipeRoutes);
app.use("/users", userRoutes);

// Listener
app.listen(PORT, () => {
  console.log(`Server Running on Port: ${PORT}`);
});
