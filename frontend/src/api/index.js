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
