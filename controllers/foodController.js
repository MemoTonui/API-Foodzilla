import mongoose from "mongoose";
import Food from "../models/foodsModel.js";


//Get All Foods
export const getFoods = async (req, res) => {
  try {
    const food = await Food.find();
    console.log(food);
    res.status(200).json(food);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


//Find Food By Id
export const findFoodById = async (req, res) => {
  const { id: _id } = req.params;

  //Checks if the food exists and if the id is valid
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("This Food Doesn't Exist");

  const food = await Food.findById(_id);
  res.json(food);
};

export const deleteFood = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("This food doesn't exist");

  await Food.findByIdAndRemove(id);

  res.json({ message: "Food Deleted" });
};

