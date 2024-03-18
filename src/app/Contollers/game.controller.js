const gameModel=require('../models/game.model');
exports.Games=async(req,res)=> {
    const req_body=req.body;

    const gamesObj={
        User_id:req_body.User_id,
        title:req_body.title,
        description:req_body.description,
        developer:req_body.developer,
        image_url:req_body.image_url,
        platforms:req_body.platforms,
        genre:req_body.genre
    }
    try {
        const insertGame=await gameModel.create(gamesObj)
        return res.status(200).send(insertGame) 
    }catch(err) {
        console.log('Error While Adding new game');
        res.status(500).send({
            message:"Error while adding new game"
        })
    }
}