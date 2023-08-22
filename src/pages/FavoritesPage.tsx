import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material'

const FavoritesPage: React.FC = () => {
	const favorites = useSelector((state: RootState) => state.movies.favorites)

	return (
		<Grid container spacing={3}>
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
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	)
}

export default FavoritesPage
