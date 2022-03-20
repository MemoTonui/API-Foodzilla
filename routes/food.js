import express from 'express';
import { deleteFood, findFoodById, getFoods } from '../controllers/foodController.js';
const router = express.Router();

router.get("/",getFoods);

router.get("/:id", findFoodById);

router.delete("/:id", deleteFood);

export default router;