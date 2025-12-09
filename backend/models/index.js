// backend/models/index.js
const postModel = require('./postmodel');
const commentModel = require('./commentsmodel');
const OtpModel = require('./otpModel');
const userModel = require('./usermodel');

module.exports = {
  userModel,
  postModel,
  commentModel,
  OtpModel
};