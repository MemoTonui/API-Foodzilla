import mongoose from 'mongoose';
var Schema = mongoose.Schema;
const restaurantsSchema = new Schema({
   restaurantName:{
       type:String,
       required:true
   },
   restaurantLocation:{
    type:String,
    default:""
   },

   restaurantRating:{
       type:Number,
       default:0
   },
   restaurantStatus:{
       type:String,
       default:"isOpen"
   },
   restaurantImgUrl:{
       type:String,
       default:""
   },
   foods:[{
    type:Schema.Types.ObjectId,
    ref:'Food'
   }]

});
const Restaurant = mongoose.model('Restaurant',restaurantsSchema);
export default Restaurant;