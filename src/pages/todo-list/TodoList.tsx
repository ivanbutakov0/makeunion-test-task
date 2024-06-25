import { useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { CustomButton } from '../../components/ui/CustomButton'
import { CustomInput } from '../../components/ui/CustomInput'
import { TTodo } from './'
import { TodoListItem } from './components/TodoListItem'
import styles from './TodoList.module.scss'

const data: TTodo[] = [
	{
		id: 0,
		title: 'first todo',
		isActive: true,
	},
	{
		id: 1,
		title: 'second todo',
		isActive: true,
	},
	{
		id: 2,
		title: 'third todo',
		isActive: true,
	},
]

const TodoList = () => {
	const [todos, setTodos] = useState<TTodo[]>(data)
	const inputRef = useRef<HTMLInputElement>(null)

	const handleAddTodo = () => {
		if (!inputRef.current) {
			console.log('error inputRef.current is null')
			return
		}

		const title = inputRef.current.value

		if (!title) {
			toast.error('Поле не может быть пустым')
			return
		}

		setTodos([
			...todos,
			{
				id: todos.length,
				title: title,
				isActive: true,
			},
		])

		toast.success('Задача добавлена')
		inputRef.current.value = ''
	}

	return (
		<section className={styles.todo}>
			<h1 className={styles.title}>Todo List</h1>

			<div className={styles.inputContainer}>
				<CustomInput placeholder="add todo" ref={inputRef} />
				<CustomButton type="button" onClick={handleAddTodo}>
					Создать
				</CustomButton>
			</div>

			<ul className={styles.list}>
				{todos.map((todo, index) => (
					<TodoListItem
						key={index}
						todo={todo}
						todos={todos}
						setTodos={setTodos}
					/>
				))}
			</ul>
		</section>
	)
}
export default TodoList
