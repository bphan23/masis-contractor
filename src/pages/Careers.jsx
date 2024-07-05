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

            <div className="mb-7 bg-masis-green p-8">
                <h2 className="mb-5 text-center text-3xl font-semibold">
                    Why Should You Join Masis
                </h2>
                <div className="grid grid-cols-3 justify-items-center py-7 text-center">
                    <div>
                        <h2 className="mb-5 text-center text-xl">
                            Competitive Pay
                        </h2>
                        <img
                            className="m-auto h-[200px]"
                            src="../../public/images/pay.png"
                            alt="competitive pay"
                        />
                    </div>
                    <div>
                        <h2 className="mb-5 text-center text-xl">
                            Career Growth & Development
                        </h2>
                        <img
                            className="m-auto h-[200px]"
                            src="../../public/images/career.png"
                            alt="career growth and development"
                        />
                    </div>
                    <div>
                        <h2 className="mb-5 text-center text-xl">
                            Job Stability & Security
                        </h2>
                        <img
                            className="m-auto h-[200px]"
                            src="../../public/images/security.png"
                            alt="job stability and security"
                        />
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
