import { createSlice } from '@reduxjs/toolkit'

type Movie = {
    id: string;
};

type MovieState = {
    movies: Movie[];
    favorites: Movie[];
};

const initialState: MovieState = {
	movies: [],
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

export const { setMovies, addToFavorites, removeFromFavorites } =
    moviesSlice.actions
export default moviesSlice.reducer
