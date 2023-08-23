import { takeEvery, select } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'

type FavoriteItem = {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
}

type FavoriteState = {
    movies: {
        favorites:FavoriteItem[]
    }
}

const getFavorites = (state: FavoriteState) => state.movies.favorites

function* updateLocalStorage(): SagaIterator {
	const favorites = yield select(getFavorites)
	if (favorites) {
		localStorage.setItem('favorites', JSON.stringify(favorites))
	} else {
		localStorage.removeItem('favorites')
	}
}

export default function* favoritesSaga(): SagaIterator {
	yield takeEvery(['movies/addToFavorites', 'movies/removeFromFavorites'], updateLocalStorage)
}