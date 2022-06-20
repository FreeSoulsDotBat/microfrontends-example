import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Login = lazy(() => import('./views/Login'))
const AccessToken = lazy(() => import('./views/AccessToken'))
const ResetPassword = lazy(() => import('./views/ResetPassword'))
const ChangePassword = lazy(() => import('./views/ChangePassword'))

const AuthRoutes = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/access-token" element={<AccessToken />} />
				<Route path="/reset-password" element={<ResetPassword />} />
				<Route path="/change-password" element={<ChangePassword />} />
			</Routes>
		</Suspense>
	)
}

export default AuthRoutes
