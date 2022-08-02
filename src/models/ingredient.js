import mongoose from "mongoose";

export const ingredientCollection = "ingredients";

const IngredientSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    quantity: { type: Number, require: true },
  },
  { versionKey: false }
);

export const IngredientModel = mongoose.model(
  ingredientCollection,
  IngredientSchema
);
