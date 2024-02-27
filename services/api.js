import Axios from 'axios'

export const BASE_URL = 'http://localhost:3000' //depend on server you run in backend

export const Client = Axios.create({ baseURL: BASE_URL })
