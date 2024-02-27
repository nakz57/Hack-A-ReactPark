import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Nav from './components/Nav'
import About from './pages/About'
import AddGame from './pages/AddGame'
import GameDetails from './pages/GameDetails'
import Register from './pages/Register'
import SignIn from './components/SingnIn'
import { useEffect, useRef, useState } from 'react'

const App = () => {
  const [user, setUser] = useState(null)
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/game" element={<Home />} />
          <Route path="/game/:id" element={<GameDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/addgames" element={<AddGame />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
