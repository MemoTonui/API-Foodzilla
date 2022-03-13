import { async } from "@firebase/util";
import mongoose from "mongoose";
import Food from "../models/foodsModel.js";
import Restaurant from "../models/restaurantsModel.js";

//Get All Restaurants
export const getAllRestaurants = async (req, res) => {
    try {
      const restaurant = await Restaurant.find();
      console.log(restaurant);
      res.status(200).json(restaurant);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  //Add a Restaurant
  export const AddARestaurant = async (req, res) => {
    const restaurant = req.body;
  
    const newRestaurant = new Restaurant(restaurant);
  
    try {
      await newRestaurant.save();
      res.status(201).json(newRestaurant);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };

  //Find a Restaurant By Id
  export const FindRestaurantById = async(req,res) =>{
    const { id: _id } = req.params;

    //Checks if the restaurant exists and if the id is valid
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("This restaurant does not exist");
  
    const restaurant = await Restaurant.findById(_id);
    res.json(restaurant);
  };

  //Add a food to a Restaurant
export const addFoodsToARestaurant = async (req,res) =>{
    //Get restaurant id
    const { id: _id } = req.params;
  
    //Checks if the restaurant exists and if the id is valid
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("This restaurant does not exist");
    const restaurant = await Restaurant.findById(_id);
  
    const newFood = new Food(req.body);
    console.log("New Food", newFood);
  
    try {
        newFood.restaurant = restaurant;
      await  newFood.save();
      restaurant.foods.push( newFood);
      await restaurant.save();
      res.status(201).json( newFood);
    } 
    catch (error) {
      res.status(409).json({ message: error.message });
    }
  };

//Get All Foods In a Restaurant
export const getFoodsInARestaurant = async (req,res) =>{
    const { id: _id } = req.params;
  
    //Checks if the restaurant exists and if the id is valid
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("This restaurant does not exist");
  
      const restaurant = await Restaurant.findById(_id).populate('foods');
      if(restaurant !== null){
        res.status(200).json(restaurant.foods);
      }
      else{
        res.json({ message: "This Restaurant Is Empty" });
      } 
  
  };

  //Get users with phone
export const filterRestaurant = async (req, res)=> {
  try {
    const restaurant = await Restaurant.find({
      restaurant: { $eq: req.params.restaurantName },
    });
    res.json(restaurant);
  } catch (error) {
    res.status(404).send(error);
  }
};




