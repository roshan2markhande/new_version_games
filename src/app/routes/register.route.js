const registerController=require("../Contollers/register.controller");
module.exports=(app)=>{
    app.post("/register",registerController.register)
    app.get("/getData",registerController.getData)
}
