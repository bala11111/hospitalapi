const Doctor = require('../models/doctor');
const jwt = require('jsonwebtoken');

module.exports.register = async function(req,res){
    try{
        let user = await Doctor.findOne({id: req.body._id});
        if(!user){
            await Doctor.create(req.body);
            return res.status(200).json({
                response : "Doctor successfully created",
                data: req.body
              });
        }
        else{
            return res.status(200).json({
                response : "Doctor already exists",
              });
        }
    }
    catch(err){
        return res.status(507).json({
            response : "Internal server error",
            error : err
          });
    }
}

module.exports.login = async function(req,res){
    try{
        let user = await Doctor.findOne({ username: req.body.username });
        if(!user || user.password != req.body.password){
            return res.status(422).json({
                response: "Invalid username or password"
            });
        }

        return res.status(200).json({
            response : "logged in succesfully and here is you token",
            data : {
                token : jwt.sign(user.toJSON(), 'bala', {expiresIn:  '100000'})
            },           
        });
    }
    catch(error)
    {
        return res.status(507).json({
            response : "Internal server error",
            err : error
          });
    }
}