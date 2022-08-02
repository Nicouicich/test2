import axios from "axios";
import { getRandomRecipe } from "./recipes";
import { between } from "../utils/random";
import { addPurchase } from "./purchase";
import { PlateModel } from "../models/plate";

const getIngredientsFromMarket = async (ingredientName) => {
  const url = "https://recruitment.alegra.com/api/farmers-market/buy";
  try{
    let ingredientBought = 0;
    await axios
      .get(url, {
        params: {
          ingredient: ingredientName,
        },
      })
      .then((response) => {
        ingredientBought = response.data.quantitySold;
      });
    if (ingredientBought) await addPurchase(ingredientName, ingredientBought);
    return ingredientBought;
  }
  catch(err){
    return err
  }
  
};

export const newPlate = async (req, res) => {
  try {
    const recipe = await getRandomRecipe();

    for (let i = 0; i < recipe.ingredients.length; i++) {
      let ingredientRecipe = recipe.ingredients[i];

      //This is to get the ingredient saved in the database
      let ingredientDTO = await axios.get(
        "http://localhost:8080/api/ingredients/",
        {
          data: {
            id: ingredientRecipe.id,
          },
        }
      );
      
      while (ingredientDTO.quantity < ingredientRecipe.quantity) {
        let ingredientBought = await getIngredientsFromMarket(
          ingredientRecipe.name
        );
        if (ingredientBought == 0) {
          setTimeout(() => {}, 2000);
        } else {
          let newStock = ingredientDTO.quantity + ingredientBought;
          ingredientDTO.quantity = newStock;

          //This is to add the ingredients bought from the market to the database
          await axios.post(
            "http://localhost:8080/api/ingredients/add",
            {
              data: {
                id: ingredientRecipe.id,
                quantity: newStock
              },
            }
          );
        }
      }

      //This is to subtract the ingredient used in the plate
      await axios.post(
        "http://localhost:8080/api/ingredients/sub",
        {
          data: {
            id: ingredientRecipe.id,
            quantity: ingredientRecipe.quantity
          },
        }
      );
    }
    
    let plates = await PlateModel.find();
    let order = plates.length + 1;
    let plate = await PlateModel.create({ recipe: recipe.id, order });

    setTimeout( async () => {
      await endPlate(plate._id);
    }, between(60000, 120000));

    res.status(200).json({
      data: plate,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
      stack: err.stack,
    });
  }
};

export const getPendingPlate = async (req, res) => {
  try {
    const plates = await PlateModel.find({ status: "Pending" });

    if (!plates){
      res.status(404).json({
        data: "Plates not found",
      });
    }


    res.status(200).json({
      data: plates,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const finishPlate = async (req, res) => {
  try {
    const { id } = req.params;

    const plate = await PlateModel.findById(id);
    const plateUpdate = await PlateModel.findByIdAndUpdate(id, {
      name: plate.name,
      quantity: plate.quantity,
      status: "Delivered",
    });

    if (!plateUpdate){
      res.status(404).json({
        data: "Plate not found",
      });
    }

    res.status(200).json({
      data: plateUpdate,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};

export const endPlate = async (id) => {
  try {
    const plate = await PlateModel.findById(id);
    const plateUpdate = await PlateModel.findByIdAndUpdate(id, {
      name: plate.name,
      quantity: plate.quantity,
      status: "Delivered",
    });
    return plateUpdate;
  } catch (err) {
    return err;
  }
};

export const getPlates = async (req, res) => {
  try {
    const plates = await PlateModel.find();

    res.status(200).json({
      data: plates,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
      stack: err.stack,
    });
  }
};
