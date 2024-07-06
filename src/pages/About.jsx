import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
import { Link } from 'react-router-dom'
// ..
AOS.init()

function About() {
    return (
        <div className="flex flex-col lg:text-center">
            <h1 className="my-7 text-3xl font-semibold text-black">
                About Masis LLC
            </h1>

            <div>
                <img
                    className="mx-auto mb-2 h-[200px] lg:mb-7 lg:h-[500px]"
                    src="../../public/images/construction-1.jpg"
                    alt="construction 1"
                />
            </div>

            <div className="mx-10 lg:mx-80 lg:mb-5 lg:p-4" data-aos="flip-down">
                <p className="text text-xl">
                    Welcome to Masis Contractor LLC, your trusted partner for
                    all your construction and cleaning needs. We take pride in
                    offering top-quality services that ensure customer
                    satisfaction and exceed expectations. With years of
                    experience in the industry, we specialize in a wide range of
                    contracting services and also provide comprehensive cleaning
                    solutions for both commercial and residential spaces.
                </p>
            </div>

            <div className="bg-orange-500 p-4" data-aos="fade-right">
                <h2 className="mb-5 text-center text-2xl font-semibold">
                    Our Contracting Services
                </h2>
                <img
                    className="mx-auto mb-5 h-[150px]"
                    src="../../public/images/builder.png"
                    alt="builder"
                />
                <p className="text mb-5 text-xl">
                    At Masis Contractor LLC, we offer a variety of contracting
                    services designed to enhance and transform your living and
                    working spaces.
                </p>

                <p className="text mb-5 text-xl">
                    Please check out our contractor page for more details!
                </p>
            </div>

            <div className="bg-masis-green p-4" data-aos="fade-left">
                <h2 className="mb-5 text-center text-2xl font-semibold">
                    Our Cleaning Services
                </h2>
                <img
                    className="mx-auto mb-5 h-[150px]"
                    src="../../public/images/cleaning.png"
                    alt="cleaning"
                />
                <p className="text mb-5 text-xl">
                    In addition to our exceptional contracting services, we
                    offer a comprehensive range of cleaning services through our
                    dedicated cleaning subsection. Our cleaning services ensure
                    a clean, healthy, and welcoming environment for both
                    residential and commercial clients.
                </p>
                <p className="text mb-5 text-xl">
                    Please check out our cleaning page for more details!
                </p>
            </div>
        </div>
    )
}

export default About
