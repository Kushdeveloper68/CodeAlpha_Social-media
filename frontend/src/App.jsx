import { useState } from 'react'
import './App.css'
import {
  LandingPage, LoginPage, SignupPage, HomePage, ExplorePage, ProfilePage,
  PostDetailPage,
  CreatePostPage,
  NotificationsPage, FollowersFollowingPage,
  SettingsPage,
  NotFoundPage
} from "./pages/"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NotFoundPage />
    </>
  )
}

export default App
