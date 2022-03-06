import { async } from "@firebase/util";
import mongoose from "mongoose";
import Order from "../models/orderModel";

//Get All Orders
export const getAllOrders = async (req, res) => {
    try {
      const orders = await Order.find();
      console.log(orders);
      res.status(200).json(orders);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  //Find order by id
export const findOrderById = async (req, res) => {
    const { id: _id } = req.params;
  
    //Checks if the user exists and if the id is valid
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("This order does not exist");
  
    const order = await Order.findById(_id);
    res.json(order);
  };
