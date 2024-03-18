//d, sender_id, receiver_id, message, timestam.
const mongoose=require('mongoose')
const chatSchema=mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    sender_id:{
        type:String,
        required:true,
    },
    receiver_id:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
},{timestamp:true, versionkey:false});
module.exports=mongoose.model('chat',chatSchema)