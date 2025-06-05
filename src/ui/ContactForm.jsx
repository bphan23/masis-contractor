import React, { useRef, useState, useEffect } from 'react'
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
    const [formErrors, setFormErrors] = useState({})
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)

    // Dynamic email settings
    if (usingCareerForm === true) {
        if (selectedValue === 'contractor') {
            serviceId = 'service_triys3q'
            templateId = 'template_yyidqrm'
            emailPublicKey = 'J0BoHxaeaOuJ_7oXU'
        } else if (selectedValue === 'cleaning') {
            serviceId = 'service_28dpmrh'
            templateId = 'template_rkzm88d'
            emailPublicKey = 'Iskq673SmMmHylJBR'
        }
    }

    // Real-time validation
    useEffect(() => {
        const errors = {}
        if (!selectedValue) errors.selectedValue = 'Please select a service.'
        if (!fullNameInput.trim())
            errors.fullNameInput = 'Full name is required.'
        if (!emailInput.trim()) {
            errors.emailInput = 'Email is required.'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)) {
            errors.emailInput = 'Enter a valid email address.'
        }
        if (!phoneInput.trim()) {
            errors.phoneInput = 'Phone number is required.'
        } else if (!/^\d{10}$/.test(phoneInput.replace(/\D/g, ''))) {
            errors.phoneInput = 'Enter a 10-digit phone number.'
        }
        if (!aboutTextArea.trim())
            errors.aboutTextArea = 'This field is required.'

        setFormErrors(errors)
        setIsFormValid(Object.keys(errors).length === 0)
    }, [selectedValue, fullNameInput, emailInput, phoneInput, aboutTextArea])

    const handleSubmit = (event) => {
        event.preventDefault()
        setSuccessMessage('')
        setErrorMessage('')

        if (!isFormValid) return

        emailjs
            .sendForm(serviceId, templateId, form.current, {
                publicKey: emailPublicKey,
            })
            .then(
                () => {
                    setSuccessMessage('Message sent successfully!')
                    event.target.reset()
                    setSelectedValue('')
                    setFullName('')
                    setEmail('')
                    setPhone('')
                    setAbout('')
                },
                (error) => {
                    console.log('FAILED...', error.text)
                    setErrorMessage(
                        'Failed to send message. Please try again later.'
                    )
                }
            )
    }

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            data-aos="fade-up"
            className="mx-auto mb-10 max-w-2xl rounded-lg border border-gray-200 bg-white p-6 text-sm shadow-sm"
        >
            {/* Alerts */}
            {successMessage && (
                <div className="mb-4 rounded bg-green-100 p-2 text-green-700">
                    {successMessage}
                </div>
            )}
            {errorMessage && (
                <div className="mb-4 rounded bg-red-100 p-2 text-red-700">
                    {errorMessage}
                </div>
            )}

            {/* Select */}
            <div className="mb-6">
                <label htmlFor="selected" className="mb-1 block font-semibold">
                    {selectDescription}
                </label>
                <select
                    name="selected_value"
                    value={selectedValue}
                    className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-masis-green"
                    onChange={(e) => setSelectedValue(e.target.value)}
                >
                    <option value="">Select...</option>
                    {Object.entries(selectOptions).map(([key, value]) => (
                        <option key={value} value={value}>
                            {key}
                        </option>
                    ))}
                </select>
                {formErrors.selectedValue && (
                    <p className="text-sm text-red-500">
                        {formErrors.selectedValue}
                    </p>
                )}
            </div>

            {/* Full Name */}
            <div className="mb-6">
                <label htmlFor="full-name" className="mb-1 block font-semibold">
                    Full Name
                </label>
                <input
                    type="text"
                    name="full_name"
                    value={fullNameInput}
                    className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-masis-green"
                    placeholder="Enter Full Name"
                    onChange={(e) => setFullName(e.target.value)}
                />
                {formErrors.fullNameInput && (
                    <p className="text-sm text-red-500">
                        {formErrors.fullNameInput}
                    </p>
                )}
            </div>

            {/* Email */}
            <div className="mb-6">
                <label htmlFor="email" className="mb-1 block font-semibold">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    value={emailInput}
                    className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-masis-green"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                {formErrors.emailInput && (
                    <p className="text-sm text-red-500">
                        {formErrors.emailInput}
                    </p>
                )}
            </div>

            {/* Phone */}
            <div className="mb-6">
                <label htmlFor="phone" className="mb-1 block font-semibold">
                    Phone Number
                </label>
                <input
                    type="tel"
                    name="phone"
                    value={phoneInput}
                    className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-masis-green"
                    placeholder="Enter Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                />
                {formErrors.phoneInput && (
                    <p className="text-sm text-red-500">
                        {formErrors.phoneInput}
                    </p>
                )}
            </div>

            {/* Description */}
            <div className="mb-6">
                <label htmlFor="about" className="mb-1 block font-semibold">
                    Job Description
                </label>
                <textarea
                    name="about"
                    value={aboutTextArea}
                    placeholder={aboutPlaceHolder}
                    className="min-h-[100px] w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-masis-green"
                    onChange={(e) => setAbout(e.target.value)}
                />
                {formErrors.aboutTextArea && (
                    <p className="text-sm text-red-500">
                        {formErrors.aboutTextArea}
                    </p>
                )}
            </div>

            {/* Submit Button (Full Width) */}
            <button
                type="submit"
                disabled={!isFormValid}
                className={`mt-4 w-full rounded px-6 py-3 text-sm font-semibold text-white transition ${
                    isFormValid
                        ? 'bg-masis-orange hover:bg-black'
                        : 'cursor-not-allowed bg-gray-300'
                }`}
            >
                Submit
            </button>
        </form>
    )
}

export default ContactForm
