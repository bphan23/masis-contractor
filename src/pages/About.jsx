import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

AOS.init()

function About() {
    return (
        <div className="m-0 flex flex-col text-center">
            <h1 className="my-2 font-semibold md:my-7 md:text-xl lg:my-7 lg:text-2xl xl:text-3xl">
                About Masis LLC
            </h1>

            <div>
                <img
                    className="mx-auto mb-2 h-[100px] sm:h-[200px] md:h-[350px] lg:mb-7 lg:h-[500px] 2xl:h-[600px]"
                    src="images/construction-1.jpg"
                    alt="construction 1"
                />
            </div>

            <div className="mx-10 lg:mx-80 lg:mb-5 lg:p-4">
                <p className="mb-2 lg:mb-5">
                    Welcome to Masis Contractor LLC, your trusted partner for
                    all your construction and cleaning needs. We take pride in
                    offering top-quality services that ensure customer
                    satisfaction and exceed expectations. With years of
                    experience in the industry, we specialize in a wide range of
                    contracting services and also provide comprehensive cleaning
                    solutions for both commercial and residential spaces.
                </p>
            </div>

            <div
                className="bg-masis-green p-2 text-center lg:p-4"
                data-aos="fade-down"
            >
                <h2 className="mb-2 font-semibold lg:mb-5">
                    Our Contracting Services
                </h2>
                <img
                    className="mx-auto mb-2 h-[100px] lg:mb-5 lg:h-[150px] xl:h-[200px]"
                    src="images/builder.png"
                    alt="builder"
                />
                <p className="mb-2 lg:mb-5">
                    At Masis Contractor LLC, we offer a variety of contracting
                    services designed to enhance and transform your living and
                    working spaces.
                </p>

                <p className="mb-2 lg:mb-5">
                    Please check out our contractor page for more details!
                </p>
            </div>

            <div
                className="bg-stone-100 p-2 text-center lg:p-4"
                data-aos="fade-down"
            >
                <h2 className="mb-2 font-semibold lg:mb-5">
                    Our Cleaning Services
                </h2>
                <img
                    className="mx-auto mb-2 h-[100px] lg:mb-5 lg:h-[150px] xl:h-[200px]"
                    src="images/cleaning.png"
                    alt="cleaning"
                />
                <p className="mb-2 lg:mb-5">
                    In addition to our exceptional contracting services, we
                    offer a comprehensive range of cleaning services through our
                    dedicated cleaning subsection. Our cleaning services ensure
                    a clean, healthy, and welcoming environment for both
                    residential and commercial clients.
                </p>
                <p className="mb-2 lg:mb-5">
                    Please check out our cleaning page for more details!
                </p>
            </div>
        </div>
    )
}

export default About
