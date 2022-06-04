import { HttpMethod, HttpRequest, HttpResponse } from '../../protocols/http'

import axios, { AxiosResponse } from 'axios'

import { Api } from '../../providers/api'

export const httpService = {
	request: async (data: HttpRequest): Promise<HttpResponse> => {
		const defaultMethod: HttpMethod = 'get'
		const controller = new AbortController()

		let axiosResponse: AxiosResponse

		setTimeout(() => {
			controller.abort()
		}, 30000)

		try {
			axiosResponse = await Api.request({
				url: data.url,
				method: data.method ? data.method : defaultMethod,
				data: data.body,
				headers: data.headers,
				signal: controller.signal
			})
		} catch (error: unknown) {
			return {
				error: `Erro na requisição: ${error}`
			}
		}
		return {
			statusCode: axiosResponse?.status,
			body: axiosResponse?.data
		}
	}
}
