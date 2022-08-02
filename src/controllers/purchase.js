import { PurchaseModel } from "../models/purchaseHistory";

export const addPurchase = async (name, quantity) => {
  try {
    const purchase = await PurchaseModel.create({name, quantity});
    return purchase;

  } catch (err) {
    return err;
  }
};

export const getPurchaseHistory = async (req, res) => {
  try {
    const ingredients = await PurchaseModel.find();
    
    if (!ingredients){
      res.status(404).json({
        data: "Purchase History empty",
      });
    }
    res.status(200).json({
      data: ingredients,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};
