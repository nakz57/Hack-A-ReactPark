import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import AllGames from './pages/AllGames'
import About from './pages/About'
import AddGame from './pages/AddGame'

const App = () => (
  <div>
    <Nav />
    <main>
      <Routes>
        <Route path="/" element={<AllGames />} />
        <Route path="/about" element={<About />} />
        <Route path="/addgames" element={<AddGame />} />
      </Routes>
    </main>
  </div>
)

export default App
