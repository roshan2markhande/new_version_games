//a)id, user_id, games_played (array of objects with fields: game_id, score, playtime)

const mongoose=require('mongoose')
const { schema } = require('./user_model')
const playerSchema=new mongoose.Schema({
    User_id : {
        type: String,
    require : true
},
games_played : {
    type: String,
require : true
}
},{timestamp:true, versionkey:false});
module.exports=mongoose.model('player',playerSchema)