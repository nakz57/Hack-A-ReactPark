import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Nav from './components/Nav'
import About from './pages/About'
import AddGame from './pages/AddGame'
import GameDetails from './pages/GameDetails'
import UpdateGame from './pages/UpdateGame'
import Register from './pages/Register'
import SignIn from './components/SingnIn'
import { useEffect, useRef, useState } from 'react'
import { CheckSession } from './services/Auth'
const App = () => {
  const [user, setUser] = useState({})
  const checkToken = async () => {
    //If a token exists, sends token to localStorage to persist logged in user
    const user = await CheckSession()
    setUser(user)
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }
  return (
    <div>
      <Nav user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/game" element={<Home />} />
          <Route path="/game/:id" element={<GameDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/addgames" element={<AddGame />} />
          <Route path="/game/update/:id" element={<UpdateGame />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
