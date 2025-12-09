const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
    index: true
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  text: {
    type: String,
    maxLength: 500,
    required: true
  },

  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],

  replyTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
    default: null
  }

}, { timestamps: true });
const commentModel = mongoose.model("Comment", commentSchema);
module.exports = commentModel
