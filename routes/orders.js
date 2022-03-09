import express from 'express';
import { findOrderById, getAllOrders } from '../controllers/orderController.js';

const router = express.Router();

router.get("/",getAllOrders);

router.get("/:id", findOrderById);

export default router;