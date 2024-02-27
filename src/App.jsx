import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Nav from './components/Nav'
import About from './pages/About'
import AddGame from './pages/AddGame'
import GameDetails from './pages/GameDetails'
const App = () => (
  <div>
    <Nav />
    <main>
      <Routes>
        <Route path="/game" element={<Home />} />
        <Route path="/game/:id" element={<GameDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/addgames" element={<AddGame />} />
      </Routes>
    </main>
  </div>
)

export default App
