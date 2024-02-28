import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Client from '../services/api'
import AllRating from '../components/AllRating'
import AddRating from '../components/AddRating'
const GameDetails = () => {
  const navigate = useNavigate()
  const [gameDetails, setGameDetails] = useState({})
  let { id } = useParams()
  useEffect(() => {
    Client.get(`/game/${id}`)
      .then((response) => {
        setGameDetails(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id])
  const ali = (a) => {
    setGameDetails(a)
  }
  const handleSubmit = () => {
    Client.delete(`/game/${id}`, {}).then((response) => {
      navigate('/game')
    })
  }
  const handleUpdate = () => {
    navigate(`/game/update/${id}`)
  }
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

      <AddRating id={id} ali={ali} />
    </div>
  )
}
export default GameDetails
