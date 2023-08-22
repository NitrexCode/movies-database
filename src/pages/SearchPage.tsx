import { Star, StarBorder } from '@mui/icons-material'
import { 
	TextField,
	Button,
	Box,
	Grid,
	Card,
	CardMedia,
	CardContent,
	Typography,
	IconButton, 
} from '@mui/material'
import styled from '@emotion/styled'
import useFavorites from '../hooks/useFavorites'
import useSearchMovies from '../hooks/useSearchMovies'


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
						variant="outlined"
						label="Search"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<Button variant="contained" color="primary" onClick={handleSearch}>
          				Search
					</Button>
				</Box>
				<Grid container spacing={3}>
					{movies.Search.map((movie) => (
						<Grid item xs={3} key={movie.imdbID}>
							<Card>
								<CardMedia
									component="img"
									height="140"
									image={movie.Poster}
									alt={movie.Title}
								/>
								<CardContent>
									<Typography variant="h6" component="div">
										{movie.Title}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{movie.Year}
									</Typography>
									<IconButton onClick={() => toggleFavorite(movie)}>
										{isFavorite(movie.imdbID) ? <Star /> : <StarBorder />}
									</IconButton>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</GlassContainer>
		</CenteredContainer>
	)
}

export default SearchComponent
