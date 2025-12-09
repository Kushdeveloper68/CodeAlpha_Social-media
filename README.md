# 🌐 CodeAlpha Social Media Platform

A modern, feature-rich social media application built with **React**, **Node.js**, and **MongoDB**. Connect, share, and engage with a vibrant community in real-time.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Environment Configuration](#environment-configuration)
- [Running the Project](#running-the-project)
- [Architecture](#architecture)
- [API Documentation](#api-documentation)
- [Database Models](#database-models)
- [Routing](#routing)
- [Middleware](#middleware)
- [UI/UX Features](#uiux-features)
- [Screenshots](#screenshots)
- [Usage Guide](#usage-guide)
- [Production Deployment](#production-deployment)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**CodeAlpha Social Media** is a full-stack web application that enables users to create accounts, share posts with images, follow/unfollow users, like and comment on posts, manage profiles, and explore a dynamic feed. The platform emphasizes user engagement, security, and scalability.

### Key Highlights
- ✅ JWT-based authentication with OTP email verification
- ✅ Real-time post feed with like & comment functionality
- ✅ User follow/unfollow system
- ✅ Profile management and customization
- ✅ Image uploads with multer
- ✅ Responsive design (mobile-first)
- ✅ Error handling & validation
- ✅ Clean, maintainable codebase

---

## ✨ Features

### Authentication & Security
- **Email OTP Verification**: Secure signup using one-time passwords sent via email
- **JWT Tokens**: Stateless authentication with 7-day expiry
- **Password Hashing**: bcryptjs for secure password storage
- **Protected Routes**: Middleware-based access control
- **Session Management**: Token stored in localStorage with context API

### User Management
- **User Registration**: Unique username and email validation
- **Profile Management**: Edit username, bio, avatar (prepared for future updates)
- **User Discovery**: Browse all users with follower/following lists
- **Settings Page**: Secure account settings with logout functionality

### Social Features
- **Follow/Unfollow**: Toggle following status with real-time updates
- **Posts**: Create posts with text content and image uploads
- **Likes**: Like/unlike posts with optimistic UI updates
- **Comments**: Add, view, and manage comments on posts
- **User Feed**: Chronological feed showing all public posts
- **Profile Viewing**: Public profiles with user's posts and follower counts
- **Network**: Dedicated page to view followers and following lists

### UI/UX
- **Responsive Design**: Mobile-first, supports all screen sizes
- **Smooth Animations**: Transitions and hover effects
- **Loading States**: Skeleton loaders and spinners
- **Error Handling**: User-friendly error messages
- **Dark Mode Ready**: Extensible styling architecture
- **Accessibility**: Semantic HTML and keyboard navigation

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React 18** | UI library with hooks |
| **Vite** | Fast build tool & dev server |
| **React Router v6** | Client-side routing |
| **Axios** | HTTP client for API calls |
| **Tailwind CSS** | Utility-first CSS framework |
| **Context API** | State management (auth) |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | ODM for MongoDB |
| **JWT (jsonwebtoken)** | Token-based auth |
| **bcryptjs** | Password hashing |
| **Nodemailer** | Email service (OTP sending) |
| **Multer** | File upload handling |
| **CORS** | Cross-origin requests |

### DevTools
- **Nodemon**: Auto-restart on file changes
- **ESLint**: Code linting
- **.env**: Environment variables

---

## 📁 Project Structure
CodeAlpha_Social-media/
├── backend/
│ ├── controllers/
│ │ ├── getcontrollers.js # GET endpoints (profiles, posts, followers)
│ │ └── postControllers.js # POST/PUT endpoints (auth, posts, likes, comments)
│ ├── routes/
│ │ ├── getRouter.js # GET route definitions
│ │ └── postRouter.js # POST/PUT route definitions
│ ├── models/
│ │ ├── usermodel.js # User schema (username, email, followers, etc.)
│ │ ├── postmodel.js # Post schema (content, media, likes, comments)
│ │ ├── commentsmodel.js # Comment schema (text, user, post)
│ │ ├── otpModel.js # OTP schema (email, hash, expiry)
│ │ └── index.js # Model exports
│ ├── middlewares/
│ │ └── jwtMilddleware.js # JWT verification & token extraction
│ ├── uploads/
│ │ └── posts/ # User-uploaded post images
│ ├── connection/
│ │ └── connection.js # MongoDB connection logic
│ ├── index.js # Express app setup & server start
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ │ ├── LandingPage.jsx # Home/landing page (public)
│ │ │ ├── LoginPage.jsx # Login form
│ │ │ ├── SignupPage.jsx # Signup with OTP
│ │ │ ├── HomePage.jsx # Feed with posts, likes, comments
│ │ │ ├── ProfilePage.jsx # User profile with posts & follow button
│ │ │ ├── CreatePostPage.jsx # Post creation with image upload
│ │ │ ├── SettingsPage.jsx # Account settings & profile edit
│ │ │ ├── FollowersFollowing.jsx # Followers/following list
│ │ │ └── NotFoundPage.jsx # 404 error page
│ │ ├── components/
│ │ │ └── Navbar.jsx # Dynamic navbar (auth-aware)
│ │ ├── context/
│ │ │ └── authContext.jsx # Auth state management
│ │ ├── api/
│ │ │ └── index.js # Axios instance & API helpers
│ │ ├── App.jsx # Main app component
│ │ ├── Layout.jsx # Layout wrapper with Navbar
│ │ ├── App.css # Global styles
│ │ └── main.jsx # React entry point
│ ├── public/ # Static assets
│ ├── vite.config.js # Vite configuration
│ └── package.json
│
├── .env # Environment variables
├── .gitignore # Git ignore rules
├── README.md # Project documentation
└── package.json # Root package (if monorepo)


---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) — [Download](https://nodejs.org/)
- **npm** (v8 or higher) — comes with Node.js
- **MongoDB** (v4.4 or higher) — [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** — [Download](https://git-scm.com/)
- **Gmail Account** — for OTP email sending (with [App Password](https://myaccount.google.com/apppasswords) enabled)

### System Requirements
- **OS**: Windows, macOS, or Linux
- **RAM**: 4GB minimum
- **Disk Space**: 2GB minimum
- **Internet**: Required for external APIs (email service)

---

## ⚙️ Installation & Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/Kushdeveloper68/CodeAlpha_Social-media.git
cd CodeAlpha_Social-media
```
### Step 2: Install Backend Dependencies
```bash
cd backend
npm install
```

Key packages installed:

express — Web framework

mongoose — MongoDB ODM

jsonwebtoken — JWT auth

bcryptjs — Password hashing

nodemailer — Email service

multer — File uploads

cors — CORS handling

dotenv — Environment variables

### Step 3: Install Frontend Dependencies
```bash
cd ../frontend
npm install
```
Key packages installed:

react & react-dom — UI library

react-router-dom — Routing

axios — HTTP client

tailwindcss — Styling

### Step 4: Verify Installation

```bash
# Backend
cd backend
npm list

# Frontend
cd ../frontend
npm list
```
## 🔐 Environment Configuration
Backend .env File
Create a .env file in the backend/ directory with the following variables:
```bash
# Database
MONGOURL=mongodb://localhost:27017/socialmedia
# or use MongoDB Atlas
# MONGOURL=mongodb+srv://username:password@cluster.mongodb.net/socialmedia

# Server
PORT=5000

# JWT
JWTKEY=your_secure_jwt_secret_key_here

# Email (Gmail with App Password)
EMAIL=your_email@gmail.com
PASS=your_gmail_app_password
EMAIL_USER=your_email@gmail.com

# Optional: API Keys for future services
# CLOUDINARY_API_KEY=xxx
# STRIPE_SECRET_KEY=xxx
```
## ⚠️ Never commit .env to version control!

Add .env to .gitignore   
Use strong, unique secrets for JWTKEY  
Use Gmail App Passwords (not your main password)
Rotate secrets regularly in production

## 🚀 Running the Project
Option 1: Run Locally (Development)

### Terminal 1 — Start MongoDB

```bash
# If MongoDB is installed locally
mongod

# Or use MongoDB Atlas (cloud) — update MONGOURL in .env
```
### Terminal 2 — Start Backend Server
```bash
 npm start
 ```
 ### Expected output:
 ```
 Server started at http://localhost:5000
Connected to MongoDB successfully
```
### Terminal 3 — Start Frontend Dev Server
```bash
cd frontend
npm install  # if not already done
npm run dev
```
### Expected output:
```
VITE v4.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Press h to show help
```
### Accessing the Application
Frontend: http://localhost:5173
Backend API: http://localhost:5000
MongoDB: localhost:27017 (if local)

## 🏗 Architecture
Frontend Architecture
┌─────────────────────────────────────┐
│         React Application           │
├─────────────────────────────────────┤
│  App.jsx (Router Setup)             │
│  └─ AuthProvider (Context)          │
│     └─ BrowserRouter                │
│        └─ Layout (Navbar)           │
│           └─ Routes (Pages)         │
├─────────────────────────────────────┤
│  Pages (UI Components)              │
│  ├─ LandingPage (Public)            │
│  ├─ LoginPage (Auth)                │
│  ├─ HomePage (Feed)                 │
│  ├─ ProfilePage (User Profile)      │
│  └─ SettingsPage (Protected)        │
├─────────────────────────────────────┤
│  Services                           │
│  ├─ API Module (axios instance)     │
│  ├─ AuthContext (state management)  │
│  └─ Components (Navbar, etc.)       │
├─────────────────────────────────────┤
│  Backend API (HTTP/REST)            │
└─────────────────────────────────────┘
Backend Architecture
┌────────────────────────────────────┐
│      Express Server (Node.js)      │
├────────────────────────────────────┤
│  Middleware Layer                  │
│  ├─ CORS                           │
│  ├─ Body Parser                    │
│  ├─ JWT Middleware (protected)     │
│  └─ Multer (file uploads)          │
├────────────────────────────────────┤
│  Routes (REST Endpoints)           │
│  ├─ GET /api/get/...               │
│  ├─ POST /api/...                  │
│  └─ PUT /api/...                   │
├────────────────────────────────────┤
│  Controllers (Business Logic)      │
│  ├─ getControllers.js              │
│  └─ postControllers.js             │
├────────────────────────────────────┤
│  Models (Data Schema)              │
│  ├─ User, Post, Comment, OTP       │
│  └─ Mongoose Schemas               │
├────────────────────────────────────┤
│  Database (MongoDB)                │
│  └─ Collections & Documents        │
└────────────────────────────────────┘

## 📡 API Documentation
BAse URL
```
http://localhost:5000/api
```

Authentication Endpoints
#### 1. Send OTP
```
POST /send-otp
Content-Type: application/json

{
  "email": "user@example.com"
}

Response:
{
  "success": true,
  "message": "OTP sent to email"
}
```
#### 2. Verify OTP & Sign Up

```
POST /verify-signup
Content-Type: application/json

{
  "username": "johndoe",
  "email": "user@example.com",
  "password": "securepass123",
  "otp": "123456"
}

Response:
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "username": "johndoe",
    "email": "user@example.com"
  }
}
```
####  3. Login
```
POST /login
Content-Type: application/json

{
  "identifier": "johndoe",  // username or email
  "password": "securepass123"
}

Response:
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "username": "johndoe",
    "email": "user@example.com"
  }
}
```
User Endpoints
#### 4. Get Current User (Protected)
```
GET /get/me
Authorization: Bearer {token}

Response:
{
  "success": true,
  "user": {
    "id": "user_id",
    "username": "johndoe",
    "email": "user@example.com",
    "bio": "Software developer",
    "avatar": "url_to_avatar"
  }
}
```
#### 5. Get User Profile by Username
```
GET /get/profile/:username
Authorization: Bearer {token} (optional)

Response:
{
  "success": true,
  "user": { ... },
  "posts": [ ... ],
  "followersCount": 150,
  "followingCount": 80,
  "viewerIsFollowing": false,
  "isOwnProfile": false
}
```
#### 6. Update Profile (Protected)
```
PUT /user/update
Authorization: Bearer {token}
Content-Type: application/json

{
  "username": "johndoe",
  "bio": "New bio here"
}

Response:
{
  "success": true,
  "message": "Profile updated",
  "user": { ... }
}
```
#### 7. Get Followers
```
GET /get/profile/:username/followers

Response:
{
  "success": true,
  "followers": [
    {
      "id": "follower_id",
      "username": "follower1",
      "avatar": "url"
    }
  ]
}
```
#### 8. Get Following
```
GET /get/profile/:username/following

Response:
{
  "success": true,
  "following": [ ... ]
}
```
#### 9. Follow User (Protected)
```
POST /user/:username/follow
Authorization: Bearer {token}

Response:
{
  "success": true,
  "message": "Now following",
  "followerCount": 151
}
```
#### 10. Unfollow User (Protected)
```
POST /user/:username/unfollow
Authorization: Bearer {token}

Response:
{
  "success": true,
  "message": "Unfollowed",
  "followerCount": 150
}
```
Post Endpoints
#### 11. Create Post (Protected)
```
POST /create-post
Authorization: Bearer {token}
Content-Type: multipart/form-data

Form Data:
- content: "Post text here"
- image: [file] (optional)

Response:
{
  "success": true,
  "message": "Post created",
  "post": { ... }
}
```
#### 12. Get All Posts
```
GET /get/posts
Authorization: Bearer {token} (optional)

Response:
{
  "success": true,
  "posts": [
    {
      "_id": "post_id",
      "user": { "username": "johndoe", "avatar": "url" },
      "content": "Post text",
      "media": "url",
      "likeCount": 10,
      "commentsCount": 3,
      "viewerHasLiked": false
    }
  ]
}
```
#### 13. Like Post (Protected)
```
POST /posts/:id/like
Authorization: Bearer {token}

Response:
{
  "success": true,
  "likeCount": 11,
  "liked": true
}
```
Comment Endpoints
#### 14. Create Comment (Protected)
```
POST /posts/:id/comment
Authorization: Bearer {token}
Content-Type: application/json

{
  "text": "Great post!"
}

Response:
{
  "success": true,
  "comment": {
    "id": "comment_id",
    "text": "Great post!",
    "user": { "username": "user1", "avatar": "url" },
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```
#### 15. Get Comments for Post
```
GET /get/posts/:postId/comments

Response:
{
  "success": true,
  "comments": [ ... ]
}
```
## 📊 Database Models
User Model
```bash
{
  _id: ObjectId,
  username: String (unique, lowercase),
  email: String (unique, lowercase),
  password: String (hashed),
  avatar: String (image URL),
  bio: String,
  links: {
    website: String
  },
  followers: [ObjectId],        // References to User
  following: [ObjectId],        // References to User
  isVerified: Boolean,
  role: String (default: "user"),
  status: String (default: "active"),
  createdAt: Date,
  updatedAt: Date
}
```
Post Model
```bash
{
  _id: ObjectId,
  userId: ObjectId,             // Reference to User
  content: String,
  media: String (image URL),
  likes: [ObjectId],            // User IDs who liked
  likeCount: Number,
  commentsCount: Number,
  privacy: String (enum: ["public", "private", "followers"]),
  createdAt: Date,
  updatedAt: Date
}
```
Comment Model
```bash
{
  _id: ObjectId,
  postId: ObjectId,             // Reference to Post
  userId: ObjectId,             // Reference to User
  text: String,
  likes: [ObjectId],
  replyTo: ObjectId (optional), // For nested replies
  createdAt: Date,
  updatedAt: Date
}
```
OTP Model
```bash
{
  _id: ObjectId,
  email: String (unique),
  otpHash: String (hashed),
  expiresAt: Date,
  createdAt: Date
}
```
## 🔄 Routing
#### Frontend Routes (React Router v6)

Path	Component	Auth Required	Description
/	LandingPage	❌	Landing/home page
/login	LoginPage	❌	User login
/signup	SignupPage	❌	User registration with OTP
/home	HomePage	✅	Main feed with posts
/profile/:username	ProfilePage	❌	View user profile
/create-post	CreatePostPage	✅	Create new post
/settings	SettingsPage	✅	Account settings
/followers-following/:username	FollowersFollowing	❌	View followers/following
*	NotFoundPage	❌	404 error page

#### Backend Routes (Express)
#### Prefix: /api
Method	Path	Auth	Purpose
POST	/send-otp	❌	Send OTP to email
POST	/verify-signup	❌	Verify OTP & create account
POST	/login	❌	Login user
GET	/get/me	✅	Get current user
GET	/get/profile/:username	❌	Get user profile
GET	/get/profile/:username/followers	❌	Get followers list
GET	/get/profile/:username/following	❌	Get following list
GET	/get/posts	❌	Get all posts (feed)
GET	/get/posts/:postId/comments	❌	Get comments for post
POST	/create-post	✅	Create post with image
POST	/posts/:id/like	✅	Like/unlike post
POST	/posts/:id/comment	✅	Add comment to post
PUT	/user/update	✅	Update user profile
POST	/user/:username/follow	✅	Follow user
POST	/user/:username/unfollow	✅	Unfollow user


## 🔐 Middleware
JWT Middleware (jwtMilddleware.js)
Purpose: Protect routes that require authentication

Behavior:

Extracts token from Authorization: Bearer {token} header

Falls back to token from cookies if header is missing

Verifies token using JWT_SECRET

Attaches decoded user data to req.user

Returns 401 if token is invalid or missing
```bash
router.post('/protected-route', jwtMiddleware, controllerFunction);
```

#### CORS Middleware
Purpose: Allow cross-origin requests from frontend

Configuration:
```bash
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
```
#### Body Parser Middleware
Purpose: Parse JSON request bodies
```bash
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```
#### Multer Middleware
Purpose: Handle file uploads (images)

Configuration:

Destination: backend/uploads/posts/
File Types: Image files only
Size Limit: 5MB
Field Name: image
Usage:

```bash
postRouter.post('/create-post', jwtMiddleware, upload.single('image'), createPost);
```
## 🎨 UI/UX Features
Design Principles
#### Responsive Design

Mobile-first approach
Breakpoints: sm (640px), md (768px), lg (1024px)
Flexible layouts using CSS Grid & Flexbox
#### User-Centered

Clear call-to-action buttons
Consistent color scheme (Blue #0066ff, Gray #64748B)
Intuitive navigation
#### Accessibility

Semantic HTML (<header>, <main>, <nav>)
ARIA labels for interactive elements
Keyboard navigation support
Color contrast compliance
#### Performance

Lazy loading of images
Optimistic UI updates
Skeleton loaders during data fetching
Efficient re-renders with React hooks

## 📸 Screenshots
UI Preview Grid
| Page | Desktop |
|------|---------|
| **Landing Page** | ![Landing Desktop](./images/landing-desktop.png) | 
| **Login Page** | ![Login Desktop](./images/login-desktop.png) | 
| **Signup Page** | ![Signup Desktop](./images/signup-desktop.png) | 
| **Home Feed** | ![Home Desktop](./images/home-desktop.png) | 
| **Profile Page** | ![Profile Desktop](./images/profile-desktop.png) | 
| **Settings Page** | ![Settings Desktop](./images/settings-desktop.png) | 
| **Create Post** | ![CreatePost Desktop](./images/createpost-desktop.png) | 
| **Followers List** | ![Followers Desktop](./images/followers-desktop.png) |

Note: To add screenshots:

Create an images/ folder in the project root
Take screenshots of each page (desktop & mobile)
Save them with descriptive names
Update the paths above

## 📖 Usage Guide

Getting Started (User Perspective)
####  1. Sign Up
Click Sign Up on the landing page
Enter your email
Click "Send OTP"
Check your email for the 6-digit code
Enter the code, choose a username and password
Click Verify & Sign Up
Redirected to home feed
#### 2. Update Profile
Click your avatar in the navbar
Click Settings icon
Edit your username and bio
Click Save Changes
Profile updated successfully
#### 3. Create a Post
Click Create Post in navbar
Write your post content
(Optional) Upload an image
Click Post
Post appears on your profile & feed
#### 4. Engage with Content
Like: Click the heart icon on any post
Comment: Click the comment icon to open comment section
Follow: Click Follow on any user's profile
View Profile: Click on any username or avatar
#### 5. Explore Users
Search username in navbar search
Or visit /followers-following/username to see network

## 🚀 Production Deployment
Pre-Deployment Checklist
 Environment variables configured (.env not in repo)

 Database migrated to MongoDB Atlas or managed service

 Frontend built (npm run build)

 HTTPS enabled
 CORS origins updated to production domain

 Email service configured (Gmail app password)
 
 Error logging integrated (Sentry, LogRocket)

 Performance optimized (image compression, lazy loading)

 Security hardened (helmet, rate limiting, input validation)

Deployment Options
1. Heroku (Simplest)


## 🔮 Future Enhancements
#### Short-term (v1.1)
 Search & filter posts
 User notifications (likes, follows, comments)
 Direct messaging (DM)
 Post drafts & scheduling
 User blocking
 Report inappropriate content
#### Medium-term (v1.5)
 Stories (24-hour posts)
 Video uploads
 Hashtag system
 Trending topics
 User recommendations
 Dark mode toggle
 Pagination for feeds
 Infinite scroll
#### Long-term (v2.0)
 Real-time notifications (WebSockets)
 Live video streaming
 Monetization (ads, tipping)
 AI-powered content recommendation
 Mobile app (React Native)
 Multi-language support
 Video editing tools
 Admin dashboard
#### Technology Upgrades
 TypeScript for type safety
 GraphQL for better data querying
 Redis for caching
 Elasticsearch for search
 Kafka for event streaming
 Machine learning for content moderation

 ## 🤝 Contributing
 We welcome contributions! Follow these steps:
 #### 1. Fork & Clone
 ```
 git clone https://github.com/YOUR_USERNAME/CodeAlpha_Social-media.git
cd CodeAlpha_Social-media
```
#### 2. Create Feature Branch
```
git checkout -b feature/your-feature-name
```
#### 3. Make Changes
Follow the existing code style
Add comments for complex logic
Test thoroughly

#### 4. Commit & Push
```
git add .
git commit -m "feat: add your feature description"
git push origin feature/your-feature-name
```
#### 5. Open Pull Request
Describe changes clearly
Reference any related issues
Wait for review & approval
Code Style Guidelines
Use camelCase for variables
Use PascalCase for components
Add JSDoc comments for functions
Keep functions small & focused
Handle errors gracefully
Bug Reporting
Found a bug? Open an issue with:

Description of the bug
Steps to reproduce
Expected vs. actual behavior
Screenshots/logs if applicable
Your environment (OS, Node version, etc.)
##📝 License
This project is licensed under the MIT License — see the LICENSE file for details.

Permissions: Commercial use, Modification, Distribution, Private use
Conditions: License & Copyright notice
Limitations: No liability, No warranty

## 📞 Support & Contact
GitHub Issues: Report bugs
Email: kushprajapati68775@gmail.com
Twitter: @KushDeveloper68

## 🙏 Acknowledgments
React & Vite teams for amazing tools
Express.js community for the framework
MongoDB for the database
Contributors who made this possible
You for using this project!
## 📈 Project Statistics
Lines of Code: ~5,000+
API Endpoints: 15+
Database Collections: 4
Frontend Pages: 8
Reusable Components: 5+
Middleware Layers: 4
Development Time: [Your timeline]
Last Updated: DEC 2025
Version: 1.0.0
Status: Active Development
### Made with ❤️ by Kush Prajapati

⭐ Star this repo if you find it helpful!
