import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout/Layout'
import Profile from '../pages/Profile'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Profile />,
			},
		],
	},
])

export default router
