import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export const Header = () => {
	return (
		<React.Fragment>
			<header id="header">
				Header from Shell
				<Link id="header__link" to={'/auth'}>
					Login
				</Link>
			</header>
		</React.Fragment>
	)
}
