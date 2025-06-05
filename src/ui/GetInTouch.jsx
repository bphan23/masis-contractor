import { Link } from 'react-router-dom'

function GetInTouch() {
    return (
        <div className="w-full overflow-hidden">
            <div className="flex h-auto w-full flex-col md:h-64 md:flex-row">
                {/* Logo Section */}
                <div className="flex min-w-0 items-center justify-center bg-white p-8 md:w-1/3 md:p-0">
                    <img
                        src="../public/images/masis-logo.png"
                        alt="masis logo"
                        className="h-20 w-auto md:h-32"
                    />
                </div>

                {/* Call-to-Action Section */}
                <div className="bg-masis-orange flex min-w-0 flex-col items-center justify-center gap-6 px-8 py-12 md:w-2/3 md:flex-row md:justify-between md:px-20 md:py-0">
                    <h3 className="text-center text-3xl font-extrabold leading-snug text-white md:text-left md:text-4xl">
                        Get In Touch Today
                    </h3>

                    <Link
                        to="/contact-us"
                        className="text-masis-orange rounded bg-white px-10 py-4 text-sm uppercase shadow transition hover:bg-black hover:text-white"
                    >
                        Contact Us
                        <span className="ml-2">↗</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch
