import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainFlow } from './flows'

const Mf2Routes = () => {
	return (
		<Routes>
			<Route path="/" element={<MainFlow />} />
		</Routes>
	)
}

export default Mf2Routes
