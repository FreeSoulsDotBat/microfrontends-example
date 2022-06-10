import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Index } from './flows/mainFlow/index/Index'

const Mf1Routes = () => {
	return (
		<Routes>
			<Route path="/" element={<Index />} />
		</Routes>
	)
}

export default Mf1Routes
