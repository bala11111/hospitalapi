const express = require("express");
const router = express.Router();
const passport = require("passport");
const patientsController = require('../controller/patients_controller');

router.post('/register',passport.authenticate("jwt", { session: false }),patientsController.register);//Registering Patient
router.post('/:id/create_report',passport.authenticate("jwt", { session: false }),patientsController.createReport);//Create Report of patient
router.get('/:id/all_reports',passport.authenticate("jwt", { session: false }),patientsController.showReport);//Show reports of patients

module.exports = router;