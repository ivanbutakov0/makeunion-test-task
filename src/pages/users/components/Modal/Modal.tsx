import { CustomButton } from '../../../../components/ui/CustomButton'
import { TUser } from '../../types'
import styles from './Modal.module.scss'

type Props = {
	selectedUser: TUser
	onClose: () => void
}

const Modal = ({ selectedUser, onClose }: Props) => {
	const handleClose = () => {
		onClose()
	}

	return (
		<dialog className={styles.dialog}>
			<div className={styles.content}>
				<h3 className={styles.title}>{selectedUser?.name}</h3>
				<p>
					<span className={styles.label}>username:</span>{' '}
					{selectedUser?.username}
				</p>
				<p>
					<span className={styles.label}>email:</span> {selectedUser?.email}
				</p>
				<p>
					<span className={styles.label}>phone:</span> {selectedUser?.phone}
				</p>
				<p>
					<span className={styles.label}>website:</span> {selectedUser?.website}
				</p>
				<h4 className={styles.title}>Address</h4>
				<p>
					<span className={styles.label}>city:</span>{' '}
					{selectedUser?.address.city}
				</p>
				<p>
					<span className={styles.label}>street:</span>{' '}
					{selectedUser?.address.street}
				</p>
				<p>
					<span className={styles.label}>suite:</span>{' '}
					{selectedUser?.address.suite}
				</p>
				<p>
					<span className={styles.label}>zipcode:</span>{' '}
					{selectedUser?.address.zipcode}
				</p>
				<h4 className={styles.title}>Company</h4>
				<p>
					<span className={styles.label}>bs:</span> {selectedUser?.company.bs}
				</p>
				<p>
					<span className={styles.label}>catchPhrase:</span>{' '}
					{selectedUser?.company.catchPhrase}
				</p>
				<p>
					<span className={styles.label}>company name:</span>{' '}
					{selectedUser?.company.name}
				</p>
				<CustomButton type="button" onClick={handleClose}>
					Close
				</CustomButton>
			</div>
		</dialog>
	)
}
export default Modal
