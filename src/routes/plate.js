import { Router } from "express";
import { newPlate, getPendingPlate, finishPlate, getPlates } from "../controllers/plate";

const router = Router()

router.post('/',newPlate)
router.get('/pending',getPendingPlate)
router.get('/all', getPlates)
router.post('/:id',finishPlate)


export {router}