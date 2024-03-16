const getUserData=require("../Contollers/getUserData");
module.exports=(app)=>{
    app.post("/getUserData",getUserData.getUserData)
}