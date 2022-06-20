import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mf1Routes from 'mf1/Mf1Routes'
import Mf2Routes from 'mf2/Mf2Routes'
import AuthRoutes from 'auth/AuthRoutes'

import { MainFlow } from './flows'

export const ShellRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<MainFlow />}>
				<Route path="/mf1/*" element={<Mf1Routes />} />
				<Route path="/mf2/*" element={<Mf2Routes />} />
				<Route path="/auth/*" element={<AuthRoutes />} />
			</Route>
		</Routes>
	)
}
