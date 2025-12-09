// backend/routes/postRouter.js
const express = require('express');
const postRouter = express.Router();
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const { sendOtp, verifyOtpAndSignup, login, createPost } = require('../controllers/postControllers');
const jwtMiddleware = require('../middlewares/jwtMilddleware');

// ensure uploads/posts directory exists
const uploadDir = path.join(__dirname, '..', 'uploads', 'posts');
fs.mkdirSync(uploadDir, { recursive: true });

// multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = file.fieldname + '-' + Date.now() + ext;
    cb(null, name);
  }
});

const fileFilter = (req, file, cb) => {
  // accept only image mime types
  if (file.mimetype && file.mimetype.startsWith('image/')) cb(null, true);
  else cb(new Error('Only image files are allowed'), false);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5 MB
});

// Request an OTP to user's email
postRouter.post('/send-otp', sendOtp);

// Verify OTP and complete signup
postRouter.post('/verify-signup', verifyOtpAndSignup);

// Login route
postRouter.post('/login', login);

// Create a post (protected). Field name for image: 'image'
postRouter.post('/create-post', jwtMiddleware, upload.single('image'), createPost);

module.exports = postRouter;