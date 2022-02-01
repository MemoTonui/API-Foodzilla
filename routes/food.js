import express from 'express';
import { findFoodById, getFoods } from '../controllers/foodController.js';
const router = express.Router();

router.get("/",getFoods);

router.get("/:id", findFoodById);

export default router;