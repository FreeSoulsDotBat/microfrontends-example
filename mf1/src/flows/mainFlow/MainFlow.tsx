import React, { lazy, Suspense } from 'react'
import { DogsImages } from './components'
import './mainflow.css'

// const DogsImages = lazy(() => import('./components/DogsImages/DogsImages'))

export const MainFlow = () => {
	return (
		<div id="mfone__dog-container">
			<h3 id="mfone__title">Doggos from Microfrontend 1</h3>
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
