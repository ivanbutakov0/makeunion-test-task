import { useRef, useState } from 'react'
import { CustomButton } from '../../components/ui/CustomButton'
import styles from './Profile.module.scss'

type TUserData = {
	name: string
	bio: string
	contacts: string
}

const userData: TUserData = {
	name: 'John',
	bio: "At the end of the day, we're going to make this a long bio that will not fit on one line. It's going to be a little longer than that.",
	contacts: '+7 (999) 999-99-99',
}

const Profile = () => {
	const [isNameEditing, setIsNameEditing] = useState<boolean>(false)
	const [isBioEditing, setIsBioEditing] = useState<boolean>(false)
	const [isContactsEditing, setIsContactsEditing] = useState<boolean>(false)

	const nameRef = useRef<HTMLInputElement>(null)
	const bioRef = useRef<HTMLTextAreaElement>(null)
	const contactsRef = useRef<HTMLInputElement>(null)

	const handleItemClick = (item: 'name' | 'bio' | 'contacts') => {
		if (isNameEditing || isBioEditing || isContactsEditing) return

		switch (item) {
			case 'name':
				setIsNameEditing((prev) => !prev)
				break
			case 'bio':
				setIsBioEditing((prev) => !prev)
				break
			case 'contacts':
				setIsContactsEditing((prev) => !prev)
				break
		}
	}

	const changeUserData = (item: 'name' | 'bio' | 'contacts') => {
		switch (item) {
			case 'name':
				const name = nameRef?.current?.value

				if (name) {
					userData.name = name
				}

				break
			case 'bio':
				const bio = bioRef?.current?.value

				if (bio) {
					userData.bio = bio
				}

				break

			case 'contacts':
				const contacts = contactsRef?.current?.value

				if (contacts) {
					userData.contacts = contacts
				}

				break
		}
	}

	const handleDataSubmit = (item: 'name' | 'bio' | 'contacts') => {
		changeUserData(item)

		setIsNameEditing(false)
		setIsBioEditing(false)
		setIsContactsEditing(false)
	}

	return (
		<section className={styles.profile}>
			<h1 className={styles.title}>Профиль</h1>
			<img
				className={styles.image}
				src="/profile-image.png"
				alt="profile image"
				draggable="false"
			/>
			<form className={styles.content}>
				<div>
					<h2 className={styles.title}>Имя пользователя</h2>
					{isNameEditing ? (
						<div className={styles.inputContainer}>
							<input
								type="text"
								name="name"
								ref={nameRef}
								defaultValue={userData.name}
								className={styles.input}
							/>
							<CustomButton
								type="button"
								onClick={() => handleDataSubmit('name')}
							>
								Сохранить
							</CustomButton>
						</div>
					) : (
						<p
							className={styles.contactItem}
							onClick={() => handleItemClick('name')}
						>
							{userData.name}
						</p>
					)}
				</div>
				<div>
					<h2 className={styles.title}>Биография</h2>
					{isBioEditing ? (
						<div className={styles.textareaContainer}>
							<textarea
								name="bio"
								defaultValue={userData.bio}
								ref={bioRef}
								className={styles.textarea}
							/>
							<CustomButton
								type="button"
								onClick={() => handleDataSubmit('name')}
							>
								Сохранить
							</CustomButton>
						</div>
					) : (
						<p
							className={`${styles.contactItem} ${styles.bio}`}
							onClick={() => handleItemClick('bio')}
						>
							{userData.bio}
						</p>
					)}
				</div>
				<div>
					<h2 className={styles.title}>Контактные данные</h2>
					{isContactsEditing ? (
						<div className={styles.inputContainer}>
							<input
								type="text"
								name="contacts"
								ref={contactsRef}
								defaultValue={userData.contacts}
								className={styles.input}
							/>
							<CustomButton
								type="button"
								onClick={() => handleDataSubmit('contacts')}
							>
								Сохранить
							</CustomButton>
						</div>
					) : (
						<p
							className={styles.contactItem}
							onClick={() => handleItemClick('contacts')}
						>
							{userData.contacts}
						</p>
					)}
				</div>
			</form>
		</section>
	)
}
export default Profile
