import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ContactBanner from './ContactBanner'

function AppLayout() {
    return (
        <div className="grid h-screen grid-rows-[1fr_auto]">
            <div className="">
                <Header />
                <main className="mt-16">
                    {/* allows us to see children of app layout which is the pages */}
                    <Outlet />
                </main>
            </div>
            <ContactBanner />
            <Footer />
        </div>
    )
}

export default AppLayout
