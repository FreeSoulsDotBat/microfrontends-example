import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AuthenticationRoutes from './routes'

export const Bootstrap = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>carregando...</div>}>
				<AuthenticationRoutes />
			</Suspense>
		</BrowserRouter>
	)
}
