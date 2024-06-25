import { useEffect, useState } from 'react'
import { Modal } from './components/Modal'
import { UserCard } from './components/UserCard'
import { TUser } from './types'
import styles from './Users.module.scss'

const Users = () => {
	const [users, setUsers] = useState<TUser[]>([])
	const [selectedUser, setSelectedUser] = useState<TUser | null>(null)
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	const openModal = () => setIsModalOpen(true)
	const closeModal = () => setIsModalOpen(false)

	useEffect(() => {
		const fetchUsers = async () => {
			const response = await fetch('https://jsonplaceholder.typicode.com/users')
			const data = await response.json()
			setUsers(data)
		}

		fetchUsers()
	}, [])

	return (
		<section className={styles.users}>
			<h1 className={styles.title}>Users</h1>

			<ul className={styles.list}>
				{users.map((user) => {
					return (
						<UserCard
							key={user.id}
							user={user}
							setSelectedUser={setSelectedUser}
							openModal={openModal}
						/>
					)
				})}
			</ul>
			{isModalOpen && (
				<Modal onClose={closeModal} selectedUser={selectedUser as TUser} />
			)}
		</section>
	)
}
export default Users
