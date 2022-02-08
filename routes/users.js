import express from "express";
import {
  createUser,
  deleteUser,
  findUserById,
  findUserByPhoneNumber,
  getUsers,
  getUsersOrders,
  makeOrder,
  updateUser,
 
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

router.get("/:id", findUserById);

router.get("/phone/:phoneNumber", findUserByPhoneNumber);

router.get("/:id/orders", getUsersOrders);

router.post("/:id/order/new", makeOrder);



export default router;
