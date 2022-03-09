import mongoose from 'mongoose';
import Food from './foodsModel.js';
var Schema = mongoose.Schema;
const orderSchema = new Schema({
  subTotal:{
      type:Number
  },
  deliveryCost:{
      type:Number
  },
  location:{
      type:String,
      required:true
  },
  food:[{
    type:Food,
  }],
  user:{
    type:Schema.Types.ObjectId,
    ref:'User'
  }
});
const Order = mongoose.model('Order',orderSchema);
export default Order;