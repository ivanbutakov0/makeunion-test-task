import { Pencil, Trash2 } from 'lucide-react'
import { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { TTodo } from '../../'
import { CustomButton } from '../../../../components/ui/CustomButton'
import { CustomInput } from '../../../../components/ui/CustomInput'
import styles from './TodoListItem.module.scss'

type Props = {
	todo: TTodo
	todos: TTodo[]
	setTodos: (todos: TTodo[]) => void
}

const TodoListItem = ({ todo, todos, setTodos }: Props) => {
	const [isEditing, setIsEditing] = useState<boolean>(false)
	const inputRef = useRef<HTMLInputElement>(null)

	const handleEditClick = () => {
		setIsEditing(true)
	}

	const handleSaveClick = () => {
		if (!inputRef.current) {
			setIsEditing(false)
			return
		}

		const title = inputRef.current.value

		if (!title) {
			setIsEditing(false)
			return
		}

		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return { ...item, title }
				}
				return item
			})
		)

		setIsEditing(false)
		toast.success('Задача изменена')
	}

	const handleDeleteClick = () => {
		setTodos(todos.filter((item) => item.id !== todo.id))
		toast.success('Задача удалена')
	}

	const handleIsActiveChange = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return { ...item, isActive: !item.isActive }
				}
				return item
			})
		)
		toast.success('Статус задачи изменен')
	}

	return (
		<li className={styles.listItem}>
			{isEditing ? (
				<>
					<CustomInput defaultValue={todo.title} ref={inputRef} />
					<CustomButton type="button" onClick={handleSaveClick}>
						Сохранить
					</CustomButton>
				</>
			) : (
				<>
					<p
						className={`${styles.content} ${
							!todo.isActive ? styles.active : ''
						}`}
						onClick={handleIsActiveChange}
					>
						{todo.title}
					</p>
					<div className={styles.buttons}>
						<Pencil className={styles.pencilButton} onClick={handleEditClick} />
						<Trash2
							className={styles.trashButton}
							onClick={handleDeleteClick}
						/>
					</div>
				</>
			)}
		</li>
	)
}
export default TodoListItem
