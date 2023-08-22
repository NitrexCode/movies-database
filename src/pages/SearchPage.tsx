import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const SearchPage: React.FC = () => {
	const [query, setQuery] = useState('')
	const dispatch = useDispatch()
  
	const handleSearch = () => {
		dispatch({ type: 'movies/fetchMovies', payload: query })
	}
  
	return (
		<div>
			<input value={query} onChange={e => setQuery(e.target.value)} />
			<button onClick={handleSearch}>Search</button>
		</div>
	)
}
  
export default SearchPage
