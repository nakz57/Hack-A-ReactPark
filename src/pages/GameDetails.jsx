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
  }, [])

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
        <div className="game-details-container">
          <div className="game-info">
            <h2 className="about-title">{gameDetails.name}</h2>
            <img className="game-detail-img" src={gameDetails.image} />
            <h4>Description:{gameDetails.description}</h4>
            <div className="buttons-container">
    <button className="game-details-button delete-button" onClick={handleSubmit}>Delete</button>
    <button className="game-details-button update-button" onClick={handleUpdate}>Update</button>
  </div>
          </div>
          <div className="game-reviews">
            <AllRating ratings={gameDetails.ratings} />
            <div className="add-rating-section">
        <AddRating id={id} zahraa={zahraa} />
      </div>
          </div>
        </div>
      ) : null}
      
    </div>
  )
}
export default GameDetails
