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

// LOGIN
async function login(req, res) {
  try {
    // Accept identifier (username or email) and password
    const { identifier, password } = req.body;
    if (!identifier || !password) {
      return res.status(400).json({ success: false, message: 'Identifier and password are required' });
    }

    const isEmail = String(identifier).includes('@');
    const query = isEmail ? { email: identifier.toLowerCase().trim() } : { username: identifier.toLowerCase().trim() };

    const user = await userModel.findOne(query);
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

    // Return basic user info (don't return password)
    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar || '',
        role: user.role || 'user'
      }
    });
  } catch (error) {
    console.error('login error:', error);
    return res.status(500).json({ success: false, message: 'Login failed', error: error.message });
  }
}


async function createPost(req, res) {
  try {
    // jwt middleware should set req.user = { id, ... }
    const userId = req.user && req.user.id;
    if (!userId) return res.status(401).json({ success: false, message: 'Unauthorized. Please login.' });

    const content = (req.body.content || '').trim();

    // Accept one image uploaded under field name 'image'
    let mediaUrl = '';
    if (req.file) {
      // store accessible URL path relative to backend (served later)
      mediaUrl = `/uploads/posts/${req.file.filename}`;
    }

    // create post
    const newPost = await postModel.create({
      userId,
      content,
      media: mediaUrl,
      likeCount: 0,
      commentsCount: 0,
      privacy: 'public'
    });

    return res.status(201).json({ success: true, message: 'Post created', post: newPost });
  } catch (error) {
    console.error('createPost error:', error);
    return res.status(500).json({ success: false, message: 'Failed to create post', error: error.message });
  }
}

// POST like/unlike a post (toggle)
async function likePost(req, res) {
  try {
    const userId = req.user && req.user.id;
    if (!userId) return res.status(401).json({ success: false, message: 'Unauthorized' });

    const postId = req.params.id;
    if (!postId) return res.status(400).json({ success: false, message: 'Post id required' });

    const post = await postModel.findById(postId);
    if (!post) return res.status(404).json({ success: false, message: 'Post not found' });

    // likes stored as array of ObjectId (or user ids)
    const alreadyLiked = post.likes && post.likes.some(u => String(u) === String(userId) || (u._id && String(u._id) === String(userId)));

    if (alreadyLiked) {
      // remove like
      post.likes = post.likes.filter(u => !(String(u) === String(userId) || (u._id && String(u._id) === String(userId))));
      post.likeCount = Math.max(0, (post.likeCount || 0) - 1);
    } else {
      post.likes = post.likes || [];
      post.likes.push(userId);
      post.likeCount = (post.likeCount || 0) + 1;
    }

    await post.save();

    return res.status(200).json({ success: true, likeCount: post.likeCount, liked: !alreadyLiked });
  } catch (error) {
    console.error('likePost error:', error);
    return res.status(500).json({ success: false, message: 'Failed to toggle like', error: error.message });
  }
}

// POST create a comment for a post
async function createComment(req, res) {
  try {
    const userId = req.user && req.user.id;
    if (!userId) return res.status(401).json({ success: false, message: 'Unauthorized' });

    const postId = req.params.id;
    const { text } = req.body;

    if (!postId || !text || !text.trim()) return res.status(400).json({ success: false, message: 'post id and text are required' });

    const post = await postModel.findById(postId);
    if (!post) return res.status(404).json({ success: false, message: 'Post not found' });

    const created = await commentModel.create({
      postId,
      userId,
      text: text.trim()
    });

    // increment comment count on post
    post.commentsCount = (post.commentsCount || 0) + 1;
    await post.save();

    // populate user on comment for response
    const populated = await commentModel.findById(created._id).populate({ path: 'userId', select: 'username avatar' }).lean();

    return res.status(201).json({
      success: true,
      comment: {
        id: populated._id,
        text: populated.text,
        createdAt: populated.createdAt,
        user: populated.userId ? { id: populated.userId._id, username: populated.userId.username, avatar: populated.userId.avatar || '' } : null
      }
    });
  } catch (error) {
    console.error('createComment error:', error);
    return res.status(500).json({ success: false, message: 'Failed to create comment', error: error.message });
  }
}


// Add this to backend/controllers/postControllers.js

// UPDATE current user's profile (username, bio) - protected
async function updateProfile(req, res) {
  try {
    const userId = req.user && req.user.id;
    if (!userId) return res.status(401).json({ success: false, message: 'Unauthorized' });

    const { username, bio } = req.body;
    if (!username || !String(username).trim()) {
      return res.status(400).json({ success: false, message: 'Username is required' });
    }

    const usernameLower = String(username).toLowerCase().trim();

    // Ensure username uniqueness (exclude current user)
    const existing = await userModel.findOne({ username: usernameLower, _id: { $ne: userId } });
    if (existing) {
      return res.status(400).json({ success: false, message: 'Username is already taken' });
    }

    const updated = await userModel.findByIdAndUpdate(
      userId,
      { username: usernameLower, bio: bio || '' },
      { new: true }
    ).select('-password').lean();

    if (!updated) return res.status(404).json({ success: false, message: 'User not found' });

    const userPublic = {
      id: updated._id,
      username: updated.username,
      email: updated.email,
      avatar: updated.avatar || '',
      bio: updated.bio || '',
      createdAt: updated.createdAt
    };

    return res.status(200).json({ success: true, message: 'Profile updated', user: userPublic });
  } catch (error) {
    console.error('updateProfile error:', error);
    return res.status(500).json({ success: false, message: 'Failed to update profile', error: error.message });
  }
}

// POST follow a user (protected)
async function followUser(req, res) {
  try {
    const actorId = req.user && req.user.id;
    if (!actorId) return res.status(401).json({ success: false, message: 'Unauthorized' });

    const targetUsername = (req.params.username || '').toLowerCase().trim();
    if (!targetUsername) return res.status(400).json({ success: false, message: 'Target username required' });

    const target = await userModel.findOne({ username: targetUsername });
    if (!target) return res.status(404).json({ success: false, message: 'Target user not found' });

    // don't follow yourself
    if (String(target._id) === String(actorId)) {
      return res.status(400).json({ success: false, message: 'Cannot follow yourself' });
    }

    const actor = await userModel.findById(actorId);
    if (!actor) return res.status(404).json({ success: false, message: 'Actor user not found' });

    // ensure arrays exist
    actor.following = actor.following || [];
    target.followers = target.followers || [];

    // check already following
    const alreadyFollowing = actor.following.some(f => String(f) === String(target._id) || (f && String(f._id) === String(target._id)));
    if (alreadyFollowing) {
      return res.status(200).json({ success: true, message: 'Already following' });
    }

    actor.following.push(target._id);
    target.followers.push(actor._id);

    await actor.save();
    await target.save();

    return res.status(200).json({ success: true, message: 'Now following', followerCount: target.followers.length });
  } catch (error) {
    console.error('followUser error:', error);
    return res.status(500).json({ success: false, message: 'Failed to follow user', error: error.message });
  }
}

// POST unfollow a user (protected)
async function unfollowUser(req, res) {
  try {
    const actorId = req.user && req.user.id;
    if (!actorId) return res.status(401).json({ success: false, message: 'Unauthorized' });

    const targetUsername = (req.params.username || '').toLowerCase().trim();
    if (!targetUsername) return res.status(400).json({ success: false, message: 'Target username required' });

    const target = await userModel.findOne({ username: targetUsername });
    if (!target) return res.status(404).json({ success: false, message: 'Target user not found' });

    if (String(target._id) === String(actorId)) {
      return res.status(400).json({ success: false, message: 'Cannot unfollow yourself' });
    }

    const actor = await userModel.findById(actorId);
    if (!actor) return res.status(404).json({ success: false, message: 'Actor user not found' });

    actor.following = (actor.following || []).filter(f => !(String(f) === String(target._id) || (f && String(f._id) === String(target._id))));
    target.followers = (target.followers || []).filter(f => !(String(f) === String(actor._id) || (f && String(f._id) === String(actor._id))));

    await actor.save();
    await target.save();

    return res.status(200).json({ success: true, message: 'Unfollowed', followerCount: target.followers.length });
  } catch (error) {
    console.error('unfollowUser error:', error);
    return res.status(500).json({ success: false, message: 'Failed to unfollow user', error: error.message });
  }
}

module.exports = {
  sendOtp,
  verifyOtpAndSignup,
  login,
  createPost,
  likePost,
  createComment,
  updateProfile,      // if present
  followUser,
  unfollowUser
};