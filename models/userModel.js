import mongoose from 'mongoose';
var Schema = mongoose.Schema;
const userSchema = new Schema({
   username:{
       type:String,
       required:true
   },
   firebaseUid:{
       type:String
   },
   fullName:{
       type: String
   },
   location:{
       type:String,
       default:""
   },
   phoneNumber:{
       type:String,
       required:true,
       unique:true
   },
   email:{
    type:String,
    required:true,
    unique:true
   },
   imgUrl:{
       type:String,
       default:""
   },
   orders:[{
    type:Schema.Types.ObjectId,
    ref:'Order'
   }],
   status:{
       type:Boolean,
       default:true
   }

});
const User = mongoose.model('User',userSchema);
export default User;