import axios from 'axios';
import { useAuth } from '../context/authContext'; // Import hook

const API = axios.create({
  baseURL: 'http://localhost:5000/',
  withCredentials: true,
});

// Add request interceptor to attach token to every request
export function useApi() {
  const { authToken } = useAuth();

  API.interceptors.request.use((config) => {
    if (authToken) {
      config.headers['Authorization'] = `Bearer ${authToken}`;
    }
    return config;
  });

  return API;
}


// SEND OTP
export const sendOtpApi = async (email) => {
  try {
    const response = await API.post('/api/send-otp', { email });
    return response.data;
  } catch (error) {
    console.error('sendOtpApi error:', error.response?.data || error.message);
    return error.response?.data || { success: false, message: 'Failed to send OTP' };
  }
};

// VERIFY OTP and SIGNUP
export const verifySignupApi = async ({ username, email, password, otp }) => {
  try {
    const response = await API.post('/api/verify-signup', { username, email, password, otp });
    return response.data;
  } catch (error) {
    console.error('verifySignupApi error:', error.response?.data || error.message);
    return error.response?.data || { success: false, message: 'Signup failed' };
  }
};


// LOGIN
export const loginApi = async (identifier, password) => {
  try {
    const response = await API.post('/api/login', { identifier, password });
    return response.data;
  } catch (error) {
    console.error('loginApi error:', error.response?.data || error.message);
    return error.response?.data || { success: false, message: 'Login failed' };
  }
};

// GET profile by username (optional auth)
export const getProfileApi = async (username) => {
  try {
    const token = localStorage.getItem('token');
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await API.get(`/api/get/profile/${encodeURIComponent(username)}`, { headers });
    return response.data;
  } catch (error) {
    console.error('getProfileApi error:', error.response?.data || error.message);
    return error.response?.data || { success: false, message: 'Failed to fetch profile' };
  }
};

// CREATE POST (multipart/form-data)
export const createPostApi = async (formData) => {
  try {
    // const token = localStorage.getItem('token');
    // const headers = token ? { Authorization: `Bearer ${token}` } : {};
    // axios will set multipart/form-data headers automatically
    const response = await API.post('/api/create-post', formData);
    return response.data;
  } catch (error) {
    console.error('createPostApi error:', error.response?.data || error.message);
    return error.response?.data || { success: false, message: 'Failed to create post' };
  }
};

// GET all posts
export const getAllPostsApi = async () => {
  try {
    const token = localStorage.getItem('token');
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await API.get('/api/get/posts', { headers });
    return response.data;
  } catch (error) {
    console.error('getAllPostsApi error:', error.response?.data || error.message);
    return error.response?.data || { success: false, message: 'Failed to fetch posts' };
  }
};

// LIKE POST (toggle)
export const likePostApi = async (postId) => {
  try {
    const token = localStorage.getItem('token');
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await API.post(`/api/posts/${encodeURIComponent(postId)}/like`, {}, { headers });
    return response.data;
  } catch (error) {
    console.error('likePostApi error:', error.response?.data || error.message);
    return error.response?.data || { success: false, message: 'Failed to like post' };
  }
};

// CREATE COMMENT
export const createCommentApi = async (postId, text) => {
  try {
    const token = localStorage.getItem('token');
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await API.post(`/api/posts/${encodeURIComponent(postId)}/comment`, { text }, { headers });
    return response.data;
  } catch (error) {
    console.error('createCommentApi error:', error.response?.data || error.message);
    return error.response?.data || { success: false, message: 'Failed to create comment' };
  }
};

// GET COMMENTS
export const getCommentsApi = async (postId) => {
  try {
    const response = await API.get(`/api/get/posts/${encodeURIComponent(postId)}/comments`);
    return response.data;
  } catch (error) {
    console.error('getCommentsApi error:', error.response?.data || error.message);
    return error.response?.data || { success: false, message: 'Failed to fetch comments' };
  }
};

// GET current logged-in user (protected)
export const getCurrentUserApi = async () => {
  try {
    const token = localStorage.getItem('token');
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await API.get('/api/get/me', { headers });
    return response.data;
  } catch (error) {
    console.error('getCurrentUserApi error:', error.response?.data || error.message);
    return error.response?.data || { success: false, message: 'Failed to fetch current user' };
  }
};

// UPDATE profile (username, bio)
export const updateProfileApi = async ({ username, bio }) => {
  try {
    const token = localStorage.getItem('token');
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await API.put('/api/user/update', { username, bio }, { headers });
    return response.data;
  } catch (error) {
    console.error('updateProfileApi error:', error.response?.data || error.message);
    return error.response?.data || { success: false, message: 'Failed to update profile' };
  }
};
export default API;