import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const [showMenu, setShowMenu] = useState(true)
    const [hamburgerMenu, setHamburgerMenu] = useState('menu')

    // if window screen is 640px (sm) or bigger --> always display nav links
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 640) {
            setShowMenu(true)
            setHamburgerMenu('menu')
        } else {
            setShowMenu(false)
            setHamburgerMenu('menu')
        }
    })

    function onToggleMenu() {
        // set icon to close or menu (open)
        let iconElement = document.getElementById('icon')
        if (iconElement.name === 'menu') {
            iconElement.name = 'close'
            setShowMenu(true)
        } else {
            iconElement.name = 'menu'
            setShowMenu(false)
        }
    }

    return (
        <header className="fixed top-0 w-full bg-white font-semibold text-gray-600">
            <nav className="z-50 flex min-h-[70px] items-center justify-between border uppercase shadow-xl">
                <div className="text-md ml-10 flex text-masis-green">
                    <Link to="/">Masis</Link>
                </div>
                <div
                    className={
                        showMenu
                            ? 'absolute left-0 top-[70px] z-50 flex min-h-[30vh] w-full items-center bg-white px-5 duration-500 sm:static sm:min-h-fit sm:w-auto'
                            : 'hidden'
                    }
                >
                    <ul
                        className={
                            showMenu
                                ? 'flex flex-col gap-8 text-sm sm:flex-row sm:items-center sm:gap-[4vw]'
                                : 'hidden text-sm'
                        }
                    >
                        <li className="mt-5 hover:text-orange-500 hover:underline sm:mt-0">
                            <Link to="/">About</Link>
                        </li>

                        <li className="hover:text-orange-500 hover:underline">
                            <Link to="/contractor">Contractor</Link>
                        </li>
                        <li className="hover:text-orange-500 hover:underline">
                            <Link to="/cleaning">Cleaning</Link>
                        </li>
                        <li className="mb-5 hover:text-orange-500 hover:underline sm:mb-0 sm:mr-10">
                            <Link to="/careers">Careers</Link>
                        </li>
                    </ul>
                </div>
                {/* hamburger menu */}
                <div className="mr-10 flex items-center justify-end sm:hidden">
                    <ion-icon
                        id="icon"
                        onClick={onToggleMenu}
                        class="cursor-pointer text-4xl"
                        name={hamburgerMenu}
                    ></ion-icon>
                </div>
            </nav>
        </header>
    )
}

export default Header
