import { Router } from "express";
import { getAllRecipes, getRecipeById } from "../controllers/recipes";

const router = Router();

router.get("/", getAllRecipes);
router.get("/:id",getRecipeById);

export { router };
