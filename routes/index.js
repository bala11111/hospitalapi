const express = require("express");
const router = express.Router();

//The home route
router.get('/',function(req,res){
    return res.status(200).json({
        respose : "Hey...you are now in homepage"
    });
});

//Doctor route
router.use('/doctors',require('./doctors'));
//Patient route
router.use('/patients',require('./patients'));
//Report route
router.use('/report',require('./report'))

module.exports = router;