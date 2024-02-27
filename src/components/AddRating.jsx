import { useState, useEffect } from 'react'
import Client from '../services/api'
import { Navigate, useNavigate } from 'react-router-dom'
import AllRating from '../components/AllRating'

const AddRating = ({ id, ratings, zahraa }) => {
  const navigate = useNavigate()
  const initialState = {
    rating: '',
    content: ''
  }

  const [rating, setRating] = useState(initialState)
  // const [addRating, setAddRating] = useState(ratings)
  // useEffect(() => {
  //   Client.get('/game')
  //     .then((response) => {
  //       const filteredGames = games.find((game) => game._id === id)
  //       console.log(filteredGames, response.data)
  //       // setAddRating(filteredGames)
  //       // setGames(response.data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }, [])

  // useEffect(() => {
  //   getDetails()
  // })

  const handleChange = (event) => {
    setRating({ ...rating, [event.target.id]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    Client.post(`/game/${id}/rating`, rating)
      .then((response) => {
        console.log(response.data)
        // setRating(response.data)
        zahraa(response.data)
        // navigate(`/game/${id}`)
      })
      .catch((error) => {
        console.log(error)
      })

    setRating(initialState)
    navigate(`/game/${id}`)
  }
  return (
    <div>
      {/* <AllRating ratings={rating} setRating={setRating} /> */}

      <form onSubmit={handleSubmit}>
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          type="Number"
          onChange={handleChange}
          value={rating.rating}
        />
        <label htmlFor="content">Content:</label>
        <input
          id="content"
          type="text"
          onChange={handleChange}
          value={rating.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddRating
