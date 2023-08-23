import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const useSearchMovies = () => {
	const [query, setQuery] = useState('')
	const [error, setError] = useState<string | null>(null)
	const [page, setPage] = useState(1)
	const dispatch = useDispatch()
	const movies = useSelector((state: RootState) => state.movies.movies)

	const handleSearch = () => {
		if (!query.trim()) {
			setError('Please enter a search term.')
			return
		}
		setError(null)
		dispatch({ type: 'movies/fetchMovies', payload: { query, page } })
	}

	const handlePageChange = (ev: React.ChangeEvent<unknown>, value: number) => {
		setPage(value)
		handleSearch()
	}
	
	
	
	return { error, query, setQuery, handleSearch, handlePageChange, movies, page }
}

export default useSearchMovies
