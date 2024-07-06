import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ContactBanner from './ContactBanner'

function AppLayout() {
    let selectOptions = {
        'Please Select': 'none',
        'Home Additions': 'home-additions',
        'Kitchen Remodeling': 'kitchen-remodel',
        'Bathroom Remodeling': 'bathroom-remodel',
        Roofing: 'roofing',
        Capentry: 'carpentry',
        Decks: 'decks',
        Flooring: 'flooring',
        'Custom Remodeling': 'custom-remodel',
        Tiles: 'tiles',
        'Wall Moving & Enlarging Doors': 'wall-moving-and-enlarging-doors',
        'Other Job': 'other-job',
    }

    return (
        <div className="grid h-screen grid-rows-[1fr_auto]">
            <Header />
            <main className="mt-16">
                {/* allows us to see children of app layout which is the pages */}
                <Outlet context={selectOptions} />
            </main>

            <ContactBanner />
            <Footer />
        </div>
    )
}

export default AppLayout
