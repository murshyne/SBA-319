import express from "express";
import Recipe from "../models/recipeSchema.mjs";
import User from "../models/userSchema.mjs";
import Ingredient from "../models/ingredientSchema.mjs";
const router = express.Router();

// Create Recipe
router.post("/", async (req, res) => {
  try {
    const { name, userId, ingredients, year } = req.body;
    const newRecipe = new Recipe({ name, userId, ingredients, year });
    await newRecipe.save();
    res.json(newRecipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Read Recipes
router.get("/", async (req, res) => {
  try {
    const allRecipes = await Recipe.find({}).populate("userId ingredients");
    res.json(allRecipes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Update Recipe
router.put("/:id", async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedRecipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Delete Recipe
router.delete("/:id", async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    res.json(deletedRecipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

export default router;