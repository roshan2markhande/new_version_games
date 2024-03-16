const userModel=require("../models/user_model");
const bcrypt=require("bcryptjs");
exports.register=async (req,res)=>{
    const req_body=req.body;
    const userObj={
        Firstname:req_body.firstName,
        Lastname:req_body.lastName,
        Password:req_body.password,
        Email:req_body.email,
        Mob_No:req_body.mob_no,
        Ans:req_body.ans,
        gender:req_body.gender
    }
    console.log('hi')
    const registerObj=await userModel.create(userObj)
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