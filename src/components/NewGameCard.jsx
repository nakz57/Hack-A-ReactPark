import { useNavigate } from 'react-router-dom'
const NewGameCard = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/addgames`)
  }
  return (
    <div className="new-game card game-card new-h3" onClick={handleClick}>
      <div className="info-wrapper flex-col-new">
        <h3 className="new-text">+</h3>
      </div>
    </div>
  )
}
export default NewGameCard
