const express = require('express');
const router = express.Router();
const jwtMiddleware = require('../middlewares/jwtMilddleware');
const { getProfileByUsername, getAllPosts, getCommentsForPost, getCurrentUser, getFollowersByUsername, getFollowingByUsername } = require('../controllers/getcontrollers');

// GET profile by username (public)
router.get('/profile/:username', getProfileByUsername);

// GET followers for a username (public)
router.get('/profile/:username/followers', getFollowersByUsername);

// GET following for a username (public)
router.get('/profile/:username/following', getFollowingByUsername);

// GET current logged-in user (protected)
router.get('/me', jwtMiddleware, getCurrentUser);

// GET all posts (public)
router.get('/posts', getAllPosts);

// GET comments for a post
router.get('/posts/:postId/comments', getCommentsForPost);

module.exports = router;