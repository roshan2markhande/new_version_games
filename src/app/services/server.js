const express=require("express")
const app = express();
const bcrypt = require("bcryptjs");
const mongoose=require('mongoose');
const serverConfig=require("../config/server.config")
const db_config = require("../config/db.config");
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
mongoose.connect(db_config.DB_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db=mongoose.connection; //connection starts

db.on('error',()=>{
  console.log("Error while connecting to server");
})
db.once('open',()=>{
  console.log("server connected sucessfully");
})
//Stitch the express app server to route
require("../routes/register.route")(app) ;
// require("../routes/chat.route")(app) ;
// require("../routes/friendship.route")(app) ;
// require("../routes/game.route")(app) ;
// require("../routes/player.route")(app) ;
// require("../routes/transaction.route")(app) ;
//start the server
app.listen(serverConfig.PORT, () => {
  console.log("Server Started on port num:", serverConfig.PORT);
});