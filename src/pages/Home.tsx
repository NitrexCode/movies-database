import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const HomePage: React.FC = () => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
			<h1>Welcome to the Movie Database</h1>

			<div style={{ marginTop: '20px' }}>
				<Link to="/search" style={{ textDecoration: 'none', marginRight: '20px' }}>
					<Button variant="contained" color="primary">
            Search Movies
					</Button>
				</Link>

				<Link to="/favorites" style={{ textDecoration: 'none' }}>
					<Button variant="contained" color="secondary">
            My Favourite Movies
					</Button>
				</Link>
			</div>
		</div>
	)
}

export default HomePage