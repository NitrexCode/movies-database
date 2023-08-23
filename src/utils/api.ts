import axios from 'axios'

const API_KEY = '8f61bcce'
const BASE_URL = 'http://omdbapi.com/'

export const searchMovies = async ({ query, page = 1 }: { query: string, page?: number }) => {
	const response = await axios.get(
		`${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}`,
	)
	return response.data
}

export const getMovieDetails = async (id: string) => {
	const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`)
	return response.data
}
