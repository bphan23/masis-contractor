import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function ContactForm({
    serviceId,
    templateId,
    emailPublicKey,
    selectDescription,
    selectOptions,
    aboutPlaceHolder,
    usingCareerForm,
}) {
    const form = useRef()

    const [selectedValue, setSelectedValue] = useState('')
    const [fullNameInput, setFullName] = useState('')
    const [emailInput, setEmail] = useState('')
    const [phoneInput, setPhone] = useState('')
    const [aboutTextArea, setAbout] = useState('')

    // for career form
    if (usingCareerForm === true) {
        if (selectedValue === 'contractor') {
            // send to masis contractor email
            serviceId = 'service_triys3q'
            templateId = 'template_yyidqrm'
            emailPublicKey = 'J0BoHxaeaOuJ_7oXU'
        } else if (selectedValue === 'cleaning') {
            // send to masis cleaning email
            serviceId = 'service_28dpmrh'
            templateId = 'template_rkzm88d'
            emailPublicKey = 'Iskq673SmMmHylJBR'
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        emailjs
            .sendForm(serviceId, templateId, form.current, {
                publicKey: emailPublicKey,
            })
            .then(
                () => {
                    console.log('SUCCESS!')
                },
                (error) => {
                    console.log('FAILED...', error.text)
                }
            )

        // reset after 3 seconds
        setTimeout(() => {
            event.target.reset()
        }, 3000)
    }

    return (
        <form
            className="mx-10 my-7 rounded-md border border-gray-200 bg-white px-5 text-sm"
            ref={form}
            onSubmit={handleSubmit}
            data-aos="fade-up"
        >
            <div className="my-4">
                <label htmlFor="selected" className="mr-2 font-semibold">
                    {selectDescription}
                </label>
                <select
                    className="rounded-md border border-gray-300 transition-all duration-300 focus:outline-none focus:ring focus:ring-masis-green"
                    name="selected_value"
                    onChange={(event) => {
                        setSelectedValue(event.target.value)
                    }}
                >
                    {Object.entries(selectOptions).map(([key, value]) => (
                        <option className="bg-masis-green" value={value}>
                            {key}
                        </option>
                    ))}
                </select>
            </div>
            {/* Name */}
            <div className="my-4">
                <label htmlFor="full-name" className="font-semibold">
                    Full Name
                </label>
                <input
                    type="text"
                    name="full_name"
                    className="input"
                    placeholder="Enter Full Name"
                    onChange={(event) => {
                        setFullName(event.target.value)
                    }}
                />
            </div>
            {/* Email */}
            <div className="my-4">
                <label htmlFor="email" className="font-semibold">
                    Email
                </label>
                <input
                    type="text"
                    name="email"
                    className="input"
                    placeholder="Enter Email"
                    onChange={(event) => {
                        setEmail(event.target.value)
                    }}
                />
            </div>
            {/* Phone Number */}
            <div className="my-4">
                <label htmlFor="phone" className="font-semibold">
                    Phone Number
                </label>
                <input
                    type="tel"
                    name="phone"
                    className="input"
                    placeholder="Enter Phone Number"
                    onChange={(event) => {
                        setPhone(event.target.value)
                    }}
                />
            </div>
            {/* About */}
            <div className="my-4">
                <label htmlFor="about" className="font-semibold">
                    About
                </label>

                <textarea
                    className="mt-2 min-h-[100px] w-full rounded-md border border-gray-300 p-2 transition-all duration-300 focus:outline-none focus:ring focus:ring-masis-green"
                    type="text"
                    placeholder={aboutPlaceHolder}
                    name="about"
                    onChange={(event) => {
                        setAbout(event.target.value)
                    }}
                />
            </div>

            <div className="mb-5 flex flex-row justify-end">
                <button className="mr-4 rounded-md border border-gray-300 bg-stone-100 px-6 py-1 transition-colors duration-300 hover:bg-stone-200 focus:outline-none focus:ring focus:ring-stone-100 focus:ring-offset-2 disabled:cursor-not-allowed">
                    Clear
                </button>
                <button className="rounded-md border border-gray-300 bg-orange-500 px-6 py-1 transition-colors duration-300 hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-500 focus:ring-offset-2 disabled:cursor-not-allowed">
                    Submit
                </button>
            </div>
        </form>
    )
}

export default ContactForm
