export const localStorageService = {
	setStorage: (key: string, value: object): void => {
		if (value) {
			localStorage.setItem(key, JSON.stringify(value))
		} else {
			localStorage.removeItem(key)
		}
	},

	getStorage: (key: string): any => {
		const data = localStorage.getItem(key)

		if (!data) {
			return null
		}

		return JSON.parse(data)
	}
}
