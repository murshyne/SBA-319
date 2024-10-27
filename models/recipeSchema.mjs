import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  year: {
    type: Number,
  },
});

export default mongoose.model("Recipe", recipeSchema);
