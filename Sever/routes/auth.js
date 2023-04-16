const express = require('express');
const router = express.Router();
const reqSignIn = require("../middleware/auth");



const authController = require('../controller/auth')


router.post('/login', authController.getLogin);

router.post('/signup', authController.getSignup);

router.post('/driverlogin', authController.getDriverLogin);

router.post('/driversignup', authController.postDriverSignup);
// protected routes auth

router.get("/user-auth", reqSignIn, (req, res) => {
    res.status(200).json({ok: true});
});

router.get("/driver-auth", reqSignIn, (req, res) => {
    res.status(200).json({ok: true});
});

// router.get("/driver-auth", reqDriverSignIn, (req, res) => {
//     res.status(200).json({ok: true});
// });



router.post("/logout", authController.postLogout);

module.exports = router;