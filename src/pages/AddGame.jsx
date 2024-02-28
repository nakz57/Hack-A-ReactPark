import { useRef } from 'react'
import Client from '../services/api'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const AddGame = () => {
  const navigate = useNavigate()
  const nameRef = useRef(null)
  const desRef = useRef(null)
  const imgRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    Client.post('/game/add', {
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
    <form
      className="container container-add addGame-img"
      onSubmit={handleSubmit}
    >
      <div className="item flexa">
        <label className="add-text" htmlFor="text">
          Name
        </label>
        <input type="text" id="name" placeholder="Name" ref={nameRef} />
      </div>

      <div className="item flexa">
        <label className="add-text" htmlFor="text">
          Image
        </label>
        <input type="url" id="image" placeholder="Image" ref={imgRef} />
      </div>
      <div className="item flexa">
        <label className="add-text" htmlFor="text">
          Description
        </label>
        <textarea
          type="text"
          id="description"
          placeholder="Description"
          ref={desRef}
          cols="30"
          rows="5"
        ></textarea>
      </div>
      <div className="flexa item">
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default AddGame
