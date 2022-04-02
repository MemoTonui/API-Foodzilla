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
    type:Object,
  }],
  user:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  date:{
    type:Date,
    default: Date.now },

  status:{
    type: String,
    default:"Pending"
  }
});
const Order = mongoose.model('Order',orderSchema);
export default Order;