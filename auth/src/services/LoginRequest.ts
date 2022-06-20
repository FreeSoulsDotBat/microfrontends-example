import { httpService } from 'dataValidation/httpService'
import { User } from '../interfaces/User'

export async function LoginRequest({
	email,
	password
}: User): Promise<{ token: string } | null> {
	try {
		const request = await httpService.request({
			url: '/login',
			method: 'post',
			body: { email, password }
		})
		return request.body
	} catch (error) {
		return null
	}
}
