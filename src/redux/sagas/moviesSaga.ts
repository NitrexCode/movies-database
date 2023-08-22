import { call, put, takeLatest } from 'redux-saga/effects'
import { searchMovies } from '../../utils/api'
import { setMovies } from '../moviesSlice'

function* fetchMovies(action) {
	try {
		const results = yield call(searchMovies, action.payload)
		yield put(setMovies(results))
	} catch (error) {
		console.error('Error fetching movies:', error)
	}
}

function* watchFetchMovies() {
	yield takeLatest('movies/fetchMovies', fetchMovies)
}

export default watchFetchMovies
