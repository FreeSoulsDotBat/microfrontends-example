import React, { FC, FormEvent, useState } from 'react'
import { User } from '../../interfaces/User'

export interface LoginFormProps {
	callback: (user: User) => void
}

const LoginForm: FC<LoginFormProps> = ({ callback }) => {
	const [email, setEmail] = useState('eve.holt@reqres.in')
	const [password, setPassword] = useState('cityslicka')

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault()
		callback({ email, password })
	}

	return (
		<form className="loginPage__form" onSubmit={handleSubmit}>
			<div className="loginPage__form__field">
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
			<div className="loginPage__form__field">
				<input
					type="password"
					id="password"
					placeholder="Senha"
					required={true}
					disabled={false}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				></input>
				<span>Senha inválida</span>
			</div>
			<div className="loginPage__form__button">
				<button>Entrar</button>
			</div>
		</form>
	)
}

export default LoginForm
