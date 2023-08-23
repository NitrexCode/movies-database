import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMovieDetails } from '../utils/api'
import { Star, StarBorder } from '@mui/icons-material'
import { Card, CardMedia, CardContent, Typography, Grid, Divider, Chip, Button, Box, IconButton } from '@mui/material'
import useFavorites from '../hooks/useFavorites'

const MovieDetailPage: React.FC = () => {
	const { id } = useParams<{ id: string }>()
	const [movie, setMovie] = useState<any | null>(null)
	const { toggleFavorite, isFavorite } = useFavorites()
	const navigate = useNavigate()
	const handleBack = () => {
		navigate(-1)
	}
	
	useEffect(() => {
		const fetchMovie = async () => {
			if (id) {
				const data = await getMovieDetails(id)
				setMovie(data)
			}
		}

		fetchMovie()
	}, [id])
	return(
		!movie 
			? <div>Loading...</div>
			: <>
				<Grid container justifyContent="center">
					<Grid item xs={12} md={8}>
						<Card>
							<Grid container>
								<Grid item xs={12} md={4}>
									<CardMedia
										component="img"
										image={movie.Poster}
										alt={movie.Title}
									/>
								</Grid>
								<Grid item xs={12} md={8}>
									<CardContent>
										<Typography variant="h4" component="div">
											{movie.Title}
											<IconButton onClick={() => toggleFavorite(movie)}>
												{isFavorite(movie.imdbID) ? <Star /> : <StarBorder />}
											</IconButton>
										</Typography>
										<Typography variant="subtitle1" color="textSecondary">
                                    Directed by {movie.Director}
										</Typography>
										<Divider style={{ margin: '16px 0' }} />
										<Typography variant="body1">
											{movie.Plot}
										</Typography>
										<Divider style={{ margin: '16px 0' }} />
										<Typography variant="body2">
											<strong>Actors:</strong> {movie.Actors}
										</Typography>
										<Typography variant="body2">
											<strong>Genre:</strong> {movie.Genre}
										</Typography>
										<Typography variant="body2">
											<strong>Released:</strong> {movie.Released}
										</Typography>
										<Typography variant="body2">
											<strong>Runtime:</strong> {movie.Runtime}
										</Typography>
										<Typography variant="body2">
											<strong>Language:</strong> {movie.Language}
										</Typography>
										<Typography variant="body2">
											<strong>Country:</strong> {movie.Country}
										</Typography>
										<Typography variant="body2">
											<strong>IMDb Rating:</strong> {movie.imdbRating}
										</Typography>
										<Divider style={{ margin: '16px 0' }} />
										<Typography variant="body2">
											<strong>Awards:</strong> {movie.Awards}
										</Typography>
										<Typography variant="body2">
											<strong>Box Office:</strong> {movie.BoxOffice}
										</Typography>
										<Typography variant="body2">
											<strong>Production:</strong> {movie.Production}
										</Typography>
										<Divider style={{ margin: '16px 0' }} />
										<Chip label={`Rated: ${movie.Rated}`} variant="outlined" />
									</CardContent>
								</Grid>
							</Grid>
						</Card>
					</Grid>
				</Grid>
				<Box display="flex" justifyContent="center" mt={3}>
					<Button variant="contained" color="primary" onClick={handleBack}>
        				Go Back
					</Button>
				</Box>

			</>)
}

export default MovieDetailPage
