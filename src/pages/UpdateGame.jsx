import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useRef } from 'react'
import Client from '../services/api'
const UpdateGame = () => {
  const nameRef = useRef(null)
  const desRef = useRef(null)
  const imgRef = useRef(null)
  const [gameDetails, setGameDetails] = useState({})
  const [games, setGames] = useState([])
  let { id } = useParams()
  const navigate = useNavigate()
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

  useEffect(() => {
    getDetails()
  })
  const getDetails = () => {
    const filteredGames = games.find((game) => game._id === id)
    setGameDetails(filteredGames)
  }
  const handleUpdateDate = (e) => {
    e.preventDefault()
    Client.put(`/game/${id}`, {
      name: nameRef.current.value,
      description: desRef.current.value,
      image: imgRef.current.value
    }).then((response) => {
      console.log(response)
      navigate('/game')
    })
    nameRef.current.value = null
    desRef.current.value = null
    imgRef.current.value = null
  }
  return (
    <div>
      {gameDetails ? (
        <form onSubmit={handleUpdateDate}>
          <label htmlFor="text">Name</label>
          <input defaultValue={gameDetails.name} type="text" id="name" ref={nameRef} />
          <label htmlFor="text">Description</label>
          <input
            type="text"
            id="description"
            defaultValue={gameDetails.description}
            ref={desRef}
          />
          <label htmlFor="text">Image</label>
          <input type="url" id="image" defaultValue={gameDetails.image} ref={imgRef} />

          <button type="submit">Update</button>
        </form>
      ) : null}
    </div>
  )
}
export default UpdateGame
