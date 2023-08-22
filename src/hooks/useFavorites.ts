import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useEffect } from 'react'

const useFavorites = () => {
	const dispatch = useDispatch()
	const favorites = useSelector((state: RootState) => state.movies.favorites)

	const toggleFavorite = (movie: any) => {
		const isFavorite = favorites.some(fav => fav.imdbID === movie.imdbID)
		if (isFavorite) {
			dispatch({ type: 'movies/removeFromFavorites', payload: movie.imdbID })
		} else {
			dispatch({ type: 'movies/addToFavorites', payload: movie })
		}
		localStorage.setItem('favorites', JSON.stringify(favorites))
	}

	const isFavorite = (movieId: string): boolean => {
		return favorites.some(fav => fav.imdbID === movieId)
	}

	useEffect(() => {
		const storedFavorites = localStorage.getItem('favorites')
		if (storedFavorites) {
			dispatch({ type: 'movies/setFavoritesFromLocalStorage', payload: JSON.parse(storedFavorites) })
		}
	}, [dispatch])
	

	return { toggleFavorite, isFavorite, favorites }
}

export default useFavorites
