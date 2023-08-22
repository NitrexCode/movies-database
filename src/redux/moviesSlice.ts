import { createSlice } from '@reduxjs/toolkit'

type MovieItem = {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
}

type Movie = {
	Search: MovieItem[]
	totalResults: number
	Response: boolean
}

type FavoriteMovies = {
	id:string
}

type MovieState = {
    movies: Movie
    favorites: FavoriteMovies[]
}

const defaultMovieItem: MovieItem = {
	Poster: '',
	Title: '',
	Type: '',
	Year: '',
	imdbID: ''
}

const initialState: MovieState = {
	movies: {
		Search: [defaultMovieItem],
		totalResults: 0,
		Response: false,
	},
	favorites: [],
}

const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		setMovies: (state, action) => {
			state.movies = action.payload
		},
		addToFavorites: (state, action) => {
			state.favorites.push(action.payload)
		},
		removeFromFavorites: (state, action) => {
			state.favorites = state.favorites.filter(
				(movie) => movie.id !== action.payload.id,
			)
		},
	},
})

export const { setMovies, addToFavorites, removeFromFavorites } = moviesSlice.actions
export default moviesSlice.reducer
