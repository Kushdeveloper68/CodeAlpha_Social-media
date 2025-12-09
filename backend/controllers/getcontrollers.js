// backend/controllers/getcontrollers.js
const jwt = require('jsonwebtoken');
const { userModel, postModel } = require('../models');

const JWT_SECRET = process.env.JWTKEY || 'kush123';

async function getProfileByUsername(req, res) {
  try {
    const username = (req.params.username || '').toLowerCase().trim();
    if (!username) return res.status(400).json({ success: false, message: 'Username is required' });

    // Find user and populate a small subset of follower/following details for display
    const user = await userModel.findOne({ username }).select('-password').populate({
      path: 'followers',
      select: 'username avatar'
    }).populate({
      path: 'following',
      select: 'username avatar'
    });

    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    // Try to decode token if provided to know who's viewing the profile (optional)
    let viewerId = null;
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      try {
        const decoded = jwt.verify(token, JWT_SECRET);
        viewerId = decoded.id;
      } catch (err) {
        // invalid token -> ignore; viewerId remains null
      }
    }

    // Get user's posts (most recent first)
    const posts = await postModel.find({ userId: user._id }).sort({ createdAt: -1 }).lean();

    const followersCount = (user.followers && user.followers.length) || 0;
    const followingCount = (user.following && user.following.length) || 0;
    const isOwnProfile = viewerId ? String(viewerId) === String(user._id) : false;

    let viewerIsFollowing = false;
    if (viewerId && user.followers && user.followers.length) {
      viewerIsFollowing = user.followers.some(f => String(f._id || f) === String(viewerId));
    }

    // Prepare response user data (avoid sending sensitive fields)
    const userPublic = {
      id: user._id,
      username: user.username,
      avatar: user.avatar || '',
      bio: user.bio || '',
      links: user.links || {},
      createdAt: user.createdAt,
      // include a few follower samples (username + avatar) for UI
      followerSamples: (user.followers || []).slice(0, 6).map(f => ({ id: f._id, username: f.username, avatar: f.avatar || '' }))
    };

    return res.status(200).json({
      success: true,
      user: userPublic,
      posts,
      followersCount,
      followingCount,
      viewerIsFollowing,
      isOwnProfile,
      viewerId
    });
  } catch (error) {
    console.error('getProfileByUsername error:', error);
    return res.status(500).json({ success: false, message: 'Error fetching profile', error: error.message });
  }
}

module.exports = {
  getProfileByUsername
};