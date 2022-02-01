import express from 'express';
import { AddARestaurant, addFoodsToARestaurant, FindRestaurantById, getAllRestaurants, getFoodsInARestaurant } from '../controllers/restaurantController.js';

const router = express.Router();

router.get('/',getAllRestaurants);

router.get('/:id', FindRestaurantById);

router.post('/new', AddARestaurant);

router.post('/:id/food/new', addFoodsToARestaurant);

router.get('/:id/food', getFoodsInARestaurant);

export default router;