import mongoose from "mongoose";
import { ingredientCollection } from "./ingredient";

const recipeCollection = "recipes";

const RecipeSchema = new mongoose.Schema(
  {
    ingredients: [
      {
        name: { type: String, require: true },
        quantity: { type: Number, require: true },
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: ingredientCollection,
          required: true,
        },
      },
    ],
    name: { type: String, require: true }

  },
  { versionKey: false }
);

export const RecipeModel = mongoose.model(recipeCollection, RecipeSchema);
