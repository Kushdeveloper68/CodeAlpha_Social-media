// backend/routes/getRouter.js
const express = require('express');
const router = express.Router();
const { getProfileByUsername, getAllPosts, getCommentsForPost, getCurrentUser } = require('../controllers/getcontrollers');
const jwtMiddleware = require('../middlewares/jwtMilddleware');

// GET profile by username (public). Optional Authorization header accepted.
router.get('/profile/:username', getProfileByUsername);

// GET current logged-in user (protected)
router.get('/me', jwtMiddleware, getCurrentUser);

// GET all posts (public)
router.get('/posts', getAllPosts);

// GET comments for a post
router.get('/posts/:postId/comments', getCommentsForPost);

module.exports = router;