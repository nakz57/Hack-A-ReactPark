import { useEffect, useRef, useState } from 'react'
import GameCard from '../components/GameCard'
import Search from '../components/Search'
import Client from '../services/api'
import NewGameCard from '../components/NewGameCard'
const Home = () => {
  const searchRef = useRef(null)
  const [games, setGames] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [pressed, setPresssed] = useState(false)
  useEffect(() => {
    Client.get('/game')
      .then((response) => {
        setGames(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchTerm = searchRef.current.value.toLowerCase()
    const filteredGames = games.filter((game) =>
      game.name.toLowerCase().includes(searchTerm)
    )
    setSearchResults(filteredGames)
    setPresssed(true)
  }
  return (
    <div className="home-back">
      <Search onSubmit={handleSubmit} searchRef={searchRef} />
      <h1>Hack-A-Park</h1>
      <div className="container">
        {pressed ? (
          searchResults.length > 0 ? (
            searchResults.map((game) => <GameCard key={game._id} game={game} />)
          ) : (
            <h2>No Games Found</h2>
          )
        ) : (
          games.map((game) => (
            <>
              <GameCard key={game._id} game={game} />
            </>
          ))
        )}
        <NewGameCard />
      </div>
    </div>
  )
}
export default Home
