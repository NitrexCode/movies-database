import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const useFavorites = () => {
	const dispatch = useDispatch()
	const favorites = useSelector((state: RootState) => state.movies.favorites)

	const toggleFavorite = (movie: any) => {
		const isFavorite = favorites.some(fav => fav.imdbID === movie.imdbID)
		if (isFavorite) {
			dispatch({ type: 'movies/removeFromFavorites', payload: movie })
		} else {
			dispatch({ type: 'movies/addToFavorites', payload: movie })
		}
		localStorage.setItem('favorites', JSON.stringify(favorites))
	}

	const isFavorite = (movieId: string): boolean => {
		return favorites.some(fav => fav.imdbID === movieId)
	}

	return { toggleFavorite, isFavorite, favorites }
}

export default useFavorites
