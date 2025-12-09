// backend/routes/postRouter.js
const express = require('express');
const postRouter = express.Router();
const { sendOtp, verifyOtpAndSignup } = require('../controllers/postControllers');

// Request an OTP to user's email
postRouter.post('/send-otp', sendOtp);

// Verify OTP and complete signup
postRouter.post('/verify-signup', verifyOtpAndSignup);

// You can add login and other post routes here
module.exports = postRouter;