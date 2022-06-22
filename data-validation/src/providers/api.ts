import axios from 'axios'

export const Api = axios.create({
	headers: {
		Accept: 'application/json',
		'X-Content-Type-Options': 'nosniff',
		'Content-Type': 'application/json',
		'X-Frame-Options': 'SAMEORIGIN',
		'Referrer-Policy': 'no-referrer-when-downgrade',
		'Strict-Transport-Security': 'max-age=1'
	}
})
