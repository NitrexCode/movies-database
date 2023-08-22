import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import moviesReducer from './moviesSlice'
import rootSaga from './sagas'

export type RootState = ReturnType<typeof store.getState>

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
	reducer: {
		movies: moviesReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store