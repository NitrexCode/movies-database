import { 
	Typography,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import useFavorites from '../hooks/useFavorites'
import useSearchMovies from '../hooks/useSearchMovies'
import MovieGrid from '../components/MovieGrid'
import { GlassContainer, PageTitle, SearchInputContainer, StyledTextField, SearchButton, StyledPagination } from '../commonStyles'

const SearchComponent: React.FC = () => {

	const { error, query, setQuery, handleSearch, handlePageChange, movies, page } = useSearchMovies()
	const { toggleFavorite, isFavorite } = useFavorites()
	
	console.log(movies)
	
	return (
		<GlassContainer>
			<PageTitle>Find your movie</PageTitle>
			<SearchInputContainer>
				<StyledTextField value={query} onChange={(ev) => setQuery(ev.target.value)} placeholder="Search" />
				<SearchButton onClick={handleSearch}>
					<SearchIcon/>
				</SearchButton>
			</SearchInputContainer>
			{error && <Typography color="error">{error}</Typography>}
			{movies && <MovieGrid movies={movies.Search} toggleFavorite={toggleFavorite} isFavorite={isFavorite} />}
			{movies.totalResults > 12 && <StyledPagination count={Math.ceil(movies.totalResults / 12)} page={page} onChange={handlePageChange} />}
		</GlassContainer> 
	)
}

export default SearchComponent
