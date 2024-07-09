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
            <h1 className="my-2 text-center font-semibold md:my-7 md:text-xl lg:my-7 lg:text-2xl xl:text-3xl">
                Contractor Services
            </h1>

            <div className="mx-7 flex flex-col lg:mx-10 lg:mb-10 lg:grid lg:grid-cols-2 lg:grid-rows-5 lg:gap-10">
                <ContractorCard
                    serviceName={'Home Additions'}
                    imagePath={'images/construction-1.jpg'}
                    serviceDescription={
                        'Expanding your living space with expertly crafted home additions.'
                    }
                />
                <ContractorCard
                    serviceName={'Kitchen Remodeling'}
                    imagePath={'images/construction-2.jpg'}
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
                    imagePath={'images/construction-4.jpg'}
                    serviceDescription={
                        'Providing durable and reliable roofing solutions to protect your home.'
                    }
                />

                <ContractorCard
                    serviceName={'Carpentry'}
                    imagePath={'images/construction-5.jpg'}
                    serviceDescription={
                        'Crafting custom woodwork and structural enhancements.'
                    }
                />

                <ContractorCard
                    serviceName={'Decks'}
                    imagePath={'images/construction-6.jpg'}
                    serviceDescription={
                        'Designing and building beautiful and functional outdoor decks.'
                    }
                />

                <ContractorCard
                    serviceName={'Flooring'}
                    imagePath={'images/construction-1.jpg'}
                    serviceDescription={
                        'Installing a variety of flooring options to suit your style and needs.'
                    }
                />
                <ContractorCard
                    serviceName={'Custom Remodeling'}
                    imagePath={'images/construction-2.jpg'}
                    serviceDescription={
                        'Tailoring remodeling projects to your specific requirements.'
                    }
                />
                <ContractorCard
                    serviceName={'Tiles'}
                    imagePath={'images/construction-3.jpg'}
                    serviceDescription={
                        'Expert tile installation for floors, walls, and backsplashes.'
                    }
                />

                <ContractorCard
                    serviceName={'Wall Moving & Enlarging Doors'}
                    imagePath={'images/construction-4.jpg'}
                    serviceDescription={
                        'Adjusting and enhancing your home’s layout for better flow and accessibility.'
                    }
                />
            </div>

            <div
                className="bg-ash-brown px-4 pt-4 text-center text-white md:mb-0 md:px-8 md:pt-8"
                data-aos="fade-up"
            >
                <h2 className="mb-2 font-semibold md:mb-5 lg:text-xl xl:text-2xl">
                    Why Choose Us?
                </h2>

                <div className="flex flex-col md:grid md:grid-cols-4 md:justify-items-center md:gap-x-5 md:py-5">
                    {/* item 1 */}
                    <div className="mb-5 md:mb-0">
                        <h2 className="mb-2 font-semibold md:mb-5">
                            Experience and Expertise
                        </h2>
                        <img
                            className="mx-auto h-[100px] sm:h-[150px] md:h-[200px]"
                            src="../../public/images/stamp.png"
                            alt="experience and expertise"
                        />
                        <p className="p-2 md:p-4">
                            With years of experience, our skilled team ensures
                            high-quality results on every project.
                        </p>
                    </div>
                    {/* item 2 */}
                    <div className="mb-5 md:mb-0">
                        <h2 className="mb-2 font-semibold md:mb-5">
                            Customer Satisfaction
                        </h2>
                        <img
                            className="mx-auto h-[100px] sm:h-[150px] md:h-[200px]"
                            src="images/customer-experience.png"
                            alt="customer satisfaction"
                        />
                        <p className="p-2 md:p-4">
                            We prioritize our customers' needs and work
                            diligently to achieve their complete satisfaction.
                        </p>
                    </div>
                    {/* item 3 */}
                    <div className="mb-5 md:mb-0">
                        <h2 className="mb-2 font-semibold md:mb-5">
                            Innovative Solutions
                        </h2>
                        <img
                            className="mx-auto h-[100px] sm:h-[150px] md:h-[200px]"
                            src="images/creative.png"
                            alt="innovative solutions"
                        />
                        <p className="p-2 md:p-4">
                            We bring innovative ideas and solutions to every
                            project, ensuring modern and efficient outcomes.
                        </p>
                    </div>
                    {/* item 4 */}
                    <div className="mb-5 md:mb-0">
                        <h2 className="mb-2 font-semibold md:mb-5">
                            Reliability
                        </h2>
                        <img
                            className="mx-auto h-[100px] sm:h-[150px] md:h-[200px]"
                            src="images/dependable.png"
                            alt="reliability"
                        />
                        <p className="p-2 md:p-4">
                            You can count on us to deliver projects on time and
                            within budget, maintaining transparency and
                            communication throughout the process.
                        </p>
                    </div>
                </div>

                <p></p>
            </div>

            <div
                className="min-h-[350px] bg-[url('../public/images/bg.png')] bg-cover bg-fixed md:mb-5 md:min-h-[400px]"
                data-aos="fade-up"
            >
                <h2 className="mx-10 flex h-screen items-center justify-center text-center text-4xl font-semibold uppercase text-white xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                    Let Us Bring Your Visions to Life
                </h2>
            </div>

            <h2 className="mt-5 text-center font-semibold md:mt-0">
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
