const tranModel=require('../models/transaction.model')
exports.tranController=async(req,res)=>{
    const req_body=req.body;
    const tranObj={
        User_id : req_body.User_id,
    games_played :req_body.games_played
    }

    try {
        const insertTran=tranModel.create(tranObj)
        return res.status(200).send(insertTran)

    }catch(err) {
        console.log("Error while transaction details");
        res.status(500).send({
            message:"Error while transaction details"
        })
    }
}