import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { AuthProvider } from './context/authContext';
import Layout from './Layout';
import {
  LandingPage,
  LoginPage,
  SignupPage,
  HomePage,
  ExplorePage,
  ProfilePage,
  PostDetailPage,
  CreatePostPage,
  NotificationsPage, FollowersFollowingPage,
  SettingsPage,
  NotFoundPage
} from "./pages/"

function App() {
  const [count, setCount] = useState(0)
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:username" element={<ProfilePage />} />
            <Route path="/create-post" element={<CreatePostPage />} />
            <Route path="/followers-following/:username" element={<FollowersFollowingPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App