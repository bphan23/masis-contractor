import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import AppLayout from './ui/AppLayout'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import ContactUs from './pages/ContactUs'

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/services',
                element: <Services />,
            },
            {
                path: '/gallery',
                element: <Gallery />,
            },
            {
                path: '/contact-us',
                element: <ContactUs />,
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
