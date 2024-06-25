import { forwardRef } from 'react'
import styles from './CustomInput.module.scss'

type Props = {
	type?: 'text'
	name?: string
	defaultValue?: string
	placeholder?: string
}

const CustomInput = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
	const { type = 'text', name, defaultValue, placeholder } = props

	return (
		<input
			type={type}
			name={name}
			ref={ref}
			defaultValue={defaultValue}
			placeholder={placeholder}
			className={styles.input}
		/>
	)
})
export default CustomInput
