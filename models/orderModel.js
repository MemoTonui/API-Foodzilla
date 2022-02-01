import mongoose from 'mongoose';
var Schema = mongoose.Schema;
const orderSchema = new Schema({
    country:{
        type:String,
        required :true
    },
    city:{
        type:String,
        required :true
    },
    state:{
        type:String,
        required :true
    },
    address:{
        type:String,
        required :true
    },
  subTotal:{
      type:Number
  },
  deliveryCost:{
      type:Number
  },
  user:{
    type:Schema.Types.ObjectId,
    ref:'User'
  }
});
const Order = mongoose.model('Order',orderSchema);
export default Order;