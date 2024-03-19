const gameController=require('../Contollers/game.controller');
module.exports=(app)=>{
    app.post("/game",gameController.Games);
}