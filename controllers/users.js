import mongoose from "mongoose";
import User from "../models/userModel.js";
import Order from "../models/orderModel.js";


export const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    console.log(user);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;

  const newUser = new User(user);

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id: _id } = req.params;
  const user = req.body;

  //Checks if the user exists and if the id is valid
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("This user does not exist");

  const updatedUser = await User.findByIdAndUpdate(_id, user, { new: true });
  res.json(updatedUser);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("User doesn't exist");

  await User.findByIdAndRemove(id);

  res.json({ message: "User Deleted" });
};


//Find user by id
export const findUserById = async (req, res) => {
  const { id: _id } = req.params;

  //Checks if the user exists and if the id is valid
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("This user does not exist");

  const user = await User.findById(_id);
  res.json(user);
};

//Find User by phone number
export const findUserByPhoneNumber = async (req,res) =>{
  const {phoneNumber} = req.params;
  try {
    const users = await User.find({
      phoneNumber: { $eq: phoneNumber },
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).send(error);
  }
};

//Get Orders Made By A User
export const getUsersOrders = async (req,res) =>{
  const { id: _id } = req.params;

  //Checks if the user exists and if the id is valid
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("This user does not exist");

    const user = await User.findById(_id).populate('orders');
    if(user !== null){
      res.status(200).json(user.orders);
    }
    else{
      res.json({ message: "No Orders Have Been Made" });
    } 

};

// Make An Order
export const makeOrder = async (req,res) =>{
  //Get user id
  const { id: _id } = req.params;

  //Checks if the user exists and if the id is valid
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("This user does not exist");
  const user = await User.findById(_id);

  const newOrder = new Order(req.body);
  console.log("New Order", newOrder);

  try {
   
    newOrder.user = user;
    await newOrder.save();
    user.orders.push(newOrder);
    await user.save();
    res.status(201).json(newOrder);
  } 
  catch (error) {
    res.status(409).json({ message: error.message });
  }

};

