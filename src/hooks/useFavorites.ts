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
	}

	const isFavorite = (movieId: string): boolean => {
		return favorites.some(fav => fav.imdbID === movieId)
	}

	useEffect(() => {
		const storedFavorites = localStorage.getItem('favorites')
		if (storedFavorites && storedFavorites !== 'undefined') {
			try {
				const parsedFavorites = JSON.parse(storedFavorites)
				dispatch({ type: 'movies/setFavoritesFromLocalStorage', payload: parsedFavorites })
			} catch (error) {
				console.error('Error parsing favorites from localStorage:', error)
			}
		}
	}, [dispatch])
	
	

	return { toggleFavorite, isFavorite, favorites }
}

export default useFavorites
