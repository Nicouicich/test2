import { Router } from "express";
import { router as plateRouter } from "./plate";
import { router as ingredientRouter } from "./ingredients";
import { router as recipeRouter } from "./recipe";
import { router as purchaseRouter } from "./purchase";

const router = Router();

router.use("/plates", plateRouter);
router.use("/ingredients", ingredientRouter);
router.use("/recipes", recipeRouter);
router.use("/purchases", purchaseRouter);

export { router };
