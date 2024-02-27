import { useNavigate } from 'react-router-dom'

const GameCard = ({ game }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    console.log({game})
    navigate(`/game/${game._id}`)
  }
  return (
    <div className="card game-card" onClick={handleClick}>
      <div className="img-wrapper">
        <img className='card-img' src={game.image} />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{game.name}</h3>
      </div>
    </div>
  )
}
export default GameCard
