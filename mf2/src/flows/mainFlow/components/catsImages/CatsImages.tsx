import React, { useEffect, useState } from 'react'
import { httpService } from 'dataValidation/httpService'
import { Link } from 'react-router-dom'
import './catsimages.css'

const URL_BASE = 'https://api.thecatapi.com/v1/images/search'

export const CatsImages = () => {
	const [data, setData] = useState<any[]>([])
	const [loading, setloading] = useState<boolean>()

	const fetchData = async () => {
		setloading(true)
		const response = await httpService.request({
			url: `${URL_BASE}?limit=10`,
			method: 'get',
			headers: { 'x-api-key': process.env.API_KEY_CATS }
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
			<div id="mftwo__images-box">
				{!loading ? (
					data.map((element, index) => {
						return (
							<img
								key={index}
								src={element.url}
								alt="I'am a cat."
								className="mftwo__cat-images"
							/>
						)
					})
				) : (
					<div id="mftwo__loading">Loading...</div>
				)}
			</div>
			<div id="mftwo__links-box">
				<Link to="/" className="mftwo__cat-links">
					Back to Home page
				</Link>
				<button
					onClick={() => {
						setloading(true)
						setData([])
					}}
					className="mftwo__cat-links"
				>
					More Cats
				</button>
			</div>
		</React.Fragment>
	)
}
