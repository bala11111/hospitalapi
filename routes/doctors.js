const express = require("express");
const router = express.Router();

const doctorController = require('../controller/doctor_controller');

router.post("/register", doctorController.register);//Register doctor router
router.post('/login', doctorController.login);// Login doctor route

module.exports = router;