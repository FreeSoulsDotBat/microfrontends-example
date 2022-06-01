import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ShellRoutes } from './routes'

export const Bootstrap = () => {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<ShellRoutes />
			</BrowserRouter>
		</React.StrictMode>
	)
}
