import { all } from 'redux-saga/effects'
import watchFetchMovies from './moviesSaga'

export default function* rootSaga() {
	yield all([watchFetchMovies()])
}
