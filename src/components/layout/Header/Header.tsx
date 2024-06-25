import { CustomLink } from '../../ui/CustomLink'
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>MakeUnion</h1>

			<nav>
				<ul className={styles.list}>
					<li className={styles.listItem}>
						<CustomLink to="/todo">ToDo list</CustomLink>
					</li>
					<li className={styles.listItem}>
						<CustomLink to="/users">Users</CustomLink>
					</li>
					<li className={styles.listItem}>
						<CustomLink to="/" type="button">
							My Profile
						</CustomLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}
export default Header
