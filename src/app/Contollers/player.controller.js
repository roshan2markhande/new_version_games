const playerModel=require('../models/player.model')
exports.playerController=async(req,res)=>{
    const req_body=req.body;
    const playerObj={
        User_id : req_body.User_id,
    games_played :req_body.games_played
    }

    try {
        const insertPlayer=playerModel.create(playerObj)
        return res.status(200).send(insertPlayer)

    }catch(err) {
        console.log("Error while inserting player details");
        res.status(500).send({
            message:"Error while inserting player details"
        })
    }
}