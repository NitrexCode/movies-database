import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { Navigation, GlassContainer, PageTitle } from '../commonStyles'

const HomePage: React.FC = () => {
	return (
		<GlassContainer>
			<PageTitle>Movies Datbase</PageTitle>
			<Navigation>
				<Link to='/search'>
					<Button variant='contained' color='primary' style={{ marginRight: '20px' }}>
            			Search Movies
					</Button>
				</Link>
				<Link to='/favorites'>
					<Button variant='contained' color='secondary'>
           				My Favourite Movies
					</Button>
				</Link>
			</Navigation>
		</GlassContainer>
	)
}

export default HomePage
