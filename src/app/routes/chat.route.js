const chatContorller=require('../Contollers/chat.controller')
module.exports=(app)=>{
    app.post("/chat",chatContorller.Chating);
}