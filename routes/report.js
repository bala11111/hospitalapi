const express = require("express");
const router = express.Router();
const passport = require("passport");
const reportsController = require('../controller/reports_controller');

router.get('/:status',passport.authenticate('jwt', {session: false}),reportsController.statusReports);//Show reports of particular status

module.exports = router;