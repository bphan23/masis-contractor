import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import GetInTouch from '../ui/GetInTouch'
import { Link } from 'react-router-dom'

const slides = [
    {
        image: '/images/roofing.jpg',
        titleSmall: 'Reliable Remodeling & Renovation Services',
        titleLarge: 'Transform Your Space with Expert Craftsmanship',
        description:
            'MASIS GENERAL CONTRACTOR delivers quality and efficiency in every project, whether it’s roofing, remodeling, or home additions. Enhance your home’s beauty and value.',
    },
    {
        image: '/images/kitchen.jpg',
        titleSmall: 'Exceptional Kitchen Remodeling',
        titleLarge: 'Upgrade Your Culinary Space Today',
        description:
            'From design to installation, our expert team brings your dream kitchen to life with precision and care.',
    },
    {
        image: '/images/seattle.jpg',
        titleSmall: 'Trusted Seattle Contractors',
        titleLarge: 'Building Homes, Building Trust',
        description:
            'Serving the Seattle community with top-tier craftsmanship and customer satisfaction.',
    },
]

// Testimonial data (3 testimonials) with ratings added
const testimonials = [
    {
        quote: 'We adhere to strict quality control measures and use high-quality materials. Our experienced team ensures every detail meets our high standards. We provide a comprehensive warranty on our workmanship and materials. Specific details are provided for each project, including a range of sustainable and eco-friendly construction solutions.',
        author: 'Savannah Nguyen',
        role: 'Businessman',
        image: '/images/construction-3.jpg',
        alt: 'Tear down section of house',
        rating: 5,
    },
    {
        quote: 'The team at Masis General Contractor is outstanding. They completed our home addition on time and within budget, with impeccable craftsmanship. Highly recommended for anyone looking for reliable and skilled contractors.',
        author: 'Michael Thompson',
        role: 'Homeowner',
        image: '/images/construction-3.jpg',
        alt: 'Tear down section of house',
        rating: 5,
    },
    {
        quote: 'From start to finish, their professionalism and attention to detail were impressive. They transformed our kitchen beautifully and made the process smooth and stress-free.',
        author: 'Lisa Carter',
        role: 'Interior Designer',
        image: '/images/construction-3.jpg',
        alt: 'Tear down section of house',
        rating: 5,
    },
]

// Star rendering helper function
const renderStars = (count) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
        stars.push(
            <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill={i < count ? '#f97316' : 'none'} // orange fill for rating stars
                stroke="#f97316"
                strokeWidth="1.5"
                className="inline-block h-5 w-5"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.286 7.038h7.391c.969 0 1.371 1.24.588 1.81l-5.978 4.348 2.287 7.039c.3.921-.755 1.688-1.54 1.118L12 17.347l-5.984 4.933c-.785.57-1.838-.197-1.539-1.118l2.287-7.04-5.978-4.347c-.783-.57-.38-1.81.588-1.81h7.39l2.286-7.038z"
                />
            </svg>
        )
    }
    return stars
}

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [fadeState, setFadeState] = useState('fade-in') // 'fade-in' or 'fade-out'

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeState('fade-out')
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % testimonials.length)
                setFadeState('fade-in')
            }, 700) // fade-out duration matches CSS transition
        }, 5000) // 5 seconds per testimonial

        return () => clearInterval(interval)
    }, [])

    const goToIndex = (idx) => {
        if (idx === currentIndex) return
        setFadeState('fade-out')
        setTimeout(() => {
            setCurrentIndex(idx)
            setFadeState('fade-in')
        }, 700)
    }

    // Current testimonial data
    const { quote, author, role, image, alt, rating } =
        testimonials[currentIndex]

    const {
        image: heroImage,
        titleSmall,
        titleLarge,
        description,
    } = slides[currentIndex % slides.length]

    return (
        <div className="flex flex-col text-left">
            {/* Hero Section */}
            <div
                className="relative h-[900px] overflow-hidden"
                role="img"
                aria-label="Rotating background images showing construction scenes"
            >
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroImage})` }}
                />

                {/* Dark translucent overlay - BLUR - backdrop-blur-sm */}
                <div className="absolute inset-0 bg-black bg-opacity-40" />

                {/* Text container */}
                <div className="absolute inset-0 flex max-w-5xl flex-col items-start justify-center space-y-6 px-12 text-white md:px-24">
                    <h2 className="text-lg font-semibold uppercase tracking-wider">
                        {titleSmall}
                    </h2>

                    <h1 className="max-w-3xl text-5xl font-extrabold leading-tight md:text-6xl">
                        {titleLarge}
                    </h1>

                    <p className="max-w-3xl text-lg leading-relaxed text-gray-100">
                        {description}
                    </p>

                    <Link
                        to="/services"
                        className="bg-masis-orange mt-4 inline-block rounded px-10 py-4 text-sm uppercase text-white shadow-lg transition hover:bg-black"
                    >
                        Our Services{' '}
                        <span className="ml-2 inline-block">↗</span>
                    </Link>
                </div>
            </div>

            {/* About Section */}
            <section
                className="bg-white px-6 py-16 md:px-20"
                aria-labelledby="about-us-title"
            >
                <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-center lg:gap-10">
                    {/* Left Image */}
                    <div className="w-full">
                        <img
                            src="/images/construction-1.jpg"
                            alt="Electric saw in use"
                            className="h-[260px] w-full rounded-2xl object-cover shadow-lg md:h-[320px] lg:h-[340px]"
                            loading="lazy"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full max-w-xl text-center md:text-left">
                        <span className="text-masis-orange text-[18px] uppercase tracking-widest">
                            About Us
                        </span>
                        <h2
                            id="about-us-title"
                            className="mt-3 text-[48px] font-extrabold uppercase leading-tight text-gray-900 md:text-5xl"
                        >
                            Masis General Contractor
                        </h2>
                        <p className="mt-6 text-[16px] leading-relaxed text-gray-600">
                            Remodeling homes quickly and efficiently is our
                            bottom line. Our team of professionals includes
                            expert craftsmen—from kitchen cabinet makers to
                            expert plaster men. Our mission is to work smart and
                            deliver exceptional results while exceeding our
                            customers’ expectations.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="w-full">
                        <img
                            src="/images/construction-2.jpg"
                            alt="Cutting wood during construction"
                            className="h-[260px] w-full rounded-2xl object-cover shadow-lg md:h-[320px] lg:h-[340px]"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section
                className="bg-off-white px-6 py-16"
                aria-labelledby="services-title"
            >
                <div className="mb-12 text-center">
                    <span className="text-masis-orange text-[18px] uppercase tracking-widest">
                        Services
                    </span>
                    <h2
                        id="services-title"
                        className="mt-3 text-4xl font-bold text-gray-900"
                    >
                        What We Do Best
                    </h2>

                    <p className="mx-auto mb-6 mt-3 max-w-xl text-[16px] text-gray-700">
                        Our experienced team is dedicated to quality and
                        attention to detail. We use top-quality materials to
                        ensure lasting results for every project.
                    </p>

                    <Link
                        to="/services"
                        className="bg-masis-orange inline-block rounded px-10 py-4 text-sm uppercase text-white shadow transition hover:bg-black"
                    >
                        See More
                        <span className="ml-2">↗</span>
                    </Link>
                </div>

                <div className="align-items flex flex-wrap justify-center gap-12">
                    {[
                        'Roofing',
                        'Flooring',
                        'Painting',
                        'Plumbing',
                        'Decks and Patios',
                        'Home Additions',
                    ].map((service, idx) => (
                        <article
                            key={idx}
                            className="w-full rounded-xl border border-gray-200 bg-white text-center shadow-md transition hover:shadow-lg sm:w-[48%] lg:w-[10%]"
                            aria-label={service}
                        >
                            <span
                                className="text-masis-orange my-5 block text-3xl"
                                aria-hidden="true"
                            >
                                🛠️
                            </span>
                            <h3 className="mb-10 px-2 text-lg font-semibold text-gray-900">
                                {service}
                            </h3>
                        </article>
                    ))}
                </div>
            </section>

            {/* Testimonial Section */}
            <section
                className="bg-[#131B30] bg-[url('/images/testimonial-v2-shape1.png')] bg-[length:100%_auto] bg-top bg-no-repeat px-6 py-16 text-white"
                aria-labelledby="testimonial-title"
            >
                <div className="mb-12 text-center">
                    <span className="text-masis-orange block text-[18px] uppercase tracking-widest">
                        Testimonial
                    </span>
                    <h2
                        id="testimonial-title"
                        className="mt-2 text-4xl font-bold"
                    >
                        What Our Clients Say About Us
                    </h2>
                </div>

                {/* Center wrapper with smaller max-width */}
                <div className="mx-auto max-w-3xl">
                    <blockquote
                        className={`flex flex-col justify-between rounded-lg border border-white/30 p-8 text-center transition-opacity duration-700 ease-in-out ${
                            fadeState === 'fade-in'
                                ? 'opacity-100'
                                : 'opacity-0'
                        }`}
                    >
                        <p className="mb-6 text-[16px] italic leading-relaxed">
                            "{quote}"
                        </p>

                        {/* Stars */}
                        <div className="mb-4 flex justify-center gap-1">
                            {renderStars(rating)}
                        </div>

                        <footer>
                            <span className="block text-[16px] font-semibold">
                                {author}
                            </span>
                            <span className="text-[14px] text-gray-300">
                                {role}
                            </span>
                        </footer>

                        <div className="mt-8 flex justify-center gap-4">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => goToIndex(idx)}
                                    aria-label={`Show testimonial ${idx + 1}`}
                                    className={`h-2 w-2 rounded-full transition-colors focus:outline-none ${
                                        idx === currentIndex
                                            ? 'bg-masis-orange'
                                            : 'bg-white/50 hover:bg-white'
                                    }`}
                                    type="button"
                                />
                            ))}
                        </div>
                    </blockquote>
                </div>
            </section>

            {/* License Info Section */}
            <section
                className="bg-masis-green px-6 py-14 text-center text-white"
                data-aos="fade-up"
                aria-label="License Information"
            >
                <h2 className="mb-5 text-4xl font-bold uppercase">
                    Licensed, Bonded & Insured
                </h2>
                <p>
                    Washington State Contractor License:{' '}
                    <a
                        className="text-masis-orange text-[16px] underline"
                        href="https://secure.lni.wa.gov/verify/Detail.aspx?UBI=&LIC=MASISCL875JR&SAW="
                        target="_blank"
                        rel="noreferrer"
                    >
                        MASISCL875JR
                    </a>
                </p>
            </section>

            {/* Contact Section */}
            <GetInTouch />
        </div>
    )
}

export default Home
