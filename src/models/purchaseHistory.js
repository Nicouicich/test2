import mongoose from "mongoose";

export const purchaseCollection = "purchases";

const PurchaseSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    quantity: { type: Number, require: true },
  },
  { versionKey: false }
);

export const PurchaseModel = mongoose.model(purchaseCollection, PurchaseSchema);
