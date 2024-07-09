import ContactForm from '../ui/ContactForm'

function Careers() {
    // Props sending to form
    let serviceId = ''
    let templateId = ''
    let emailPublicKey = ''
    let selectDescription = 'Select Job Role: '
    let selectOptions = {
        'Please Select': 'none',
        'Contractor Role': 'contractor',
        'Cleaning Role': 'cleaning',
    }
    let aboutPlaceHolder = 'Tell us a few sentences about yourself.'

    return (
        <div className="my-0 flex flex-col">
            <div className="min-h-[500px] bg-[url('../../public/images/seattle.jpg')] bg-cover bg-fixed md:min-h-[650px] lg:min-h-[800px]">
                <h1 className="flex h-screen items-center justify-center text-center text-4xl font-semibold uppercase text-white xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                    Future Careers
                </h1>
            </div>

            <div
                className="bg-ash-brown px-4 pt-4 text-center text-white md:mb-5 md:px-8 md:pt-8"
                data-aos="fade-up"
            >
                <h2 className="mb-2 font-semibold md:mb-5 lg:text-xl xl:text-2xl">
                    Why Should You Join Masis
                </h2>
                <div className="flex flex-col md:grid md:grid-cols-3 md:justify-items-center md:gap-x-10 md:py-5">
                    <div className="mb-5 md:mb-0">
                        <h2 className="mb-2 font-semibold md:mb-5">
                            Competitive Pay
                        </h2>
                        <img
                            className="mx-auto h-[100px] sm:h-[150px] md:h-[200px]"
                            src="images/money.png"
                            alt="competitive pay"
                        />
                        <p className="p-2 md:p-4">
                            We offer competitive pay rates to ensure our team
                            members are fairly compensated for their skills and
                            contributions. Your expertise deserves to be
                            rewarded.
                        </p>
                    </div>
                    <div className="mb-5 md:mb-0">
                        <h2 className="mb-2 font-semibold md:mb-5">
                            Career Growth & Development
                        </h2>
                        <img
                            className="mx-auto h-[100px] sm:h-[150px] md:h-[200px]"
                            src="images/promotion.png"
                            alt="career growth and development"
                        />
                        <p className="p-2 md:p-4">
                            We support your career growth with training
                            programs, mentorship, and the chance to work on
                            diverse and exciting projects.
                        </p>
                    </div>
                    <div className="mb-5 md:mb-0">
                        <h2 className="mb-2 font-semibold md:mb-5">
                            Job Stability & Security
                        </h2>
                        <img
                            className="mx-auto h-[100px] sm:h-[150px] md:h-[200px]"
                            src="images/job.png"
                            alt="job stability and security"
                        />
                        <p className="p-2 md:p-4">
                            We provide our employees with job stability and
                            security, offering a reliable and consistent work
                            environment where you can build a long-term career.
                        </p>
                    </div>
                </div>
            </div>

            <h2 className="mt-5 text-center font-semibold md:mt-0">
                Join Our Team Today!
            </h2>
            <ContactForm
                serviceId={serviceId}
                templateId={templateId}
                emailPublicKey={emailPublicKey}
                selectDescription={selectDescription}
                selectOptions={selectOptions}
                aboutPlaceHolder={aboutPlaceHolder}
                usingCareerForm={true}
            />
        </div>
    )
}

export default Careers
