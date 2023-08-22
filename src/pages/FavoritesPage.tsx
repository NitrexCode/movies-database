import { useSelector } from 'react-redux'
const FavoritesPage: React.FC = () => {
	const favorites = useSelector(state => state.movies.favorites)
  
	return (
		<div>
		</div>
	)
}

export default FavoritesPage