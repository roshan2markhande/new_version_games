const userModel = require("../models/user_model");
const bcrypt = require('bcryptjs');
exports.register = async (req, res) => {
    const req_body = req.body;
    const userObj = {
        Firstname: req_body.firstName,
        Lastname: req_body.lastName,
        Password: bcrypt.hashSync(req_body.password, 8),
        Email: req_body.email,
        Mob_No: req_body.mob_no,
        Ans: req_body.ans,
        gender: req_body.gender,
        User_id:req_body.user_id
    }
    const registerObj = await userModel.create(userObj)
    try {
        console.log(registerObj)
        return res.status(200).send(registerObj)
    } catch (err) {
        Console.log("Error While creating user", err)
        res.status(500).send({
            message: "Error while creating user"
        })
    }
}
exports.getData = async (req, res) => {
    const req_body = req.body;
    try {
        const user_details = await userModel.find()
        console.log(user_details);
       return res.status(201).send(user_details)
        
    } catch (err) {
        console.log("Error while getting user", err);
        res.status(500).send({
            message: "Some error happend while registring user"
        })
    }
}
exports.singin = async (req, res) => {
    //check user id presend in the system
    const user = await userModel.findOne({ userId: req.body.userId });

    if (user == null) {
        return res.status(400).send({
            message: "User not presend"
        })
    }

//passward is correct
//encrypt krega with check karega
const isPasswardValid = bcrypt.compareSync(req.body.Password, user.password)
if (isPasswardValid == false) {
    return res.status(401).send({
        message: "wrong passward"
    })
}
//using jwt create access token with ttl and return
const token = jwt.sign({ id: user.userId }, secret.secret,
    {
        expiresIn: 120  //time to active
    })
res.status(200).send({
    name: user.name,
    userId: user.userId,
    email: user.email,
    accessToken: token

})
console.log(token)
//user id se create 

}