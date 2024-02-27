import { useState } from 'react'
import Client from '../services/api'

const AddRating = ({ id }) => {
  const initialState = {
    rating: '',
    content: ''
  }
  const [rating, setRating] = useState(initialState)

  const handleChange = (event) => {
    setRating({ ...rating, [event.target.id]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    Client.post(`/game/${id}/rating`, rating)
      .then((response) => {
        console.log(response)
        // setRating(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
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
  )
}

export default AddRating
