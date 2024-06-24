import styles from './CustomButton.module.scss'

type Props = {
	type: 'button' | 'reset' | 'submit'
	onClick?: () => void
	children: React.ReactNode
}

const CustomButton = ({ type = 'button', onClick, children }: Props) => {
	return (
		<button type={type} className={styles.button} onClick={onClick}>
			{children}
		</button>
	)
}
export default CustomButton
