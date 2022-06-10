import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mf1Routes from 'mf1/Mf1Routes'

import { MainFlow } from './flows'

export const ShellRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<MainFlow />}>
				<Route path="/mf1/*" element={<Mf1Routes />} />
			</Route>
		</Routes>
	)
}
