import { useState } from 'react'

const AddRating = () => {
  const initialState = {
    rating: '',
    content: ''
  }
  const [rating, setRating] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    Client.post(`/game/${gameId}/rating`)
      .then((response) => {
        console.log(response)
        setGames(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    setFormState(initialState)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="rating">Rating:</label>
      <input
        id="rating"
        type="Number"
        onChange={handleChange}
        value={formState.username}
      />
      <label htmlFor="content">Content:</label>
      <input
        id="content"
        type="text"
        onChange={handleChange}
        value={formState.password}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddRating
