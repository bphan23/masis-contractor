import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './pages/About'
import Cleaning from './pages/Cleaning'
import Careers from './pages/Careers'
import AppLayout from './ui/AppLayout'
import Contractor from './pages/Contractor'

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <About />,
            },
            {
                path: '/contractor',
                element: <Contractor />,
            },
            {
                path: '/cleaning',
                element: <Cleaning />,
            },

            {
                path: '/careers',
                element: <Careers />,
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
