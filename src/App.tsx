import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FavoritesPage, Home, MovieDetailPage, SearchPage } from './pages'
import { Global } from '@emotion/react'
import { globalStyles } from './commonStyles'

function App() {
	return (
		<>
			<Global styles={globalStyles} />
			<BrowserRouter>
				<Routes>
					<Route path='/search' element={<SearchPage />} />
					<Route path='/movie/:id' element={<MovieDetailPage />} />
					<Route path='/favorites' element={<FavoritesPage />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
