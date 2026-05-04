import React, { useState } from 'react'

export default function JoinCourse() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        course: '',
        startDate: '',
        price: '',
        duration: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Join course request:', formData)
        alert('Your request has been submitted!')
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            course: '',
            startDate: '',
            price: '',
            duration: '',
        })
    }

    return (
        <main className="w-full bg-gray-100 mt-15">

            <div className='max-w-full mx-auto'>
                <section className="w-full mb-7 sm:text-center text-start p-5">
                    <h1 className="sm:text-6xl text-4xl font-bold mb-3 text-slate-800">Join the Gym Courses</h1>
                    <p className="leading-7 text-slate-600 tsm:ext-[20px] text-[18px]">
                        Become part of our training community. Choose your program, tell us a bit about yourself, and get ready to reach your fitness goals.
                    </p>
                </section>

                <section className="w-full grid gap-0 lg:grid-cols-[60%_auto] pb-0">
                    <div className="w-full h-full flex flex-col ">
                        <div className='w-full h-full relative'>
                            <img className='w-full h-[300px] object-cover' src="/Img/ideal.webp" alt="Ideal body" />

                            <div className='absolute bottom-2 left-1'>
                                <h1 className='sm:text-[50px] text-[40px] text-[white] font-bold'>Ideal Body</h1>
                            </div>
                        </div>
                        <div className='w-full h-full relative'>
                            <img className='w-full h-[300px] object-cover' src="/Img/weightloss.webp" alt="weight loss" />
                            <div className='absolute bottom-2 left-1'>
                                <h1 className='sm:text-[50px] text-[40px] text-[white] font-bold'>Weight Loss</h1>
                            </div>
                        </div>
                        <div className='w-full h-full relative'><img className='w-full h-[300px] object-cover' src="/Img/gain.webp" alt="muscel gain" />
                            <div className='absolute bottom-2 left-1'>
                                <h1 className='sm:text-[50px] text-[40px] text-[white] font-bold'>Muscel Gain</h1>
                            </div>
                        </div>


                    </div>

                    <div className="p-5 m-[0px_30px] bg-slate-50 rounded-2xl">
                        <h2 className="mb-4 text-2xl text-slate-900">Candidate Details</h2>
                        <form onSubmit={handleSubmit} className="grid gap-4">
                            <label className="grid gap-2 text-slate-700">
                                Full Name
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                    className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                            </label>

                            <label className="grid gap-2 text-slate-700">
                                Email Address
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                    className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                            </label>

                            <label className="grid gap-2 text-slate-700">
                                Phone Number
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    required
                                    className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                            </label>

                            <label className="grid gap-2 text-slate-700">
                                Course Goal
                                <select
                                    name="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                    className="p-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                                >
                                    <option>Not Selected</option>
                                    <option>Ideal Body</option>
                                    <option>Weight Loss</option>
                                    <option>Muscle Gain</option>

                                </select>


                            </label>

                            <label className="grid gap-2 text-slate-700">
                                Course Duration
                                <select
                                    name="duration"
                                    value={formData.duration}
                                    onChange={handleChange}
                                    className="p-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                                ><option>Not Selected</option>
                                    <option>6 Months</option>
                                    <option>3 Months</option>
                                    <option>5 Months</option>
                                </select>
                            </label>


                            <label className="grid gap-2 text-slate-700">
                                Course Price
                                <select
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="p-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                                >   <option>Not Selected</option>
                                    <option>₹ 5999</option>
                                    <option>₹ 2999</option>
                                    <option>₹ 4999</option>
                                </select>
                            </label>

                            <label className="grid gap-2 text-slate-700">
                                Preferred Start Date
                                <input
                                    type="date"
                                    name="startDate"
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    className="p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                            </label>

                            <button
                                type="submit"
                                className="py-3 px-5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                            >
                                Submit Request
                            </button>
                        </form>


                    </div>
                </section>
            </div>

        </main>
    )
}
