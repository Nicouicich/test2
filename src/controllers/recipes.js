import { RecipeModel } from "../models/recipe";
import { between } from "../utils/random";

export const getRandomRecipe = async () => {
  try {
    const recipes = await RecipeModel.find();
    // Here i select a random recipe
    const recipe = recipes[between(0, recipes.length)];

    return recipe;
  } catch (err) {
    return err;
  }
};

export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await RecipeModel.find();
    if (!recipes){
      res.status(404).json({
        data: "Recipes not found",
      });
    }
    res.status(200).json({
      data: recipes,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    let recipe = null;
    if (id) {
      recipe = await RecipeModel.findById(id);
    }

    if (!recipe) {
      res.status(404).json({
        data: "Recipe not found",
      });
    }

    res.status(200).json({
      data: recipe,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};
