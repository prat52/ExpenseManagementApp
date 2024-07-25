
const userModel = require('../models/userModel');

const loginController = async(req,res) => {
    try{
        // const {email,password} = req.body;
        // const user = await userModel.findOne({email,password});
        // if(!user){
        //     res.status(404).send('User not found');
        // }
        // res.status(200).json({
        //     succes: true,
        //     user
        // });
        const {email,password} = req.body;

        const user = await userModel.findOne({email,password});

        if(!user){

            res.status(404).send('User Not Found');

        }
        res.status(200).json({

            succes : true,
            user
        })
    }
    catch(err){

        res.status(400).json({succes:false,err});

    }
}

const registerController = async(req,res) => {
    try{
        const newUser = new userModel(req.body);

        await newUser.save();


        res.status(201).json({
            succes : true,
            newUser
        })
    }
    catch(err){

        res.status(400).json({succes:false,err});

    }
}

module.exports = {loginController,registerController};
// module.exports = {};