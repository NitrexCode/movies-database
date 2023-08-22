import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetails } from '../utils/api'

type MovieDetail = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

const MovieDetailPage: React.FC = () => {
	const { id } = useParams<{ id: string }>()
	const [movie, setMovie] = useState<MovieDetail | null>(null)

	useEffect(() => {
		const fetchMovie = async () => {
			if (id) {
				const data = await getMovieDetails(id)
				setMovie(data)
			}
		}

		fetchMovie()
	}, [id])

	if (!movie) return <div>Loading...</div>

	return (
		<div>
			<img src={movie.Poster} alt={movie.Title} />
			<h1>{movie.Title}</h1>
			<p>Type: {movie.Type}</p>
			<p>Year: {movie.Year}</p>
		</div>
	)
}

export default MovieDetailPage
