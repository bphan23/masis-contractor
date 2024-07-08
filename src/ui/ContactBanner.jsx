import { Link } from 'react-router-dom'

function ContactBanner() {
    return (
        <div
            className="mx-auto my-2 p-2 text-center lg:mx-8 lg:my-5 lg:grid lg:grid-cols-5 lg:justify-items-center lg:gap-x-5 lg:p-4 lg:text-left"
            data-aos="fade-up"
        >
            <img
                className="sm:h-30 mx-auto mb-2 h-20 lg:mx-0 lg:mb-0 lg:h-40"
                src="../../public/images/masis-logo.jpg"
                alt="masis general contractor logo"
            />

            <div className="mb-2 lg:mb-0">
                <h3 className="font-semibold uppercase">Contact Us</h3>
                <a className="text-gray-600" href="tel:2065108575">
                    206-510-8575
                </a>
                <a
                    className="block text-gray-600"
                    href="mailto:masiscleaning@outlook.com<"
                >
                    masiscleaning@outlook.com
                </a>
                <a
                    className="block text-gray-600"
                    href="mailto:masiscontractor@outlook.com"
                >
                    masiscontractor@outlook.com
                </a>
            </div>

            <div className="mb-2 lg:mb-0">
                <h3 className="font-semibold uppercase">Business Hours</h3>
                <ul className="text-gray-600">
                    <li>Monday 8:00 AM - 8:00 PM</li>
                    <li>Tuesday 8:00 AM - 8:00 PM</li>
                    <li>Wednesday 8:00 AM - 8:00 PM</li>
                    <li>Thursday 8:00 AM - 8:00 PM</li>
                    <li>Friday 8:00 AM - 8:00 PM</li>
                    <li>Saturday 8:00 AM - 8:00 PM</li>
                    <li>Sunday Closed</li>
                </ul>
            </div>

            <div className="mb-2 lg:mb-0">
                <h3 className="font-semibold uppercase">Quick Links</h3>
                <ul className="text-gray-600">
                    <li className="hover:text-orange-500 hover:underline">
                        <Link to="/">About</Link>
                    </li>
                    <li className="hover:text-orange-500 hover:underline">
                        <Link to="/contractor">Contractor</Link>
                    </li>
                    <li className="hover:text-orange-500 hover:underline">
                        <Link to="/cleaning">Cleaning</Link>
                    </li>
                    <li className="hover:text-orange-500 hover:underline">
                        <Link to="/careers">Careers</Link>
                    </li>
                </ul>
            </div>

            <div className="mb-4 lg:mb-0">
                <h3 className="font-semibold uppercase">Services</h3>
                <ul className="text-gray-600">
                    <li>Home Additions</li>
                    <li>Remodeling</li>
                    <li>Roofing & Decks</li>
                    <li>Wall Moving & Enlarging Doors</li>
                    <li>Flooring & Tiles</li>
                    <li>Much More...</li>
                </ul>
            </div>
        </div>
    )
}

export default ContactBanner
