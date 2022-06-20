import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AuthRoutes from './routes'

export const Bootstrap = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>carregando...</div>}>
				<AuthRoutes />
			</Suspense>
		</BrowserRouter>
	)
}
