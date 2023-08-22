import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const FavoritesPage: React.FC = () => {
	const favorites = useSelector((state: RootState) => state.movies.favorites)

	return <div></div>
}

export default FavoritesPage
