import { useOutletContext } from 'react-router-dom'
import ContactForm from '../ui/ContactForm'
import ContractorCard from '../ui/ContractorCard'

function Contractor() {
    // Props sending to form
    let serviceId = 'service_triys3q'
    let templateId = 'template_1yb0x8v'
    let emailPublicKey = 'J0BoHxaeaOuJ_7oXU'
    let selectDescription = 'Select Contractor Job: '

    let aboutPlaceHolder =
        'Tell us a few sentences about what construction work you need done...'

    const selectOptions = useOutletContext()

    return (
        <div className="flex flex-col">
            <h1 className="my-7 text-center text-3xl font-semibold">
                Contractor Services
            </h1>

            <div className="mx-10 mb-10 grid grid-cols-2 grid-rows-5 gap-10">
                <ContractorCard
                    serviceName={'Home Additions'}
                    imagePath={'../../public/images/construction-1.jpg'}
                    serviceDescription={
                        'Expanding your living space with expertly crafted home additions.'
                    }
                />
                <ContractorCard
                    serviceName={'Kitchen Remodeling'}
                    imagePath={'../../public/images/construction-2.jpg'}
                    serviceDescription={
                        'Creating the kitchen of your dreams with modern designs and functionality.'
                    }
                />

                <ContractorCard
                    serviceName={'Bathroom Remodeling'}
                    imagePath={'../../public/images/construction-3.jpg'}
                    serviceDescription={
                        'Transforming bathrooms into luxurious and comfortable spaces.'
                    }
                />

                <ContractorCard
                    serviceName={'Roofing'}
                    imagePath={'../../public/images/construction-4.jpg'}
                    serviceDescription={
                        'Providing durable and reliable roofing solutions to protect your home.'
                    }
                />

                <ContractorCard
                    serviceName={'Carpentry'}
                    imagePath={'../../public/images/construction-5.jpg'}
                    serviceDescription={
                        'Crafting custom woodwork and structural enhancements.'
                    }
                />

                <ContractorCard
                    serviceName={'Decks'}
                    imagePath={'../../public/images/construction-6.jpg'}
                    serviceDescription={
                        'Designing and building beautiful and functional outdoor decks.'
                    }
                />

                <ContractorCard
                    serviceName={'Flooring'}
                    imagePath={'../../public/images/construction-1.jpg'}
                    serviceDescription={
                        'Installing a variety of flooring options to suit your style and needs.'
                    }
                />
                <ContractorCard
                    serviceName={'Custom Remodeling'}
                    imagePath={'../../public/images/construction-2.jpg'}
                    serviceDescription={
                        'Tailoring remodeling projects to your specific requirements.'
                    }
                />
                <ContractorCard
                    serviceName={'Tiles'}
                    imagePath={'../../public/images/construction-3.jpg'}
                    serviceDescription={
                        'Expert tile installation for floors, walls, and backsplashes.'
                    }
                />

                <ContractorCard
                    serviceName={'Wall Moving & Enlarging Doors'}
                    imagePath={'../../public/images/construction-4.jpg'}
                    serviceDescription={
                        'Adjusting and enhancing your home’s layout for better flow and accessibility.'
                    }
                />
            </div>

            <div className="bg-masis-green text-center" data-aos="fade-up">
                <h2 className="my-7 text-center text-2xl font-semibold">
                    Why Choose Us?
                </h2>
                <div className="m-8 grid grid-cols-4 gap-x-5">
                    {/* item 1 */}
                    <div>
                        <h3 className='font-semibold" mb-2 p-2 text-xl font-semibold'>
                            Experience and Expertise
                        </h3>
                        <img
                            className="mx-auto h-[150px]"
                            src="../../public/images/stamp.png"
                            alt="experience and expertise"
                        />
                        <p className="p-4">
                            With years of experience, our skilled team ensures
                            high-quality results on every project.
                        </p>
                    </div>
                    {/* item 2 */}
                    <div>
                        <h3 className='font-semibold" mb-2 p-2 text-xl font-semibold'>
                            Customer Satisfaction
                        </h3>
                        <img
                            className="mx-auto h-[150px]"
                            src="../../public/images/customer-experience.png"
                            alt="customer satisfaction"
                        />
                        <p className="p-4">
                            We prioritize our customers' needs and work
                            diligently to achieve their complete satisfaction.
                        </p>
                    </div>
                    {/* item 3 */}
                    <div>
                        <h3 className='font-semibold" mb-2 p-2 text-xl font-semibold'>
                            Innovative Solutions
                        </h3>
                        <img
                            className="mx-auto h-[150px]"
                            src="../../public/images/creative.png"
                            alt="innovative solutions"
                        />
                        <p className="p-4">
                            We bring innovative ideas and solutions to every
                            project, ensuring modern and efficient outcomes.
                        </p>
                    </div>
                    {/* item 4 */}
                    <div>
                        <h3 className='font-semibold" mb-2 p-2 text-xl font-semibold'>
                            Reliability
                        </h3>
                        <img
                            className="mx-auto h-[150px]"
                            src="../../public/images/dependable.png"
                            alt="reliability"
                        />
                        <p className="p-4">
                            You can count on us to deliver projects on time and
                            within budget, maintaining transparency and
                            communication throughout the process.
                        </p>
                    </div>
                </div>

                <p></p>
            </div>

            <div
                className="min-h-[500px] bg-[url('../public/images/bg.png')] bg-cover bg-fixed"
                data-aos="fade-up"
            >
                <h2 className="mt-32 p-20 text-center text-7xl font-semibold uppercase text-white">
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
