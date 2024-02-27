import { useNavigate } from 'react-router-dom'
const NewGameCard = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/addgames`)
  }
  return (
    <div className="new-game card game-card" onClick={handleClick}>
      <div className="info-wrapper flex-col">
        <h3>New Game</h3>
      </div>
    </div>
  )
}
export default NewGameCard
