import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetails } from '../utils/api'


const MovieDetailPage: React.FC = () => {
	const { id } = useParams<{ id: string }>()
	const [movie, setMovie] = useState(null)
  
	useEffect(() => {
		const fetchMovie = async () => {
			const data = await getMovieDetails(id)
			setMovie(data)
		}
  
		fetchMovie()
	}, [id])
  
	return (
		<div>
		</div>
	)
}
  
export default MovieDetailPage
  