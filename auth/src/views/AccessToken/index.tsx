import React, { useEffect, useState } from 'react'
import './styles.scss'
import { useNavigate } from 'react-router-dom'
import { SendToken } from '../../services/SendToken'
import Notifications from '../../components/Notification'
import { NotificationsEnum } from '../../enums/NotificationsEnum'

const AccessToken = () => {
	const navigate = useNavigate()
	const [token, setToken] = useState('')
	const [invalidToken, setInvalidToken] = useState(false)

	const handleBack = () => {
		navigate('/authentication')
	}

	const handleConfirmToken = async () => {
		const response = await SendToken()
		console.log({ token, response })
		setInvalidToken(true)
	}

	const handleSendToken = async () => {
		const response = await SendToken()
		console.log({ token, response })
		setInvalidToken(false)
		setToken('')
	}

	useEffect(() => {
		handleSendToken()
	}, [])

	return (
		<div className="tokenPage">
			<div className="tokenPage__title">Token de Acesso</div>
			<div className="tokenPage__inputText">
				Digite abaixo o token recebido no e-mail para acessar o sistema
			</div>
			{invalidToken && (
				<Notifications
					message="Token inválido"
					variant={NotificationsEnum.Invalid}
				></Notifications>
			)}
			<div className="tokenPage__input">
				<input
					type="text"
					maxLength={6}
					size={6}
					value={token}
					onChange={(e) => setToken(e.target.value.toUpperCase())}
				></input>
			</div>
			<div className="tokenPage__buttons">
				<button onClick={handleBack}>Voltar</button>
				<button onClick={handleConfirmToken}>Confirmar</button>
			</div>
			<div className="tokenPage__info">
				Caso não tenha recebido o token, clique abaixo para enviarmos
				novamente:
			</div>
			<div className="tokenPage__buttons">
				<button onClick={handleSendToken}>
					Enviar token novamente
				</button>
			</div>
		</div>
	)
}

export default AccessToken
