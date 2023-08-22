import React, { useState } from 'react'
import { 
	TextField,
	Button,
	Box,
	List,
	ListItemButton,
	ListItemAvatar,
	Avatar,
	ListItemText 
} from '@mui/material'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const GlassContainer = styled(Box)({
	backgroundColor: 'rgba(0, 0, 0, 0.1)',
	backdropFilter: 'blur(10px)',
	borderRadius: '10px',
	padding: '20px',
	border: '1px solid rgba(0, 0, 0, 0.2)',
	width: '300px',
	height: '200px',
})

const CenteredContainer = styled.div({
	display: 'grid',
	placeItems: 'center',
	height: '100vh',
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
		<CenteredContainer>
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
				<List  sx={{ width: '100%', maxWidth: 600 }}>
					{movies.Search.map((movie, index) => (
						<ListItemButton key={index} alignItems="flex-start" href={`/movie/${movie.imdbID}`}>
							<ListItemAvatar>
								<Avatar alt={`${movie.Title} ${movie.Year}`} src={movie.Poster} />
							</ListItemAvatar>
							<ListItemText
								primary={movie.Title}
								secondary={movie.Year}
							/>
						</ListItemButton >
					))} 
				</List>
			</GlassContainer>
		</CenteredContainer>
	)
}

export default SearchComponent
