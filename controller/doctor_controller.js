const Doctor = require('../models/doctor');
const jwt = require('jsonwebtoken');

//Registering a Doctor
module.exports.register = async function (req, res) {

    if (req.body.password != req.body.confirm_password) {
        return res.json(422, {
            response : "Paassword didnt match"
        });
    }
    
    try{
        let user = await Doctor.findOne({username:req.body.username});
        if(!user)
        {
            let doctor = await Doctor.create(req.body);
            return res.status(200).json({
                response : "Doctor has been registered",
                data : doctor
            });
        }else{
            return res.status(409).json({
                response : "Doctor already exists",
                data : user
            })
        }
    }
    catch(err){
        return res.status(500).json({
            response : "Internal Server error"
        })
    }
}

//for logging in a Doctor
module.exports.login = async function(req, res) {

    try{
        let user = await Doctor.findOne({username:req.body.username});
        if(!user || user.password!=req.body.password){
            return res.status(422).json({
                response : "Invalid Username/Password"
            });
        }

        return res.status(200).json({
            response : "Logged in succefully...here is your token",
            token : {
                token : jwt.sign(user.toJSON(), process.env.code, { expiresIn: '1000000' })
            }
        });
    }
    catch(err){
        return res.status(500).json({
            response : "Internal Server error"
        })
    }
}