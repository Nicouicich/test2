import { IngredientModel } from "../models/ingredient";

export const getIngredients = async (req, res) => {
  try {
    let ingredients = await IngredientModel.find();

    if (!ingredients){
      res.status(404).json({
        data: "Ingredient not found"
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

export const getIngredientById = async (req, res) => {
  try {
    const { id } = req.params;

    let ingredient = 0;
    if (id) {
      ingredient = await IngredientModel.findById(id);
    }
    if(!ingredient){
      res.status(404).json({
        data: "Ingredient not found",
      });
    }

    res.status(200).json({
      data: ingredient,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const addStock = async (req, res) => {
  try {
    const { id, quantity } = req.body.data;

    const ingredient = await IngredientModel.findById(id);
    if (ingredient) {
      ingredient.quantity += quantity;

      const ingredientDTO = await IngredientModel.findByIdAndUpdate(id, {
        name: ingredient.name,
        quantity: ingredient.quantity,
      });
      res.status(200).json({
        data: ingredientDTO,
      });
    } else {
      res.status(404).json({
        data: "Ingredient not found!",
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const subStock = async (req, res) => {
  try {
    const { id, quantity } = req.body.data;

    if (id){

      const ingredient = await IngredientModel.findById(id);
      console.log(ingredient)
      if (ingredient) {
        if (ingredient.quantity - quantity < 0) {
          return "Cannot subtract more than stock available.";
        } else {
          ingredient.quantity -= quantity;
        }
  
        const ingredientDTO = await IngredientModel.findByIdAndUpdate(id, {
          name: ingredient.name,
          quantity: ingredient.quantity,
        });
        res.status(200).json({
          data: ingredientDTO,
        });
    }
    } else {
      res.status(404).json({
        data: "Ingredient not found!",
      });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const rebootStock = async (req,res) => {
  try {
    await IngredientModel.updateMany({}, { quantity: 5 });
    return "Documents rebooted";
  } catch (err) {
    return err;
  }
};


