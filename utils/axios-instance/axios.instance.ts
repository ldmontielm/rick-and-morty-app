import axios from 'axios'

const API_URL = "https://rickandmortyapi.com/api"

export const AxiosInstance = axios.create({
    baseURL: API_URL
})