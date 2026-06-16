import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'

export default function JoinCourse() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',


    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    let navigate = useNavigate()
    let token = localStorage.getItem('token')
    const handleSubmit = (event) => {
        event.preventDefault()

        if (token) {
            setFormData({
                fullName: '',
                email: '',
                phone: '',

            })
            navigate('/payment-page', {
                state: formData
            });
        }
        else {
            toast.warn("Login Now...");

            setTimeout(() => {
                navigate("/login-page");
            }, 1500);
        }


    }

    return (
        <main className="w-full bg-gray-100 mt-15">
            <ToastContainer />
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

                    <div className="p-10 bg-slate-50 ">
                        <h2 className="mb-4 ml-5 text-2xl text-slate-900">Candidate Details</h2>
                        <form onSubmit={handleSubmit} className="grid gap-8 m-5">
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



                            <button
                                type="submit"
                                className="py-3 px-5 rounded-xl bg-blue-600 text-white"
                            >
                                Proceed Now
                            </button>
                        </form>


                    </div>
                </section>
            </div>

        </main>
    )
}
