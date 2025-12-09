// backend/routes/getRouter.js
const express = require('express');
const router = express.Router();
const { getProfileByUsername, getAllPosts, getCommentsForPost } = require('../controllers/getcontrollers');

// GET profile by username (public). Optional Authorization header accepted.
router.get('/profile/:username', getProfileByUsername);

// GET all posts (public)
router.get('/posts', getAllPosts);

// GET comments for a post
router.get('/posts/:postId/comments', getCommentsForPost);

module.exports = router;