import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Header } from '../../components'
import './mainflow.css'
import { useLocation } from 'react-router-dom'

export const MainFlow = () => {
	const route = useLocation()

	return (
		<div id="base__gridconfig">
			<div id="base__header">
				<Header />
			</div>
			<div id="base__content">
				{route.pathname == '/' ? (
					<div>
						<Link className="base__links" to={'/mf1'}>
							Let me see some dogs
						</Link>
						{/* <Link to={'/mf2'}>Let me see some dogs</Link> */}
					</div>
				) : null}
				<Outlet />
			</div>
		</div>
	)
}
