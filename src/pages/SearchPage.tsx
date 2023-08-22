import { 
	TextField,
	Button,
	Box,
} from '@mui/material'
import styled from '@emotion/styled'
import useFavorites from '../hooks/useFavorites'
import useSearchMovies from '../hooks/useSearchMovies'
import MovieGrid from '../components/MovieGrid'


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

	const { query, setQuery, handleSearch, movies } = useSearchMovies()
	const { toggleFavorite, isFavorite } = useFavorites()
	
	console.log(movies)
	
	return (
		<CenteredContainer>
			<GlassContainer>
				<Box mb={2}>
					<TextField
						variant='outlined'
						label='Search'
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<Button variant='contained' color='primary' onClick={handleSearch}>
          				Search
					</Button>
				</Box>
			</GlassContainer>
			
			{movies && <MovieGrid 
				movies={movies.Search} 
				toggleFavorite={toggleFavorite} 
				isFavorite={isFavorite} 
			/>
			}
		</CenteredContainer>
	)
}

export default SearchComponent
