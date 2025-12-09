// backend/controllers/postControllers.js
const { userModel, postModel, commentModel, OtpModel } = require('../models');
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

const JWT_SECRET = process.env.JWTKEY || 'kush123';
const OTP_TTL_MINUTES = 10;

// configure nodemailer transporter (expects env EMAIL and PASS)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL, // your gmail
    pass: process.env.PASS // your app password
  }
});

// helper to generate numeric OTP
function generateOtp() {
  return String(Math.floor(100000 + Math.random() * 900000)); // 6-digit
}

// SEND OTP
async function sendOtp(req, res) {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ success: false, message: 'Email is required' });

    const otp = generateOtp();
    const otpHash = await bcrypt.hash(otp, 10);
    const expiresAt = new Date(Date.now() + OTP_TTL_MINUTES * 60 * 1000);

    // upsert OTP for this email
    await OtpModel.findOneAndUpdate(
      { email: email.toLowerCase().trim() },
      { otpHash, expiresAt, createdAt: new Date() },
      { upsert: true, new: true }
    );

    // send email
    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL,
      to: email,
      subject: 'Your SocialX OTP',
      text: `Your verification code is ${otp}. It will expire in ${OTP_TTL_MINUTES} minutes.`,
      html: `<p>Your verification code is <b>${otp}</b>. It will expire in ${OTP_TTL_MINUTES} minutes.</p>`
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'OTP sent to email' });
  } catch (error) {
    console.error('sendOtp error:', error);
    return res.status(500).json({ success: false, message: 'Failed to send OTP', error: error.message });
  }
}

// VERIFY OTP and SIGNUP
async function verifyOtpAndSignup(req, res) {
  try {
    const { username, email, password, otp } = req.body;

    if (!email || !password || !otp || !username) {
      return res.status(400).json({ success: false, message: 'username, email, password and otp are required' });
    }

    const emailLower = email.toLowerCase().trim();
    const otpEntry = await OtpModel.findOne({ email: emailLower });
    if (!otpEntry) {
      return res.status(400).json({ success: false, message: 'No OTP requested for this email or OTP expired' });
    }

    if (new Date() > new Date(otpEntry.expiresAt)) {
      // remove expired OTP
      await OtpModel.deleteOne({ email: emailLower });
      return res.status(400).json({ success: false, message: 'OTP has expired. Please request a new one.' });
    }

    const isMatch = await bcrypt.compare(String(otp), otpEntry.otpHash);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid OTP' });
    }

    // Check if user already exists by email or username
    const existingByEmail = await userModel.findOne({ email: emailLower });
    if (existingByEmail) {
      return res.status(400).json({ success: false, message: 'An account with this email already exists' });
    }

    const existingByUsername = await userModel.findOne({ username: username.toLowerCase().trim() });
    if (existingByUsername) {
      return res.status(400).json({ success: false, message: 'Username is already taken' });
    }

    // create user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      username: username.toLowerCase().trim(),
      email: emailLower,
      password: hashedPassword,
      isVerified: true
    });

    // remove used OTP
    await OtpModel.deleteOne({ email: emailLower });

    // generate token
    const token = jwt.sign({ id: newUser._id, email: newUser.email }, JWT_SECRET, { expiresIn: '7d' });

    // return user summary
    return res.status(201).json({
      success: true,
      message: 'User created successfully',
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email
      }
    });
  } catch (error) {
    console.error('verifyOtpAndSignup error:', error);
    return res.status(500).json({ success: false, message: 'Signup failed', error: error.message });
  }
}

module.exports = {
  sendOtp,
  verifyOtpAndSignup,
  // ...other exported functions can be added here (login, etc.)
};