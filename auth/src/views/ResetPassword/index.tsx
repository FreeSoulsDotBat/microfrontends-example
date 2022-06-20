import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Notifications from '../../components/Notification'
import ResetPasswordForm from '../../components/ResetPasswordForm'
import { NotificationsEnum } from '../../enums/NotificationsEnum'
import { ResetPasswordRequest } from '../../services/ResetPassword'
import './styles.scss'

const ResetPassword = () => {
	const navigate = useNavigate()
	const [notifications, setNotifications] =
		useState<NotificationsEnum | null>(null)

	const messagesProps: { [key: string]: string } = {
		success:
			'O procedimento para recuperação de senha foi enviado para o endereço de e-mail fornecido.',
		invalid: 'Preencha o formulário corretamente!',
		info: 'Enviando informações, aguarde...'
	}

	const handleSubmit = async (email: string) => {
		setNotifications(NotificationsEnum.Info)
		const response = await ResetPasswordRequest()
		if (response?.token) {
			setNotifications(NotificationsEnum.Success)
			navigate('')
		} else {
			setNotifications(NotificationsEnum.Invalid)
		}
		console.log(email, response)
	}

	return (
		<div className="resetPage">
			<div className="resetPage__title">Identifique-se</div>

			{notifications && (
				<Notifications
					message={messagesProps[notifications]}
					variant={notifications}
				></Notifications>
			)}
			<ResetPasswordForm callback={handleSubmit}></ResetPasswordForm>
		</div>
	)
}

export default ResetPassword
