import './App.css'
import Home from './pages/Home'
import GameDetails from './pages/GameDetails'
import { Routes, Route } from 'react-router-dom'
const App = () => (
  <div>
    <Routes>
      <Route path="/game" element={<Home />} />
      <Route path="/game/:id" element={<GameDetails />} />
    </Routes>
  </div>
)

export default App
