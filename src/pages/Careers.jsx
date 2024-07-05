import CareersForm from '../ui/CareersForm'

function Careers() {
    return (
        <div className="my-0 flex flex-col">
            <div className="min-h-[800px] bg-[url('../public/images/seattle.jpg')] bg-cover bg-fixed">
                <h1 className="mt-80 text-center text-8xl font-semibold uppercase text-white">
                    Future Careers
                </h1>
            </div>

            <div className="bg-masis-green mb-7 p-8">
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
            <CareersForm />
        </div>
    )
}

export default Careers
