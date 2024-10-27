import express from "express";
import Ingredient from "../models/ingredientSchema.mjs";


const router = express.Router();

// Create ingredients
router.post("/", async (req, res) => {
  const { name, quantity } = req.body;

  if (!name || !quantity) {
    return res.status(400).json({ msg: "Name and quantity are required." });
  }

  try {
    const newIngredient = new Ingredient(req.body);
    await newIngredient.save();
    res.status(201).json(newIngredient);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
});

// Get all ingredients
router.get("/", async (req, res) => {
  try {
    const ingredients = await Ingredient.find({});
    res.json(ingredients);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;
