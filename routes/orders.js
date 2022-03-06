import express from 'express';
import { findOrderById, getAllOrders } from '../controllers/orderController';

const router = express.Router();

router.get("/",getAllOrders);

router.get("/:id", findOrderById);

export default router;