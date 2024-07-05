import { Link } from 'react-router-dom'

function ContactBanner() {
    return (
        <div className="mx-8 mb-7 grid grid-cols-5 justify-items-center py-4">
            <img
                className="h-40"
                src="../../public/images/masis-logo.jpg"
                alt="masis general contractor logo"
            />

            <div>
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

            <div>
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

            <div>
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

            <div>
                <h3 className="font-semibold uppercase">Services</h3>
                <ul className="text-gray-600">
                    <li>Granite & Marble</li>
                    <li>Tile & Flooring</li>
                    <li>Kitchen Remodeling</li>
                    <li>Bathroom Remodeling</li>
                    <li>Commerical Cleaning</li>
                    <li>Residential Cleaning</li>
                </ul>
            </div>
        </div>
    )
}

export default ContactBanner
