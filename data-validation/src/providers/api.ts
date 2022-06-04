import axios from 'axios'

export const Api = axios.create({
	baseURL: 'https://reqres.in/api',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		'X-Frame-Options': 'SAMEORIGIN',
		'X-Content-Type-Options': 'nosniff',
		'Referrer-Policy': 'no-referrer-when-downgrade',
		'Strict-Transport-Security': 'max-age=1'
	}
})
