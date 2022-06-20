import React from 'react'
import ChangePasswordForm from '../../components/ChangePasswordForm'
import './styles.scss'
import { useNavigate } from 'react-router-dom'
import { ParamsEnum } from '../../enums/ParamsEnum'
import { NotificationsEnum } from '../../enums/NotificationsEnum'
import { ChangePasswordRequest } from '../../services/ChangePasswordRequest'

const ChangePassword = () => {
	const navigate = useNavigate()

	const handleSubmit = async (password: string, confirmPassword: string) => {
		console.log(password, confirmPassword)
		const response = await ChangePasswordRequest(password, confirmPassword)
		if (response) {
			navigate(
				`/authentication?${ParamsEnum.Notification}=${NotificationsEnum.Success}`
			)
		}
	}

	return (
		<div className="changePage">
			<div className="changePage__title">Alteração de Senha</div>
			<ChangePasswordForm callback={handleSubmit}></ChangePasswordForm>
		</div>
	)
}

export default ChangePassword
