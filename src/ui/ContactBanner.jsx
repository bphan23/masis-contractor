import { Link } from 'react-router-dom'

function ContactBanner() {
    return (
        <div className="bg-white p-12 lg:p-20">
            <div className="flex flex-col bg-white text-sm xl:flex-row xl:justify-between">
                <div className="flex justify-center">
                    <img
                        className="xl:h-50 h-40"
                        src="images/masis-logo.jpg"
                        alt="masis general contractor logo"
                    />
                </div>
                <div className="flex flex-col bg-white text-center lg:flex-row lg:gap-x-10 lg:p-5 lg:text-left">
                    <div className="mb-5 mt-5 lg:mb-0 lg:mt-0">
                        <h3 className="mb-2 text-sm font-semibold uppercase">
                            Contact Us
                        </h3>
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

                    <div className="mb-5 lg:mb-0">
                        <h3 className="mb-2 font-semibold uppercase">
                            Business Hours
                        </h3>
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

                    <div className="mb-5 lg:mb-0">
                        <h3 className="mb-2 font-semibold uppercase">
                            Quick Links
                        </h3>
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

                    <div className="mb-5 lg:mb-0">
                        <h3 className="mb-2 font-semibold uppercase">
                            Services
                        </h3>
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
            </div>
        </div>
    )
}

export default ContactBanner
