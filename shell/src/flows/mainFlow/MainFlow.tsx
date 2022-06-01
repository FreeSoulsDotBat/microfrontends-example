import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Index } from './views/index/Index'

export const MainFlow = () => {
	return (
		<Routes>
			<Route path="/" element={<Index />} />
		</Routes>
	)
}
