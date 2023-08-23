import React from 'react'
import { GlassContainer, PageTitle } from '../commonStyles'
import NavigationComponent from '../components/NavigationComponent'

const HomePage: React.FC = () => {
	return (
		<GlassContainer>
			<PageTitle>Movies Database</PageTitle>
			<NavigationComponent />
		</GlassContainer>
	)
}

export default HomePage
