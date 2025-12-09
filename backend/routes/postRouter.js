// backend/routes/postRouter.js
const express = require('express');
const postRouter = express.Router();
const { sendOtp, verifyOtpAndSignup, login } = require('../controllers/postControllers');

// Request an OTP to user's email
postRouter.post('/send-otp', sendOtp);

// Verify OTP and complete signup
postRouter.post('/verify-signup', verifyOtpAndSignup);


// Login route
postRouter.post('/login', login);


module.exports = postRouter;