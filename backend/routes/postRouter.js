// backend/routes/postRouter.js
const express = require('express');
const postRouter = express.Router();
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const { sendOtp, verifyOtpAndSignup, login, createPost, likePost, createComment, updateProfile, followUser, unfollowUser } = require('../controllers/postControllers');
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

// public/auth routes
postRouter.post('/send-otp', sendOtp);
postRouter.post('/verify-signup', verifyOtpAndSignup);
postRouter.post('/login', login);

// create post (protected) (image field name = 'image')
postRouter.post('/create-post', jwtMiddleware, upload.single('image'), createPost);

// like/unlike a post (protected)
postRouter.post('/posts/:id/like', jwtMiddleware, likePost);

// add comment to post (protected)
postRouter.post('/posts/:id/comment', jwtMiddleware, createComment);


// Update profile (protected)
postRouter.put('/user/update', jwtMiddleware, updateProfile);


// follow / unfollow by username (protected)
postRouter.post('/user/:username/follow', jwtMiddleware, followUser);
postRouter.post('/user/:username/unfollow', jwtMiddleware, unfollowUser);
module.exports = postRouter;