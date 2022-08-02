import { Router } from "express";
import { getIngredients, addStock, subStock,getIngredientById} from "../controllers/ingredient";

const router = Router()

router.get('/', getIngredients)
router.get('/:id',getIngredientById)
router.post('/add', addStock)
router.post('/sub',subStock)


export {router}