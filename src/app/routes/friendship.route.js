const friendshipController=require('../Contollers/friends.controller');
module.exports=(app)=>{
    app.post("/friendship",friendshipController.friendController);
}