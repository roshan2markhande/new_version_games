const friendModel=require('../models/firendship.model');

exports.friendController=async (req,res)=>{
    const req_body=req.body;

        const friendObj={
            User_id:req_body.User_id,
            friend_id:req_body.friend_id,
            status:req_body.status
        }
        try {
            const insertFriends=friendModel.create(friendObj);
            return res.status(200).send(insertFriends)

        }catch(err) {
            console.log("Error while sending friend request",err);
            res.status(500).send({
                message:"Error While sending Friend Request"
            })
        }
}