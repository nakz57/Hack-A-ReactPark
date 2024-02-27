import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'
const GameDetails = () => {
  useEffect(() => {
    Client.get('/game')
      .then((response) => {
        console.log(response)
        setGames(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  const [gameDetails, setGameDetails] = useState({})
  const [games, setGames] = useState([])
  let { id } = useParams()

  useEffect(() => {
    getDetails()
  })
  const getDetails = () => {
    const filteredGames = games.find((game) => game._id === id)
    setGameDetails(filteredGames)
  }
  console.log(games)
  return (
    <div>
      {gameDetails ? (
        <div className="game-detail-flex game-detail-back">
          <h2 className="about-title"> {gameDetails.name}</h2>
          <img className="game-detail-img" src={gameDetails.image} />
          <h3 className="game-detail-h">Reviews: </h3>
          {gameDetails.reviews ? (
            gameDetails.reviews.map((review) => (
              <div key={review._id}>
                <h4>{review.title}</h4>
                <img src={review.pic} alt={review.title} />
              </div>
            ))
          ) : (
            <p className="para-text game-detail-para ">No reviews available</p>
          )}
        </div>
      ) : null}
    </div>
  )
}
export default GameDetails
