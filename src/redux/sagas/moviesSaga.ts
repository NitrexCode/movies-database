import { call, put, takeLatest } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { searchMovies } from '../../utils/api'
import { setMovies } from '../moviesSlice'

interface FetchMoviesPayload {
    query: string;
    page: number;
}

function* fetchMovies(action: PayloadAction<FetchMoviesPayload>): Generator {
	try {
		const results = yield call(searchMovies, { query: action.payload.query, page: action.payload.page })
		yield put(setMovies(results))
	} catch (error) {
		console.error('Error fetching movies:', error)
	}
}

function* watchFetchMovies() {
	yield takeLatest('movies/fetchMovies', fetchMovies)
}

export default watchFetchMovies
