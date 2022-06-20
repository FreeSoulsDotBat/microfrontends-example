import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { NotificationsEnum } from '../../enums/NotificationsEnum'
import { FaCheck } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

export interface ChangePasswordFormProps {
	callback: (password: string, confirmPassword: string) => void
}

export interface PasswordValidationsProps {
	[key: string]: { test: RegExp; status: boolean; message: string }
}

const ChangePasswordForm: FC<ChangePasswordFormProps> = ({ callback }) => {
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [passwordValidations, setPasswordValidations] =
		useState<PasswordValidationsProps>({
			minLength: {
				test: /^.{9,30}$/,
				status: false,
				message: 'Tamanho mínimo de 9 caracteres'
			},
			oneLetter: {
				test: /^(?=.*[a-zA-Z])/,
				status: false,
				message: 'Pelo menos 1 letra'
			},
			oneDigit: {
				test: /^(?=.*[0-9])/,
				status: false,
				message: 'Pelo menos 1 número'
			},
			upperAndLowerCase: {
				test: /[a-z].*[A-Z]|[A-Z].*[a-z]/,
				status: false,
				message: 'Letras maísculas e minúsculas'
			},
			specialCharacter: {
				test: /^(?=.*[!@#$%^&*])/,
				status: false,
				message: 'No mínimo 1 caractere especial'
			}
		})

	const handlePasswordStatus = () => {
		return !Object.keys(passwordValidations).some(
			(value) => passwordValidations[value].status === false
		)
	}

	// const statusClasses = classNames(
	// 	'changePage__form__status',
	// 	`changePage__form__status--${
	// 		handlePasswordStatus()
	// 			? NotificationsEnum.Info
	// 			: NotificationsEnum.Invalid
	// 	}`
	// )

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault()
		callback(password, confirmPassword)
	}

	const handleValidation = (event: ChangeEvent<HTMLInputElement>) => {
		const passwordValue = event.target.value
		setPassword(passwordValue)
		for (const key in passwordValidations) {
			const regexp = new RegExp(passwordValidations[key].test)
			const testRegexp = regexp.test(passwordValue)
			setPasswordValidations((oldValues) => ({
				...oldValues,
				[key]: {
					test: passwordValidations[key].test,
					message: passwordValidations[key].message,
					status: testRegexp
				}
			}))
		}
	}

	return (
		<form className="changePage__form" onSubmit={handleSubmit}>
			<div className="changePage__form__field">
				<label htmlFor="password">Informe sua nova senha</label>
				<input
					type="password"
					id="password"
					required={true}
					disabled={false}
					value={password}
					onChange={handleValidation}
				></input>
			</div>
			<div className="changePage__form__field">
				<label htmlFor="confirmPassword">Confirme nova senha</label>
				<input
					type="password"
					id="confirmPassword"
					pattern={password}
					required={true}
					disabled={false}
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				></input>
			</div>
			<div className="changePage__form__status changePage__form__status--success">
				<h2>Sua nova senha deve conter</h2>
				<ul>
					{Object.keys(passwordValidations).map((validations, i) => (
						<li key={i}>
							{passwordValidations[validations].status ? (
								<FaCheck />
							) : (
								<AiOutlineClose size={15} />
							)}
							{passwordValidations[validations].message}
						</li>
					))}
				</ul>
			</div>
			<div className="changePage__form__button">
				<button onSubmit={handleSubmit}>Confirmar</button>
			</div>
		</form>
	)
}

export default ChangePasswordForm
