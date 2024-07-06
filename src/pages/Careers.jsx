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
            <div className="min-h-[800px] bg-[url('../public/images/seattle.jpg')] bg-cover bg-fixed">
                <h1 className="mt-80 text-center text-8xl font-semibold uppercase text-white">
                    Future Careers
                </h1>
            </div>

            <div className="mb-7 bg-masis-green p-8" data-aos="fade-up">
                <h2 className="mb-5 text-center text-3xl font-semibold">
                    Why Should You Join Masis
                </h2>
                <div className="grid grid-cols-3 justify-items-center gap-x-10 py-7 text-center">
                    <div>
                        <h2 className="mb-5 text-2xl font-semibold">
                            Competitive Pay
                        </h2>
                        <img
                            className="mx-auto h-[200px]"
                            src="../../public/images/money.png"
                            alt="competitive pay"
                        />
                        <p className="p-4">
                            We offer competitive pay rates to ensure our team
                            members are fairly compensated for their skills and
                            contributions. Your expertise deserves to be
                            rewarded.
                        </p>
                    </div>
                    <div>
                        <h2 className="mb-5 text-2xl font-semibold">
                            Career Growth & Development
                        </h2>
                        <img
                            className="mx-auto h-[200px]"
                            src="../../public/images/promotion.png"
                            alt="career growth and development"
                        />
                        <p className="p-4">
                            We support your career growth with training
                            programs, mentorship, and the chance to work on
                            diverse and exciting projects.
                        </p>
                    </div>
                    <div>
                        <h2 className="mb-5 text-2xl font-semibold">
                            Job Stability & Security
                        </h2>
                        <img
                            className="m-auto h-[200px]"
                            src="../../public/images/job.png"
                            alt="job stability and security"
                        />
                        <p className="p-4">
                            We provide our employees with job stability and
                            security, offering a reliable and consistent work
                            environment where you can build a long-term career.
                        </p>
                    </div>
                </div>
            </div>

            <h2 className="text-center text-2xl font-semibold">
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
