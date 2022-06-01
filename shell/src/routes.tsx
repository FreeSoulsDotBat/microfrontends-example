import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainFlow } from './flows/mainFlow/MainFlow'

export const ShellRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<MainFlow />} />
		</Routes>
	)
}
