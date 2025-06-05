import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
    const [showMenu, setShowMenu] = useState(window.innerWidth >= 680)
    const location = useLocation()

    useEffect(() => {
        const handleResize = () => {
            setShowMenu(window.innerWidth >= 680)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const onToggleMenu = () => setShowMenu((prev) => !prev)
    const closeMenu = () => window.innerWidth < 680 && setShowMenu(false)
    const isActive = (path) => location.pathname === path

    return (
        <>
            <header className="fixed top-0 z-50 w-full bg-white text-gray-600 shadow-xl">
                <nav className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3 sm:px-8">
                    {/* Logo & Subtitle */}
                    <div className="flex flex-col items-start gap-1 sm:items-center">
                        <Link to="/" onClick={closeMenu}>
                            <img
                                src="../public/images/masis-little-logo.png"
                                alt="masis logo"
                                className="mb-1 w-36"
                            />
                        </Link>
                        <div className="bg-masis-orange rounded px-3 py-1 font-thin text-white">
                            <h2 className="text-sm uppercase">
                                General Contractor
                            </h2>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-10 font-semibold text-gray-600 sm:flex">
                        <Link
                            to="/"
                            className={`text-sm uppercase ${
                                isActive('/')
                                    ? 'text-masis-orange'
                                    : 'hover:text-masis-orange'
                            }`}
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                        <Link
                            to="/services"
                            className={`text-sm uppercase ${
                                isActive('/services')
                                    ? 'text-masis-orange'
                                    : 'hover:text-masis-orange'
                            }`}
                            onClick={closeMenu}
                        >
                            Services
                        </Link>
                        <Link
                            to="/gallery"
                            className={`text-sm uppercase ${
                                isActive('/gallery')
                                    ? 'text-masis-orange'
                                    : 'hover:text-masis-orange'
                            }`}
                            onClick={closeMenu}
                        >
                            Gallery
                        </Link>
                        <Link
                            to="/contact-us"
                            className={`text-sm uppercase ${
                                isActive('/contact-us')
                                    ? 'text-masis-orange'
                                    : 'hover:text-masis-orange'
                            }`}
                            onClick={closeMenu}
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Hamburger Icon (Mobile Only) */}
                    <div className="pr-2 sm:hidden">
                        <ion-icon
                            onClick={onToggleMenu}
                            class="cursor-pointer text-4xl"
                            name={showMenu ? 'close' : 'menu'}
                        ></ion-icon>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu */}
            {showMenu && window.innerWidth < 640 && (
                <>
                    <div
                        onClick={onToggleMenu}
                        className="fixed inset-0 z-40 bg-black bg-opacity-30 backdrop-blur-sm"
                    />
                    <div
                        className="fixed right-0 top-0 z-50 flex h-full w-64 flex-col gap-8 bg-white px-6 py-8 text-left font-semibold text-gray-600"
                        style={{
                            transform: showMenu
                                ? 'translateX(0)'
                                : 'translateX(100%)',
                            transition: 'transform 0.3s ease-in-out',
                        }}
                    >
                        <Link
                            to="/"
                            onClick={onToggleMenu}
                            className={isActive('/') ? 'text-masis-orange' : ''}
                        >
                            Home
                        </Link>
                        <Link
                            to="/services"
                            onClick={onToggleMenu}
                            className={
                                isActive('/services') ? 'text-masis-orange' : ''
                            }
                        >
                            Services
                        </Link>
                        <Link
                            to="/gallery"
                            onClick={onToggleMenu}
                            className={
                                isActive('/gallery') ? 'text-masis-orange' : ''
                            }
                        >
                            Gallery
                        </Link>
                        <Link
                            to="/contact-us"
                            onClick={onToggleMenu}
                            className={
                                isActive('/contact-us')
                                    ? 'text-masis-orange'
                                    : ''
                            }
                        >
                            Contact Us
                        </Link>
                    </div>
                </>
            )}
        </>
    )
}

export default Header
