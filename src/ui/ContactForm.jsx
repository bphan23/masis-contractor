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
            ref={form}
            onSubmit={handleSubmit}
            data-aos="fade-up"
            className="mx-auto mb-10 max-w-2xl rounded-lg border border-gray-200 bg-gray-50 p-6 text-sm shadow-sm"
        >
            {/* Service Selection */}
            <div className="mb-6">
                <label htmlFor="selected" className="mb-1 block font-semibold">
                    {selectDescription}
                </label>
                <select
                    name="selected_value"
                    className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-masis-green"
                    onChange={(e) => setSelectedValue(e.target.value)}
                >
                    {Object.entries(selectOptions).map(([key, value]) => (
                        <option key={value} value={value}>
                            {key}
                        </option>
                    ))}
                </select>
            </div>

            {/* Full Name */}
            <div className="mb-6">
                <label htmlFor="full-name" className="mb-1 block font-semibold">
                    Full Name
                </label>
                <input
                    type="text"
                    name="full_name"
                    className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-masis-green"
                    placeholder="Enter Full Name"
                    onChange={(e) => setFullName(e.target.value)}
                />
            </div>

            {/* Email */}
            <div className="mb-6">
                <label htmlFor="email" className="mb-1 block font-semibold">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-masis-green"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            {/* Phone Number */}
            <div className="mb-6">
                <label htmlFor="phone" className="mb-1 block font-semibold">
                    Phone Number
                </label>
                <input
                    type="tel"
                    name="phone"
                    className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-masis-green"
                    placeholder="Enter Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>

            {/* Job Description */}
            <div className="mb-6">
                <label htmlFor="about" className="mb-1 block font-semibold">
                    Job Description
                </label>
                <textarea
                    name="about"
                    placeholder={aboutPlaceHolder}
                    className="min-h-[100px] w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-masis-green"
                    onChange={(e) => setAbout(e.target.value)}
                />
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4">
                <button
                    type="button"
                    onClick={() => {
                        // Optional: Reset logic
                        setSelectedValue('')
                        setFullName('')
                        setEmail('')
                        setPhone('')
                        setAbout('')
                    }}
                    className="border-masis-orange text-masis-orange rounded border px-6 py-2 transition hover:bg-black hover:text-white"
                >
                    Clear
                </button>

                <button
                    type="submit"
                    className="bg-masis-orange rounded px-6 py-2 text-white transition hover:bg-black"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

export default ContactForm
