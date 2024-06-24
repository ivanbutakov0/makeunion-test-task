import { Link } from 'react-router-dom'
import styles from './CustomLink.module.scss'

type Props = {
	type?: 'button' | 'outline'
	to: string
	children: React.ReactNode
}

const CustomLink = ({ type = 'outline', to, children }: Props) => {
	return (
		<Link to={to} className={`${styles.link} ${styles[type]}`}>
			{children}
		</Link>
	)
}
export default CustomLink
