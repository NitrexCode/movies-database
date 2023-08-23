import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { NavigationContainer } from '../commonStyles'


const NavigationComponent: React.FC = () => {

	const navigate = useNavigate()

	return (
		<NavigationContainer>
			<Button variant="contained" color="primary" onClick={() => navigate('/')} style={{ marginRight: '10px' }}>
                Home
			</Button>
			<Button variant="contained" color="primary" onClick={() => navigate('/search')} style={{ marginRight: '10px' }}>
                Search Movies
			</Button>
			<Button variant="contained" color="primary" onClick={() => navigate('/favorites')}>
                My Favourite Movies
			</Button>
		</NavigationContainer>
	)
}

export default NavigationComponent
