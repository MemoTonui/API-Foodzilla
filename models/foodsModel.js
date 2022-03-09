import mongoose from 'mongoose';
var Schema = mongoose.Schema;
const foodsSchema = new Schema({
   foodName:{
       type:String
   },
   foodRating:{
       type:Number,
       default:0
   },
   foodPrice:{
       type:Number,
       default:0
   },
   foodImgUrl:{
       type:String
   },
   foodDescription:{
    type:String
},
   restaurant:{
    type:Schema.Types.ObjectId,
    ref:'Restaurant'
   },
   quantity:{
       type:Number,
       default:1
   }
   
});
const Food = mongoose.model('Food',foodsSchema);
export default Food;