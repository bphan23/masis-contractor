import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="fixed top-0 z-0 w-full border-b bg-white font-semibold text-gray-600 shadow-xl">
            <div className="flex content-center justify-between align-middle">
                <span className="text-masis-green mx-5 py-5 uppercase">
                    <Link to="/">
                        Masis
                        {/* <img
                            src="../../public/images/masis-logo.jpg"
                            alt="masis contractor logo"
                            className="z-10 h-24"
                        /> */}
                    </Link>
                </span>
                <ul className="flex flex-row justify-end">
                    <li className="mx-5 py-5 hover:text-orange-500 hover:underline">
                        <Link to="/">About</Link>
                    </li>

                    <li className="mx-5 py-5 hover:text-orange-500 hover:underline">
                        <Link to="/contractor">Contractor</Link>
                    </li>
                    <li className="mx-5 py-5 hover:text-orange-500 hover:underline">
                        <Link to="/cleaning">Cleaning</Link>
                    </li>
                    <li className="mx-5 py-5 hover:text-orange-500 hover:underline">
                        <Link to="/careers">Careers</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
