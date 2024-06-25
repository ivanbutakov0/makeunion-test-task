import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout/Layout'
import { Profile } from '../pages/profile'
import { TodoList } from '../pages/todo-list'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Profile />,
			},
			{
				path: '/todo',
				element: <TodoList />,
			},
		],
	},
])

export default router
