import React, { useState } from 'react'
import { TextField, Button, Box, List, ListItem } from '@mui/material'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const GlassContainer = styled(Box)({
	backgroundColor: 'rgba(255, 255, 255, 0.1)',
	backdropFilter: 'blur(10px)',
	borderRadius: '10px',
	padding: '20px',
	border: '1px solid rgba(255, 255, 255, 0.2)',
})

const SearchComponent: React.FC = () => {
	const [query, setQuery] = useState('')
	const dispatch = useDispatch()
	const movies = useSelector((state: RootState) => state.movies.movies) 

	const handleSearch = () => {
		dispatch({ type: 'movies/fetchMovies', payload: query })
	}

	console.log(movies)

	return (
		<GlassContainer>
			<Box mb={2}>
				<TextField
					variant="outlined"
					label="Search"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<Button variant="contained" color="primary" onClick={handleSearch}>
          Search
				</Button>
			</Box>
			<List>
				{movies.Search.map((movie, index) => (
					<ListItem key={index}>{movie.Title}</ListItem>
				))} 
			</List>
		</GlassContainer>
	)
}

export default SearchComponent
