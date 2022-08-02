import { Router } from "express";
import { getPurchaseHistory } from "../controllers/purchase";

const router = Router()

router.get('/',getPurchaseHistory)

export {router}