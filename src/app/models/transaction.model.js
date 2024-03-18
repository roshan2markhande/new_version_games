const mongoose=require('mongoose');
//schema
const Schema = mongoose.Schema;
const transactionSchema = new Schema({
    User_id:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    }
},{timestamp:true, versionkey:false})
//go ahead collecion
module.exports=mongoose.model('Tran',transactionSchema)