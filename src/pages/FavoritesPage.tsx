import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import useFavorites from '../hooks/useFavorites'
import MovieGrid from '../components/MovieGrid'

const FavoritesPage: React.FC = () => {

	const { toggleFavorite, isFavorite } = useFavorites()
	const favorites = useSelector((state: RootState) => state.movies.favorites)

	return (
		favorites && <MovieGrid 
			movies={favorites} 
			toggleFavorite={toggleFavorite} 
			isFavorite={isFavorite} 
		/>
	)
}

export default FavoritesPage
