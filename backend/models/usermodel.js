const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true
    },

    avatar: {
      type: String,
      default: ''
    },

    bio: {
      type: String,
      maxLength: 200,
      default: ''
    },

    links: {
      website: String,
      instagram: String,
      twitter: String
    },

    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],

    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],

    isVerified: {
      type: Boolean,
      default: false
    },

    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },

    status: {
      type: String,
      enum: ['active', 'banned', 'deleted'],
      default: 'active'
    }
  },
  { timestamps: true }
)
const userModel = mongoose.model('User', userSchema);
module.exports = userModel;