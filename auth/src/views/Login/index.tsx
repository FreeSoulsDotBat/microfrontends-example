import React, { useEffect, useState } from 'react'
import './styles.scss'
import { LoginRequest } from '../../services/LoginRequest'
import { localStorageService } from 'dataValidation/localStorageService'
import { useNavigate, Link, useSearchParams } from 'react-router-dom'
import LoginForm from '../../components/LoginForm'
import { User } from '../../interfaces/User'
import { NotificationsEnum } from '../../enums/NotificationsEnum'
import { ParamsEnum } from '../../enums/ParamsEnum'
import Notifications from '../../components/Notification'

const Login = () => {
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()
	const [notifications, setNotifications] =
		useState<NotificationsEnum | null>(null)

	const messagesProps: { [key: string]: string } = {
		success: 'Senha alterada com sucesso!',
		invalid: 'Login e/ou senha inválidos!'
	}

	useEffect(() => {
		setNotifications(
			searchParams.get(ParamsEnum.Notification) ===
				NotificationsEnum.Success
				? NotificationsEnum.Success
				: null
		)
	}, [])

	const handleSubmit = async ({ email, password }: User) => {
		const request = await LoginRequest({ email, password })
		if (request?.token) {
			localStorageService.setStorage('token', request.token)
			navigate('/authentication/access-token')
		}
	}

	return (
		<div className="loginPage">
			<div className="loginPage__title">Identifique-se</div>
			{notifications && (
				<Notifications
					message={messagesProps[notifications]}
					variant={notifications}
				></Notifications>
			)}
			<LoginForm callback={handleSubmit}></LoginForm>
			<Link className="loginPage__link" to={'/reset-password'}>
				Esqueci minha senha.
			</Link>
		</div>
	)
}

export default Login
