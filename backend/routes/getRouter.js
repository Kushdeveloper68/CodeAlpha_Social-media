// backend/routes/getRouter.js
const express = require('express');
const router = express.Router();
const { getProfileByUsername } = require('../controllers/getcontrollers');

// GET profile by username (public). Optional Authorization header accepted.
router.get('/profile/:username', getProfileByUsername);

module.exports = router;