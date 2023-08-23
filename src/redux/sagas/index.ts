import { all } from 'redux-saga/effects'
import watchFetchMovies from './moviesSaga'
import favoritesSaga from './favoritesSaga'

export default function* rootSaga() {
	yield all([
		watchFetchMovies(),
		favoritesSaga()
	])
}
