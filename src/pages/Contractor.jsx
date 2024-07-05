import ContactForm from '../ui/ContactForm'

function Contractor() {
    // Props sending to form
    let serviceId = 'service_triys3q'
    let templateId = 'template_1yb0x8v'
    let emailPublicKey = 'J0BoHxaeaOuJ_7oXU'
    let selectDescription = 'Select Contractor Job: '
    let selectOptions = {
        'Please Select': 'none',
        'Granite & Marble': 'granite-marble',
        'Tile & Flooring': 'tile-floor',
        'Kitchen Remodel': 'kitchen-remodel',
        'Bathroom Remodel': 'bathroom-remodel',
        'Commerical Cleaning': 'commerical-cleaning',
        'Residential Cleaning': 'residential-cleaning',
        'Other Job': 'other-job',
    }
    let aboutPlaceHolder =
        'Tell us a few sentences about what construction work you need done...'

    return (
        <div className="flex flex-col">
            <h1 className="my-7 text-center text-3xl font-semibold">
                Contractor Services
            </h1>

            <div className="mx-10 mb-10 grid grid-cols-2 grid-rows-3 gap-10">
                <div>
                    <img
                        src="../../public/images/construction-1.jpg"
                        alt="construction 1"
                    />
                </div>
                <div>
                    <img
                        src="../../public/images/construction-2.jpg"
                        alt="construction 2"
                    />
                </div>
                <div>
                    <img
                        src="../../public/images/construction-3.jpg"
                        alt="construction 3"
                    />
                </div>
                <div>
                    <img
                        src="../../public/images/construction-4.jpg"
                        alt="construction 4"
                    />
                </div>
                <div>
                    <img
                        src="../../public/images/construction-5.jpg"
                        alt="construction 5"
                    />
                </div>
                <div>
                    <img
                        src="../../public/images/construction-6.jpg"
                        alt="construction 6"
                    />
                </div>
            </div>

            <div className="min-h-[500px] bg-[url('../public/images/bg.png')] bg-cover bg-fixed">
                <h2 className="mt-32 text-center text-5xl font-semibold uppercase text-white">
                    Let Us Bring Your Visions to Life
                </h2>
            </div>

            <h2 className="my-7 text-center text-2xl font-semibold">
                Free Estimate
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

export default Contractor
