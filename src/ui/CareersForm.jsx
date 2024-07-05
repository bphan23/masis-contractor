import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function CareersForm() {
    const form = useRef()

    const [selectedValue, setSelectedValue] = useState('')
    const [fullNameInput, setFullName] = useState('')
    const [emailInput, setEmail] = useState('')
    const [phoneInput, setPhone] = useState('')
    const [aboutTextArea, setAbout] = useState('')

    let service_id = ''
    let template_id = ''
    let public_key = ''

    if (selectedValue === 'contractor') {
        // send to masis contractor email
        service_id = 'service_triys3q'
        template_id = 'template_yyidqrm'
        public_key = 'J0BoHxaeaOuJ_7oXU'
    } else if (selectedValue === 'cleaning') {
        // send to masis cleaning email
        service_id = 'service_28dpmrh'
        template_id = 'template_rkzm88d'
        public_key = 'Iskq673SmMmHylJBR'
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        emailjs
            .sendForm(service_id, template_id, form.current, {
                publicKey: public_key,
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
            className="mx-10 my-7 rounded-md border border-gray-200 bg-white px-5"
            ref={form}
            onSubmit={handleSubmit}
        >
            <div className="my-4">
                <label htmlFor="selected" className="mr-2 font-semibold">
                    Select Role:{' '}
                </label>
                <select
                    className="rounded-md border border-gray-300"
                    name="selected_value"
                    onChange={(event) => {
                        setSelectedValue(event.target.value)
                    }}
                >
                    <option value="none">Please Select</option>
                    <option value="contractor">Contractor</option>
                    <option value="cleaning">Cleaning</option>
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
                    className="mt-2 block w-1/2 rounded-md border border-gray-300 p-2"
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
                    className="mt-2 block w-1/2 rounded-md border border-gray-300 p-2"
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
                    className="mt-2 block w-1/2 rounded-md border border-gray-300 p-2"
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
                    className="mt-2 min-h-[100px] w-full rounded-md border border-gray-300 p-2"
                    type="text"
                    placeholder="Tell us a few sentences about yourself."
                    name="about"
                    onChange={(event) => {
                        setAbout(event.target.value)
                    }}
                />
            </div>

            {/* Upload Resume */}
            <div className="my-4">
                <label htmlFor="resume" className="font-semibold">
                    Please Upload Resume
                </label>
                <input
                    className="mt-2 block file:mr-5 file:rounded-md file:border-gray-300 file:bg-stone-100 file:px-6 file:py-1 hover:file:cursor-pointer hover:file:bg-stone-200"
                    type="file"
                    name="resume"
                    accept=".pdf, .docx"
                />
            </div>

            <div className="mb-5 flex flex-row justify-end">
                <button className="mr-4 rounded-md border border-gray-300 bg-stone-100 px-6 py-1 hover:bg-stone-200">
                    Clear
                </button>
                <button className="rounded-md border border-gray-300 bg-orange-500 px-6 py-1 hover:bg-orange-600">
                    Submit
                </button>
            </div>
        </form>
    )
}

export default CareersForm
