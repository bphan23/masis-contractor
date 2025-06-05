import { useOutletContext } from 'react-router-dom'
import ContactForm from '../ui/ContactForm'
import GetInTouch from '../ui/GetInTouch'

function ContactUs() {
    const serviceId = 'service_triys3q'
    const templateId = 'template_1yb0x8v'
    const emailPublicKey = 'J0BoHxaeaOuJ_7oXU'
    const selectDescription = 'Select Contractor Job: '
    const aboutPlaceHolder =
        'Tell us a few sentences about what construction work you need done...'

    const selectOptions = useOutletContext()

    return (
        <div className="bg-off-white mt-10 pt-12">
            {/* Content Wrapper with Padding */}
            <div className="px-4">
                {/* Title */}
                <div className="my-16 text-center">
                    <h1 className="text-[46px] font-semibold text-gray-900">
                        Contact Us
                    </h1>
                    <span className="border-masis-orange mt-4 inline-block w-44 border-t-2"></span>
                </div>

                {/* Contact Info */}
                <div className="mx-auto max-w-xl space-y-8 sm:px-0">
                    <h2 className="text-center text-2xl font-semibold text-gray-800 md:text-left">
                        Contact Information
                    </h2>

                    {/* Phone */}
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 rounded-md bg-white p-3 shadow-sm">
                            <i
                                className="fa fa-phone text-3xl text-black"
                                aria-hidden="true"
                            ></i>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-700">Phone:</h3>
                            <p className="text-[16px] text-[#4d5765]">
                                <a
                                    href="tel:+12065108575"
                                    className="hover:text-masis-orange underline no-underline transition"
                                >
                                    (206) 510-8575
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 rounded-md bg-white p-3 shadow-sm">
                            <i
                                className="fa fa-envelope text-3xl text-black"
                                aria-hidden="true"
                            ></i>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-700">Email:</h3>
                            <p className="text-[16px] text-[#4d5765]">
                                <a
                                    href="mailto:masiscontractor@outlook.com"
                                    className="hover:text-masis-orange underline no-underline transition"
                                >
                                    masiscontractor@outlook.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form Header */}
                <h2 className="mb-10 mt-20 text-center text-3xl font-bold text-black">
                    Get a Estimate
                </h2>

                {/* Contact Form */}
                <div className="mx-auto max-w-3xl sm:px-0">
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
            </div>

            {/* Banner stretches full width */}
            <GetInTouch />
        </div>
    )
}

export default ContactUs
