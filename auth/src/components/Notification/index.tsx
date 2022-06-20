import React, { FC } from 'react'
import './styles.scss'
import { NotificationsEnum } from '../../enums/NotificationsEnum'

export interface NotificationsProps {
	message: string
	variant: NotificationsEnum
}

const Notifications: FC<NotificationsProps> = ({ message, variant }) => {
	return <div className="notification--success">{message}</div>
}

export default Notifications
