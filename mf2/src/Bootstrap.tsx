import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Mf2Routes from './routes'

export const Bootstrap: FC<{}> = () => {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Mf2Routes />
			</BrowserRouter>
		</React.StrictMode>
	)
}
