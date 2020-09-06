const express = require("express");
const router = express.Router();

router.get('/',function(req,res){
    return res.status(200).json({
        message : "This is homepage"
    });
});

router.use('/doctors',require('./doctors'));

module.exports = router;