import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
});


ingredientSchema.index({ name: 1 });

export default mongoose.model("Ingredient", ingredientSchema);