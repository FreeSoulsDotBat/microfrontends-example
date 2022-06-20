export interface User {
	fullName?: string
	email?: string
	confirmEmail?: string
	password?: string
	landlinePhone?: string
	mobilePhone?: string
	birthdayDate?: Date | string
	[key: string]: any
}
