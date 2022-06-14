import React, { FC, Suspense, useEffect, useState } from 'react'
import { httpService } from 'dataValidation/httpService'
import { Link } from 'react-router-dom'
import './mainflow.css'

export interface DogImageProps {
	url: string
}

export const MainFlow = () => {
	const URL_BASE = 'https://api.thedogapi.com/v1/images/search'
	const [data, setData] = useState([])

	const fetchData = async () => {
		const response = await httpService.request({
			url: `${URL_BASE}?limit=10`,
			method: 'get',
			headers: { 'x-api-key': '5c31529c-938d-49b1-aba0-1888bd66efda' }
		})
		setData(response.body)
	}

	useEffect(() => {
		fetchData()
	}, [])

	const DogImage: FC<DogImageProps> = ({ url }) => {
		return (
			<img src={url} alt="I'am a doggo." className="mfone__dog-images" />
		)
	}

	return (
		<div id="mfone__dog-container">
			<Suspense fallback={<div>Carregando...</div>}>
				<div id="mfone__images-box">
					{data
						? data.map((element, index) => {
								return (
									<DogImage key={index} url={element.url} />
								)
						  })
						: null}
				</div>
			</Suspense>
			<div id="mfone__links-box">
				<Link to="/" className="mfone__dog-links">
					Back to Home page
				</Link>
				<button
					onClick={() => fetchData()}
					className="mfone__dog-links"
				>
					More Doggos
				</button>
			</div>
		</div>
	)
}
