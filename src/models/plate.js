import { ingredientCollection } from "./ingredient";
import mongoose from "mongoose";

export const plateCollection = "plates";

const PlatesSchema = new mongoose.Schema(
  {
    recipe: {
      type: mongoose.Schema.Types.ObjectId,
      ref: ingredientCollection,
      required: true,
    },
    order: {type: Number, unique:true, required: true},
    status:{type: String, default: "Pending"}
  },
  { versionKey: false }
);

export const PlateModel = mongoose.model(plateCollection, PlatesSchema);
