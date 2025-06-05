import { Link } from 'react-router-dom'

function ContactBanner() {
    return (
        <div
            className="bg-masis-blue w-full bg-cover bg-center p-12 bg-blend-overlay lg:p-32"
            style={{
                backgroundImage:
                    "url('../public/images/footer-v2-pattern.png')",
            }}
        >
            {/* Use a responsive grid: 1 column on very small screens, 2 columns on small screens, 4 columns on large */}
            <div className="grid grid-cols-1 gap-8 text-[16px] text-gray-300 sm:grid-cols-2 lg:grid-cols-4">
                {/* Our Services */}
                <div className="text-left">
                    <h3 className="mb-2 text-[24px] font-semibold text-white">
                        Our Services
                    </h3>
                    <span className="border-masis-orange mb-8 block w-32 border-t-2 border-dotted"></span>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                            Roofing
                        </li>
                        <li className="flex items-center gap-2">
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                            Flooring
                        </li>
                        <li className="flex items-center gap-2">
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                            Painting
                        </li>
                        <li className="flex items-center gap-2">
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                            Plumbing
                        </li>
                        <li className="flex items-center gap-2">
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                            Decks and Patios
                        </li>
                        <li className="flex items-center gap-2">
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                            Home Additions
                        </li>
                        <li className="flex items-center gap-2">
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                            And More...
                        </li>
                    </ul>
                </div>

                {/* Business Hours */}
                <div className="text-left">
                    <h3 className="mb-2 text-[24px] font-semibold text-white">
                        Business Hours
                    </h3>
                    <span className="border-masis-orange mb-8 block w-32 border-t-2 border-dotted"></span>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                            Monday 8:00 AM – 8:00 PM
                        </li>
                        <li className="flex items-center gap-2">
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                            Tuesday 8:00 AM – 8:00 PM
                        </li>
                        <li className="flex items-center gap-2">
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                            Wednesday 8:00 AM – 8:00 PM
                        </li>
                        <li className="flex items-center gap-2">
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                            Thursday 8:00 AM – 8:00 PM
                        </li>
                        <li className="flex items-center gap-2">
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                            Friday 8:00 AM – 8:00 PM
                        </li>
                        <li className="flex items-center gap-2">
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                            Saturday 8:00 AM – 8:00 PM
                        </li>
                        <li className="flex items-center gap-2">
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                            Sunday Closed
                        </li>
                    </ul>
                </div>

                {/* Useful Links */}
                <div className="text-left">
                    <h3 className="mb-2 text-[24px] font-semibold text-white">
                        Useful Links
                    </h3>
                    <span className="border-masis-orange mb-8 block w-32 border-t-2 border-dotted"></span>
                    <ul className="space-y-2">
                        <li className="hover:text-masis-orange flex items-center gap-2 transition-colors">
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:text-masis-orange flex items-center gap-2 transition-colors">
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                            <Link to="/services">Services</Link>
                        </li>
                        <li className="hover:text-masis-orange flex items-center gap-2 transition-colors">
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                            <Link to="/gallery">Gallery</Link>
                        </li>
                        <li className="hover:text-masis-orange flex items-center gap-2 transition-colors">
                            <i
                                className="fa fa-angle-right"
                                aria-hidden="true"
                            ></i>
                            <Link to="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div className="text-left">
                    <h3 className="mb-2 text-[24px] font-semibold text-white">
                        Contact Us
                    </h3>
                    <span className="border-masis-orange mb-8 block w-32 border-t-2 border-dotted"></span>
                    <a
                        href="tel:2065108575"
                        className="hover:text-masis-orange flex items-center gap-2 transition-colors"
                    >
                        <i
                            className="fa fa-phone text-masis-orange"
                            aria-hidden="true"
                        ></i>
                        206-510-8575
                    </a>
                    <a
                        href="mailto:masiscontractor@outlook.com"
                        className="hover:text-masis-orange mt-2 flex items-center gap-2 transition-colors"
                    >
                        <i
                            className="fa fa-envelope text-masis-orange"
                            aria-hidden="true"
                        ></i>
                        masiscontractor@outlook.com
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactBanner
