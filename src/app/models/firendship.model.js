const mongoose=require('mongoose')
const friendshipSchema=mongoose.Schema({
_id :{
    type:String,
},
User_id :{
    type:String,
    required:true,
},
friend_id :{
    type:String,
    required:true,
},
status :{
    type:String,
    required:true,
    default:"pending",
enum:["accepted","pending","rejected"],
}
   
},{timestamp:true, versionkey:false});
module.exports=mongoose.model('friendship',friendshipSchema)

