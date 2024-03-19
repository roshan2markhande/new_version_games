const tranController=require("../Contollers/transaction.controller");
module.exports=(app)=>{
    app.post("/transation",tranController.tranController)
}