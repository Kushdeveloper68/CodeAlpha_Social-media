// backend/controllers/getcontrollers.js
const jwt = require('jsonwebtoken');
const { userModel, postModel, commentModel } = require('../models');

const JWT_SECRET = process.env.JWTKEY || 'kush123';

// GET all public posts (most recent first). If Authorization Bearer token provided,
// include `viewerId` and whether viewer liked each post as `viewerHasLiked`.
async function getAllPosts(req, res) {
  try {
    // optional viewer context
    let viewerId = null;
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      try {
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, JWT_SECRET);
        viewerId = decoded.id;
      } catch (err) {
        // ignore invalid token
      }
    }

    const posts = await postModel.find({ privacy: 'public' }).sort({ createdAt: -1 })
      .populate({ path: 'userId', select: 'username avatar' })
      .lean();

    const result = posts.map(p => {
      const likedByViewer = viewerId ? (Array.isArray(p.likes) && p.likes.some(u => String(u) === String(viewerId) || (u && String(u._id) === String(viewerId)))) : false;
      return {
        _id: p._id,
        user: p.userId ? { id: p.userId._id, username: p.userId.username, avatar: p.userId.avatar || '' } : null,
        content: p.content,
        media: p.media,
        likeCount: p.likeCount || (p.likes ? p.likes.length : 0),
        commentsCount: p.commentsCount || 0,
        createdAt: p.createdAt,
        viewerHasLiked: likedByViewer
      };
    });

    return res.status(200).json({ success: true, posts: result });
  } catch (error) {
    console.error('getAllPosts error:', error);
    return res.status(500).json({ success: false, message: 'Error fetching posts', error: error.message });
  }
}

// GET comments for a post (public). Populates commenter
async function getCommentsForPost(req, res) {
  try {
    const postId = req.params.postId;
    if (!postId) return res.status(400).json({ success: false, message: 'postId is required' });

    const comments = await commentModel.find({ postId }).sort({ createdAt: 1 }).populate({ path: 'userId', select: 'username avatar' }).lean();

    const result = comments.map(c => ({
      id: c._id,
      text: c.text,
      createdAt: c.createdAt,
      user: c.userId ? { id: c.userId._id, username: c.userId.username, avatar: c.userId.avatar || '' } : null
    }));

    return res.status(200).json({ success: true, comments: result });
  } catch (error) {
    console.error('getCommentsForPost error:', error);
    return res.status(500).json({ success: false, message: 'Error fetching comments', error: error.message });
  }
}


// existing getProfileByUsername (kept as-is)
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

// Add this function to backend/controllers/getcontrollers.js

// GET current logged-in user (protected route - requires jwt middleware)
async function getCurrentUser(req, res) {
  try {
    const userId = req.user && req.user.id;
    if (!userId) return res.status(401).json({ success: false, message: 'Unauthorized' });

    const user = await userModel.findById(userId).select('-password').lean();
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    const userPublic = {
      id: user._id,
      username: user.username,
      email: user.email,
      avatar: user.avatar || '',
      bio: user.bio || '',
      links: user.links || {},
      createdAt: user.createdAt
    };

    return res.status(200).json({ success: true, user: userPublic });
  } catch (error) {
    console.error('getCurrentUser error:', error);
    return res.status(500).json({ success: false, message: 'Error fetching user', error: error.message });
  }
}

module.exports = {
  getAllPosts,
  getCommentsForPost,
  getProfileByUsername,
  getCurrentUser
};