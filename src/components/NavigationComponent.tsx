import React from 'react'
import { Navigation, NavLink } from '../commonStyles'

const NavigationComponent: React.FC = () => {
	return (
		<Navigation>
			<NavLink href="/">Home</NavLink>
			<NavLink href="/search">Search</NavLink>
			<NavLink href="/favorites">Favorites</NavLink>
		</Navigation>
	)
}

export default NavigationComponent
