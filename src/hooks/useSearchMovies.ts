import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const useSearchMovies = () => {
	const [query, setQuery] = useState('')
	const dispatch = useDispatch()
	const movies = useSelector((state: RootState) => state.movies.movies)

	const handleSearch = () => {
		dispatch({ type: 'movies/fetchMovies', payload: query })
	}

	useEffect(() => {
		const storedFavorites = localStorage.getItem('favorites')
		if (storedFavorites) {
			dispatch({ type: 'movies/setFavorites', payload: JSON.parse(storedFavorites) })
		}
	}, [dispatch])

	return { query, setQuery, handleSearch, movies }
}

export default useSearchMovies
