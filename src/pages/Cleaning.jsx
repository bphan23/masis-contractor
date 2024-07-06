import ContactForm from '../ui/ContactForm'

function Cleaning() {
    // Props sending to form
    let serviceId = 'service_28dpmrh'
    let templateId = 'template_vegmxhq'
    let emailPublicKey = 'Iskq673SmMmHylJBR'
    let selectDescription = 'Select Cleaning Service: '
    let selectOptions = {
        'Please Select': 'none',
        'Commerical Cleaning': 'commerical-cleaning',
        'Residential Cleaning': 'residential-cleaning',
    }
    let aboutPlaceHolder =
        'Tell us a few sentences about what you need cleaned...'

    return (
        <div className="flex flex-col">
            <h1 className="my-7 text-center text-3xl font-semibold">
                Cleaning Services
            </h1>

            {/* commerical cleaning */}
            <div
                className="mx-10 mb-10 grid grid-cols-2 gap-10"
                data-aos="fade-left"
            >
                <img
                    src="../../public/images/c-cleaning.jpg"
                    alt="commerical cleaning"
                />

                <div>
                    <h2 className="mb-5 text-2xl font-semibold">
                        Commerical Cleaning
                    </h2>
                    <p className="mb-5">
                        At Masis Cleaning, we offer top-notch commercial
                        cleaning services designed to create a pristine and
                        healthy environment for businesses of all sizes. Our
                        comprehensive cleaning solutions cater to a wide array
                        of commercial spaces, including offices, retail stores,
                        healthcare facilities, educational institutions, and
                        industrial sites.
                    </p>
                    <p className="mb-5">
                        We are committed to excellence and customer
                        satisfaction. Experience the difference of a
                        professionally cleaned workspace. Contact us today to
                        discuss your commercial cleaning needs and schedule a
                        consultation.
                    </p>
                    <p className="mb-5">
                        <strong>Our Services Include: </strong>
                        <i>
                            Daily Janitorial Services, Carpet and Upholstery
                            Cleaning, Window Washing,Floor Care, Restroom
                            Sanitation, and Specialized Deep Cleaning.
                        </i>
                    </p>
                </div>
            </div>

            {/* residential cleaning */}
            <div
                className="mx-10 mb-10 grid grid-cols-2 gap-10"
                data-aos="fade-right"
            >
                <div>
                    <h2 className="mb-5 text-2xl font-semibold">
                        Residential Cleaning
                    </h2>
                    <p className="mb-5">
                        At Masis Cleaning, we provide exceptional residential
                        cleaning services to ensure your home remains a clean,
                        healthy, and comfortable sanctuary. Our team of
                        professional cleaners is dedicated to delivering
                        top-quality service, tailored to meet the unique needs
                        of each household.
                    </p>
                    <p className="mb-5">
                        We take pride in transforming homes into pristine and
                        inviting spaces. Experience the joy of a professionally
                        cleaned home. Contact us today to discuss your
                        residential cleaning needs and schedule a service.
                    </p>
                    <p className="mb-5">
                        <strong>Our Services Include: </strong>
                        <i>
                            Regular House Cleaning, Deep Cleaning,
                            Move-In/Move-Out Cleaning, Post-Construction
                            Cleaning, Carpet and Upholstery Cleaning, Window
                            Cleaning, and Specialized Cleaning Services.
                        </i>
                    </p>
                </div>
                <img
                    src="../../public/images/r-cleaning-1.jpg"
                    alt="residential cleaning"
                />
            </div>

            <div className="bg-masis-green text-center" data-aos="fade-up">
                <h2 className="my-7 text-center text-2xl font-semibold">
                    Why Choose Us?
                </h2>
                <div className="m-8 grid grid-cols-5 gap-x-5">
                    {/* item 1 */}
                    <div className="flex flex-col">
                        <h2 className="mb-2 p-2 text-xl font-semibold">
                            Experienced Professionals
                        </h2>
                        <img
                            className="mx-auto h-[150px]"
                            src="../../public/images/expert.png"
                            alt="experienced professionals"
                        />
                        <p className="p-4">
                            Our team consists of highly trained and experienced
                            cleaning professionals dedicated to delivering
                            exceptional results.
                        </p>
                    </div>

                    {/* item 2 */}
                    <div className="flex flex-col">
                        <h2 className="mb-2 p-2 text-xl font-semibold">
                            Eco-Friendly Products
                        </h2>
                        <img
                            className="mx-auto h-[150px]"
                            src="../../public/images/eco-friendly.png"
                            alt="eco-friendly products"
                        />
                        <p className="p-4">
                            We use environmentally friendly cleaning products
                            that are safe for your staff and clients, while
                            effectively tackling dirt and grime.
                        </p>
                    </div>

                    {/* item 3 */}
                    <div className="flex flex-col">
                        <h2 className="mb-2 p-2 text-xl font-semibold">
                            Flexible Scheduling
                        </h2>
                        <img
                            className="mx-auto h-[150px]"
                            src="../../public/images/schedule.png"
                            alt="flexible scheduling"
                        />
                        <p className="p-4">
                            We understand the importance of minimal disruption
                            to your operations. Our flexible scheduling options
                            include cleaning during business hours, after hours,
                            or on weekends.
                        </p>
                    </div>

                    {/* item 4 */}
                    <div className="flex flex-col">
                        <h2 className="mb-2 p-2 text-xl font-semibold">
                            Health and Safety Compliance
                        </h2>
                        <img
                            className="mx-auto h-[150px]"
                            src="../../public/images/safe.png"
                            alt="health and safety compliance"
                        />
                        <p className="p-4">
                            We adhere to industry standards and regulations to
                            ensure a safe and healthy workplace.
                        </p>
                    </div>

                    {/* item 5 */}
                    <div className="flex flex-col">
                        <h2 className="mb-2 p-2 text-xl font-semibold">
                            Customized Cleaning Plans
                        </h2>
                        <img
                            className="mx-auto h-[150px]"
                            src="../../public/images/checklist.png"
                            alt="customized cleaning plans"
                        />
                        <p className="p-4">
                            We tailor our cleaning services to meet the unique
                            needs of your business, ensuring you receive the
                            highest level of service.
                        </p>
                    </div>
                </div>
            </div>

            <h2 className="my-7 text-center text-2xl font-semibold">
                Free Cleaning Consultation
            </h2>

            <ContactForm
                serviceId={serviceId}
                templateId={templateId}
                emailPublicKey={emailPublicKey}
                selectDescription={selectDescription}
                selectOptions={selectOptions}
                aboutPlaceHolder={aboutPlaceHolder}
                usingCareerForm={false}
            />
        </div>
    )
}

export default Cleaning
