
const playerController=require('../Contollers/player.controller');
module.exports=(app)=>{
    app.post("/player",playerController.playerController)
}