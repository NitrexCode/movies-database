import React from 'react'
import { Grid, Card, CardMedia, CardActionArea, Typography, IconButton } from '@mui/material'
import { Star, StarBorder } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { MovieCard, MovieCardContent, StyledGrid } from '../commonStyles'

type MovieItem = {
    Poster: string;
    Title: string;
    Year: string;
    imdbID: string;
}

type MovieGridProps = {
    movies: MovieItem[];
    toggleFavorite: (movie: MovieItem) => void;
    isFavorite: (movieId: string) => boolean;
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies, toggleFavorite, isFavorite }) => {
	
	const navigate = useNavigate()

	return (<>
		<StyledGrid container spacing={3}>
			{movies && movies.map((movie) => (
				<Grid item xs={3} key={movie.imdbID}>
					<MovieCard>
						<Card>
							<CardActionArea component='div' onClick={() => navigate(`/movie/${movie.imdbID}`)}>
								<CardMedia
									component='img'
									height='140'
									image={movie.Poster}
									alt={movie.Title}
								/>
								<MovieCardContent>
									<Typography variant='h6' component='div'>
										{movie.Title}
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										{movie.Year}
									</Typography>
									<IconButton onClick={ev => {
										ev.stopPropagation()
										toggleFavorite(movie)
									}}>
										{isFavorite(movie.imdbID) ? <Star /> : <StarBorder />}
									</IconButton>
								</MovieCardContent>
							</CardActionArea>

						</Card>
					</MovieCard>
				</Grid>
			))}
		</StyledGrid>
	</>)
}

export default MovieGrid
