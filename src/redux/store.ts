import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import moviesReducer from './moviesSlice'
import rootSaga from './sagas'  // Import the root saga here

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
	reducer: {
		movies: moviesReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store