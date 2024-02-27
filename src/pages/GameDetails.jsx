import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Client from '../services/api'
import AllRating from '../components/AllRating'
import AddRating from '../components/AddRating'
const GameDetails = () => {
  const navigate = useNavigate()
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
  const handleSubmit = () => {
    Client.delete(`/game/${id}`, {}).then((response) => {
      console.log(response)
      navigate('/game')
    })
  }
  const handleUpdate = () => {
    navigate(`/game/update/${id}`)
  }
  console.log(games)
  return (
    <div>
      {gameDetails ? (
        <div className="game-detail-flex game-detail-back">
          <h2 className="about-title">Title: {gameDetails.name}</h2>
          <img className="game-detail-img" src={gameDetails.image} />
          <h4>{gameDetails.description}</h4>

          <button onClick={handleSubmit}>Delete</button>
          <button onClick={handleUpdate}>Update</button>
          <AllRating ratings={gameDetails.ratings} />
        </div>
      ) : null}

      <AddRating id={id} zahraa={zahraa} />
    </div>
  )
}
export default GameDetails
