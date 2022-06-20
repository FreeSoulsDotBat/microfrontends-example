import { httpService } from 'dataValidation/httpService'

export async function ResetPasswordRequest(): Promise<{
	token: string
} | null> {
	try {
		const request = await httpService.request({
			url: '/login',
			method: 'post',
			body: { email: 'eve.holt@reqres.in', password: 'cityslicka' }
		})
		return request.body
	} catch (error) {
		return null
	}
}
