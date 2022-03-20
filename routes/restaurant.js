import express from 'express';
import { AddARestaurant, addFoodsToARestaurant, deleteRestaurant, filterRestaurant, FindRestaurantById, getAllRestaurants, getFoodsInARestaurant } from '../controllers/restaurantController.js';

const router = express.Router();

router.get('/',getAllRestaurants);

router.get('/:id', FindRestaurantById);

router.post('/new', AddARestaurant);

router.post('/:id/food/new', addFoodsToARestaurant);

router.get('/:id/food', getFoodsInARestaurant);
router.get("/:restaurantName",filterRestaurant);

router.delete("/:id",deleteRestaurant);
export default router;