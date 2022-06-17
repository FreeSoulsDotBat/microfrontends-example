import React, { lazy, Suspense, useState } from 'react'
import { Link } from 'react-router-dom'
import { DogsImages } from './components'
import './mainflow.css'

// const DogsImages = lazy(() => import('./components/DogsImages/DogsImages'))

export const MainFlow = () => {
	return (
		<div id="mfone__dog-container">
			{/* <Suspense
				fallback={
					<div className="h-96 w-full text-2xl text-center items-center">
						Loading...
					</div>
				}
			> */}
			<DogsImages />
			{/* </Suspense> */}
		</div>
	)
}
