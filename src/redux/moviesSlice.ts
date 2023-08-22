import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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

type MovieState = {
    movies: Movie
    favorites: MovieItem[]
}

const initialState: MovieState = {
	movies: {
		Search: [],
		totalResults: 0,
		Response: false,
		
	},
	favorites: []
}

const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		setMovies: (state, action) => {
			state.movies = action.payload
		},
		setFavoritesFromLocalStorage: (state, action: PayloadAction<MovieItem[]>) => {
			state.favorites = action.payload
		},
		addToFavorites: (state, action: PayloadAction<MovieItem>) => {
			state.favorites.push(action.payload)
		},
		removeFromFavorites: (state, action: PayloadAction<string>) => {
			state.favorites = state.favorites.filter(movie => movie.imdbID !== action.payload)
		},
	},
})

export const { setMovies, addToFavorites, removeFromFavorites, setFavoritesFromLocalStorage } = moviesSlice.actions
export default moviesSlice.reducer
