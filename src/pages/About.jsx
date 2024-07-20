import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

AOS.init()

function About() {
    return (
        <div className="flex flex-col text-center">
            <div>
                <div className="h-[400px] bg-ash-brown bg-[url('../public/images/kitchen.jpg')] bg-cover bg-center p-10 text-left md:h-[500px]" />

                <h1 className="mt-5 p-5 text-center font-semibold uppercase md:text-xl lg:text-2xl xl:text-3xl">
                    About Us
                </h1>

                <div className="xl:text-md mx-10 mb-5 text-sm lg:mx-40 lg:p-4 lg:text-base">
                    <p className="mb-2 text-left lg:mb-5">
                        Welcome to Masis Contractor LLC, your trusted partner
                        for all your construction and cleaning needs. We take
                        pride in offering top-quality services that ensure
                        customer satisfaction and exceed expectations. With
                        years of experience in the industry, we specialize in a
                        wide range of contracting services and also provide
                        comprehensive cleaning solutions for both commercial and
                        residential spaces.
                    </p>
                    <div className="text-left">
                        <h2 className="xlg:mb-5 mb-2 font-semibold">
                            Our Services
                        </h2>
                        <p className="mb-2 lg:mb-5">
                            At Masis Contractor LLC, we offer a variety of
                            contracting services designed to enhance and
                            transform your living and working spaces. Visit our
                            contractor page for more details!
                        </p>

                        <p className="">
                            In addition to our exceptional contracting services,
                            we provide a comprehensive range of cleaning
                            services through our dedicated cleaning subsection.
                            Our cleaning services ensure a clean, healthy, and
                            welcoming environment for both residential and
                            commercial clients. Visit our cleaning page for more
                            details!
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-orange-500 p-10">
                <h2 className="mb-5 text-4xl font-bold uppercase md:text-5xl">
                    Licensed, Bonded & Insured
                </h2>
                <p>
                    Washington State Contractor License:{' '}
                    <a
                        className="text-white"
                        href="https://secure.lni.wa.gov/verify/Detail.aspx?UBI=&LIC=MASISCL875JR&SAW="
                        target="_blank"
                        rel="noreferrer"
                    >
                        MASISCL875JR
                    </a>
                </p>
            </div>

            <div className="bg-stone-100 p-10">
                <h2 className="mb-5 font-bold uppercase md:text-xl lg:text-2xl xl:text-3xl">
                    Testimonials
                </h2>
                <div className="flex flex-col items-center bg-stone-100 lg:flex-row lg:items-center lg:justify-evenly">
                    <div>
                        <a
                            href="https://www.houzz.com/professionals/general-contractors/masis-contractor-pfvwus-pf~2016232471"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="images/houzz.png"
                                alt="houzz"
                                className="mb-5 h-[150px] sm:h-[200px]"
                            />
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://www.yelp.com/biz/masis-contractor-seattle"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="images/yelp.png"
                                alt="yelp"
                                className="mb-5 h-[150px] sm:h-[200px]"
                            />
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://secure.lni.wa.gov/verify/Detail.aspx?UBI=&LIC=MASISCL875JR&SAW="
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="images/google.png"
                                alt="google"
                                className="mb-5 h-[150px] sm:h-[200px]"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
