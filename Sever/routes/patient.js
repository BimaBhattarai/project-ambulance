const express = require('express');
const router = express.Router();
const reqSignIn = require("../middleware/auth");

const patientController = require('../controller/patient')
router.post('/requestambulance', patientController.reqAmbulance)
module.exports = router;