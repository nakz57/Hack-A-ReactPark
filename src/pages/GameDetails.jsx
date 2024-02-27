import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'
import AllRating from '../components/AllRating'
import AddRating from '../components/AddRating'
const GameDetails = () => {
  const [gameDetails, setGameDetails] = useState({})
  const [games, setGames] = useState([])
  // const [render, setRende] = useState({})
  let { id } = useParams()
  const zahraa = (a) => {
    setGameDetails(a)
  }
  useEffect(() => {
    Client.get('/game')
      .then((response) => {
        // console.log(response)
        setGames(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [gameDetails])

  useEffect(() => {
    getDetails()
  })
  const getDetails = () => {
    const filteredGames = games.find((game) => game._id === id)
    console.log(filteredGames)
    setGameDetails(filteredGames)
  }
  return (
    <div>
      {gameDetails ? (
        <div>
          <h2>Title: {gameDetails.name}</h2>
          <img src={gameDetails.image} />

          <AllRating ratings={gameDetails.ratings} />
        </div>
      ) : null}
      <AddRating id={id} zahraa={zahraa} />
    </div>
  )
}
export default GameDetails
