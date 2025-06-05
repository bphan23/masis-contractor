import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ContactBanner from './ContactBanner'

function AppLayout() {
    let selectOptions = {
        'Please Select': 'none',
        Roofing: 'roofing',
        Flooring: 'flooring',
        Painting: 'painting',
        Plumbing: 'plumbing',
        'Decks and Patios': 'decks-and-patios',
        'Home Additions': 'home-additions',
        'Other Job': 'other-job',
    }

    return (
        <div className="grid h-screen grid-rows-[1fr_auto]">
            <Header />
            <main className="mt-20 sm:mt-16">
                {/* allows us to see children of app layout which is the pages */}
                <Outlet context={selectOptions} />
            </main>

            <ContactBanner />
            <Footer />
        </div>
    )
}

export default AppLayout
