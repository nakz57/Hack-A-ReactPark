import { GetGames } from '../services/game'
import { useEffect, useState } from 'react'

const Test = () => {
  const [games, setGames] = useState([])

  useEffect(() => {
    const handelgames = async () => {
      const data = await GetGames()

      setGames(data)
    }
    handelgames()
  }, [])

  return (
    <div>
      {games.map((game) => (
        <div key={game._id}>
          <h3>{game.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default Test
