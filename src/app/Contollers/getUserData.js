const userModel=require("../models/user_model");
exports.getUserData=async (req,res)=>{
    const registerObj=await userModel.find();
    try {
        console.log(registerObj)
        return res.status(200).send(registerObj)
    }catch(err) {
        Console.log("Error While creating user",err)
        res.status(500).send({
            message:"Error while registing user"
        })
    }
}
