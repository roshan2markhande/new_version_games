const mongoose=require('mongoose');
//schema
const Schema = mongoose.Schema;
const userSchema = new Schema({
    Firstname:{
        type:String,
        required:true
    },
    Lastname:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Mob_No:{
        type:Number,
        required:true
    },
    Ans:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    
    User_id:{
        type:String,
    }
    
},{timestamp:true, versionkey:false})
//go ahead collecion
module.exports=mongoose.model('User',userSchema)