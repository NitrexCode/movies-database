import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Star, StarBorder } from '@mui/icons-material'
import { 
	Grid,
	Card,
	CardMedia,
	CardContent,
	Typography,
	IconButton, 
} from '@mui/material'
import useFavorites from '../hooks/useFavorites'

const FavoritesPage: React.FC = () => {

	const { toggleFavorite, isFavorite } = useFavorites()
	const favorites = useSelector((state: RootState) => state.movies.favorites)

	console.log(favorites)


	return (
		favorites && <Grid container spacing={3}>
			{favorites.map((movie) => (
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
		
	)
}

export default FavoritesPage
