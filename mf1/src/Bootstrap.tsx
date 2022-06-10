import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Mf1Routes from './routes'

export const Bootstrap = () => {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Mf1Routes />
			</BrowserRouter>
		</React.StrictMode>
	)
}
