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
            <div className="mx-10 mb-10 grid grid-cols-2 gap-10">
                <img
                    src="../../public/images/c-cleaning.jpg"
                    alt="commerical cleaning"
                />

                <div>
                    <h2 className="mb-5 text-2xl font-semibold">
                        Commerical Cleaning
                    </h2>
                    <p>
                        (Insert Text) Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Corrupti adipisci iusto delectus,
                        consectetur rem consequuntur id repudiandae veritatis
                        omnis reprehenderit eligendi dicta, similique quis
                        quidem. Culpa consequuntur vero blanditiis modi! Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Nobis
                        distinctio culpa, iure aspernatur explicabo eum
                        consequatur esse, corporis in accusamus nam praesentium
                        ut provident blanditiis autem necessitatibus animi
                        earum. In.
                    </p>
                </div>
            </div>

            {/* residential cleaning */}
            <div className="mx-10 mb-10 grid grid-cols-2 gap-10">
                <div>
                    <h2 className="mb-5 text-2xl font-semibold">
                        Residential Cleaning
                    </h2>
                    <p>
                        (Insert Text) Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Corrupti adipisci iusto delectus,
                        consectetur rem consequuntur id repudiandae veritatis
                        omnis reprehenderit eligendi dicta, similique quis
                        quidem. Culpa consequuntur vero blanditiis modi! Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Nobis
                        distinctio culpa, iure aspernatur explicabo eum
                        consequatur esse, corporis in accusamus nam praesentium
                        ut provident blanditiis autem necessitatibus animi
                        earum. In.
                    </p>
                </div>
                <img
                    src="../../public/images/r-cleaning-1.jpg"
                    alt="residential cleaning"
                />
            </div>

            <div className="bg-masis-green">
                <h2 className="my-7 text-center text-2xl font-semibold">
                    Cleaning Products Used
                </h2>
                <div className="m-10 grid grid-cols-4 gap-4">
                    {/* item 1 */}
                    <div className="flex flex-col">
                        <h2 className="mb-5 text-center text-xl">Safe</h2>
                        <img
                            className="m-auto h-[150px]"
                            src="../../public/images/safe.png"
                            alt="safe"
                        />
                    </div>

                    {/* item 2 */}
                    <div className="flex flex-col">
                        <h2 className="mb-5 text-center text-xl">Natural</h2>
                        <img
                            className="m-auto h-[150px]"
                            src="../../public/images/natural.png"
                            alt="natural"
                        />
                    </div>

                    {/* item 3 */}
                    <div className="flex flex-col">
                        <h2 className="mb-5 text-center text-xl">Non Toxic</h2>
                        <img
                            className="m-auto h-[150px]"
                            src="../../public/images/non-toxic.png"
                            alt="non toxic"
                        />
                    </div>

                    {/* item 4 */}
                    <div className="flex flex-col">
                        <h2 className="mb-5 text-center text-xl">
                            Eco Friendly
                        </h2>
                        <img
                            className="m-auto h-[150px]"
                            src="../../public/images/eco-friendly.png"
                            alt="eco friendly"
                        />
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
