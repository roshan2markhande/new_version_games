const chatModel=require('../models/chat.model');

exports.Chating= async (req,res) =>{
    const req_body=req.req_body;
    const chatObj= {
        sender_id:req_body.sender_id,
        receiver_id:req_body.receiver_id,
        message:req_body.message
    }
    try {
        const inserChat=await chatModel.create(chatObj)
        return res.status(200).send(inserChat)

    }catch(err) {
        console.log("Error while sending message",err);
        res.status(500).send({
            message:"Error while sending message"
        })
    }
}