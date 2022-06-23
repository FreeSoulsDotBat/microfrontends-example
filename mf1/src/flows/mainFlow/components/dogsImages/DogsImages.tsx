import React, { FC, useEffect, useState } from 'react'
import { httpService } from 'dataValidation/httpService'
import './dogsimages.css'
import { Link } from 'react-router-dom'

const URL_BASE = 'https://api.thedogapi.com/v1/images/search'

export const DogsImages: FC<{}> = () => {
	const [data, setData] = useState<any[]>([])
	const [loading, setloading] = useState<boolean>()

	const fetchData = async () => {
		setloading(true)
		const response = await httpService.request({
			url: `${URL_BASE}?limit=10`,
			method: 'get',
			headers: { 'x-api-key': `${process.env.API_KEY_DOGS}` }
		})
		return response
	}

	useEffect(() => {
		!data.length
			? fetchData().then((res) => {
					setData(res.body)
					return data
			  })
			: setloading(false)
	}, [data])

	return (
		<React.Fragment>
			<div id="mfone__images-box">
				{!loading ? (
					data.map((element, index) => {
						return (
							<img
								key={index}
								src={element.url}
								alt="I'am a doggo."
								className="mfone__dog-images"
							/>
						)
					})
				) : (
					<div id="mfone__loading">Loading...</div>
				)}
			</div>
			<div id="mfone__links-box">
				<Link to="/" className="mfone__dog-links">
					Back to Home page
				</Link>
				<button
					onClick={() => {
						setloading(true)
						setData([])
					}}
					className="mfone__dog-links"
				>
					More Doggos
				</button>
			</div>
		</React.Fragment>
	)
}

// export default DogsImages
