import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function CleaningForm() {
    const form = useRef()

    const [selectedValue, setSelectedValue] = useState('')
    const [fullNameInput, setFullName] = useState('')
    const [emailInput, setEmail] = useState('')
    const [phoneInput, setPhone] = useState('')
    const [aboutTextArea, setAbout] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        emailjs
            .sendForm('service_28dpmrh', 'template_vegmxhq', form.current, {
                publicKey: 'Iskq673SmMmHylJBR',
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
            className="mx-10 mb-7 rounded-md border border-gray-200 bg-white px-5"
            ref={form}
            onSubmit={handleSubmit}
        >
            <div className="my-4">
                <label htmlFor="selected" className="mr-2 font-semibold">
                    Select Cleaning Service:{' '}
                </label>
                <select
                    className="rounded-md border border-gray-300"
                    name="selected_value"
                    onChange={(event) => {
                        setSelectedValue(event.target.value)
                    }}
                >
                    <option value="none">Please Select</option>
                    <option value="commerical-cleaning">
                        Commerical Cleaning
                    </option>
                    <option value="residential-cleaning">
                        Residential Cleaning
                    </option>
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
                    onChange={(event) => {
                        setFullName(event.target.value)
                    }}
                    className="mt-2 block w-1/2 rounded-md border border-gray-300 p-2"
                    placeholder="Enter Full Name"
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
                    onChange={(event) => {
                        setEmail(event.target.value)
                    }}
                    className="mt-2 block w-1/2 rounded-md border border-gray-300 p-2"
                    placeholder="Enter Email"
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
                    onChange={(event) => {
                        setPhone(event.target.value)
                    }}
                    className="mt-2 block w-1/2 rounded-md border border-gray-300 p-2"
                    placeholder="Enter Phone Number"
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
                    placeholder="Tell us a few sentences about what you need cleaned..."
                    name="about"
                    onChange={(event) => {
                        setAbout(event.target.value)
                    }}
                />
            </div>

            <div className="mb-5 flex flex-row justify-end">
                <button className="mr-4 rounded-md bg-stone-100 px-6 py-1 file:border-none hover:bg-stone-200">
                    Clear
                </button>
                <button className="rounded-md border border-gray-300 bg-orange-500 px-6 py-1 hover:bg-orange-600">
                    Submit
                </button>
            </div>
        </form>
    )
}

export default CleaningForm
