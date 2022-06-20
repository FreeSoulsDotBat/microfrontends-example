import React, { FC, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export interface ResetPasswordFormProps {
	callback: (email: string) => void
}

const ResetPasswordForm: FC<ResetPasswordFormProps> = ({ callback }) => {
	const navigate = useNavigate()
	const [email, setEmail] = useState('eve.holt@reqres.in')

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault()
		callback(email)
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="resetPage__input">
				<input
					type="email"
					id="email"
					placeholder="E-mail"
					required={true}
					disabled={false}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				></input>
				<span>E-mail inválido</span>
			</div>
			<div className="resetPage__buttons">
				<button onClick={() => navigate('/authentication')}>
					Voltar para o login
				</button>
				<button onSubmit={handleSubmit}>Enviar</button>
			</div>
		</form>
	)
}

export default ResetPasswordForm
