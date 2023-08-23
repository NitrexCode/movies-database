import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import useFavorites from '../hooks/useFavorites'
import MovieGrid from '../components/MovieGrid'
import { GlassContainer, PageTitle } from '../commonStyles'

const FavoritesPage: React.FC = () => {
	const { toggleFavorite, isFavorite } = useFavorites()
	const favorites = useSelector((state: RootState) => state.movies.favorites)

	return (
		<GlassContainer>
			<PageTitle>Favorites</PageTitle>
			{favorites && <MovieGrid movies={favorites} toggleFavorite={toggleFavorite} isFavorite={isFavorite} />}
		</GlassContainer>
	)
}

export default FavoritesPage
