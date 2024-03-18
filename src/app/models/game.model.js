
const mongoose=require('mongoose');
//schema
const Schema = mongoose.Schema;
const gameSchema = new Schema({
     User_id:{
        type:String,
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    developer:{
        type:String,
        required:true
    },
    image_url:{
        type:String,
        required:true
    },
    platforms:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    }
},{timestamp:true, versionkey:false})
//go ahead collecion
module.exports=mongoose.model('game',gameSchema)