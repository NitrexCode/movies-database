import axios from 'axios'

const API_KEY = ''
const BASE_URL = 'http://omdbapi.com/'

export const searchMovies = async (query: string) => {
	const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}`)
	return response.data
}

export const getMovieDetails = async (id: string) => {
	const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`)
	return response.data
}