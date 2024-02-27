import { Client } from './api'

export const GetGames = async () => {
  try {
    const response = await Client.get('/game')
    return response.data
  } catch (error) {
    throw error
  }
}
const CreatGame = async (data) => {
  try {
    const response = await Client.post('/game/add', data)
    return { message: 'Game created successfully' }
  } catch (error) {
    throw error
  }
}

const DeleteGame = async (gameId) => {
  try {
    const response = await Client.delete(`/game/${gameId}`)
    return { message: 'Game Deleted successfully' }
  } catch (error) {
    throw error
  }
}

const UpdateGame = async (gameId) => {
  try {
    const response = await Client.delete(`/game/${gameId}`)
    return { message: 'Game Updated successfully' }
  } catch (error) {
    throw error
  }
}

// module.exports = {
//     GetGames
// }
