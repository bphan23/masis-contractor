import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function ContractorForm() {
    const form = useRef()

    const [selectedValue, setSelectedValue] = useState('')
    const [fullNameInput, setFullName] = useState('')
    const [emailInput, setEmail] = useState('')
    const [phoneInput, setPhone] = useState('')
    const [aboutTextArea, setAbout] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        emailjs
            .sendForm('service_triys3q', 'template_1yb0x8v', form.current, {
                publicKey: 'J0BoHxaeaOuJ_7oXU',
            })
            .then(
                () => {
                    // want to display toast alert
                    // toast.success('Email successfully sent!', {
                    //     id: 'success-construction',
                    // })
                    alert('Email successfully sent!')
                    console.log('SUCCESS!')
                },
                (error) => {
                    // toast.error('Sending Email Failed...', {
                    //     id: 'fail-construction',
                    // })
                    alert(error.text)
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
                    Contractor Job:
                </label>
                <select
                    className="rounded-md border border-gray-300"
                    name="selected_value"
                    onChange={(event) => {
                        setSelectedValue(event.target.value)
                    }}
                >
                    <option value="none">Please Select</option>
                    <option value="granite-marble">Granite & Marble</option>
                    <option value="tile-floor">Tile & Flooring</option>

                    <option value="kitchen-remodel">Kitchen Remodel</option>
                    <option value="bathroom-remodel">Bathroom Remodel</option>

                    <option value="commerical-cleaning">
                        Commerical Cleaning
                    </option>
                    <option value="residential-cleaning">
                        Residential Cleaning
                    </option>
                    <option value="other-job">Other Job</option>
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
                    id="phone"
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
                    placeholder="Tell us a few sentences about what construction work you need done..."
                    name="about"
                    onChange={(event) => {
                        setAbout(event.target.value)
                    }}
                />
            </div>

            <div className="mb-5 flex flex-row justify-end">
                <button
                    className="mr-4 rounded-md border border-gray-300 bg-stone-100 px-6 py-1 hover:bg-stone-200"
                    type="clear"
                >
                    Clear
                </button>
                <button
                    className="rounded-md border border-gray-300 bg-orange-500 px-6 py-1 hover:bg-orange-600"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

export default ContractorForm
