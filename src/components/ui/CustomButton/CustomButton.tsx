import styles from './CustomButton.module.scss'

type Props = {
	type: 'button' | 'reset' | 'submit'
	children: React.ReactNode
}

const CustomButton = ({ type = 'button', children }: Props) => {
	return (
		<button type={type} className={styles.button}>
			{children}
		</button>
	)
}
export default CustomButton
