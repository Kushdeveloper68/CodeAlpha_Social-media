const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  content: {
    type: String,
    maxLength: 2000,
    default: ""
  },

  media: {
    type: String,
    default: ""  // image or video URL
  },

  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],

  likeCount: {
    type: Number,
    default: 0
  },

  commentsCount: {
    type: Number,
    default: 0
  },

  privacy: {
    type: String,
    enum: ["public", "private", "followers"],
    default: "public"
  }

}, { timestamps: true });
const postModel =mongoose.model("Post", postSchema);
module.exports = postModel;