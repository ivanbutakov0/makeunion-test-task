import { TUser } from '../../types'
import styles from './UserCard.module.scss'

type Props = {
	user: TUser
	setSelectedUser: (user: TUser) => void
	openModal: () => void
}

const UserCard = ({ user, setSelectedUser, openModal }: Props) => {
	const handleClick = () => {
		setSelectedUser(user)
		openModal()
	}

	return (
		<li className={styles.card} onClick={handleClick}>
			<h3>{user.name}</h3>
			<p>
				<span className={styles.label}>username:</span> {user.email}
			</p>
			<p>
				<span className={styles.label}>phone:</span> {user.phone}
			</p>
			<p>
				<span className={styles.label}>website:</span> {user.website}
			</p>
		</li>
	)
}
export default UserCard
