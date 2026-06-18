import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
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

    let { state } = useLocation()
    let { programName, programImg } = state
    


    return (
        <main className="w-full bg-gray-100 mt-15">
            <ToastContainer />
            <div className='max-w-full mx-auto'>
                <section className="w-full sm:mb-7 sm:text-center text-start p-5">
                    <h1 className="sm:text-6xl text-4xl font-bold mb-3 text-slate-800">Join the Gym Courses</h1>
                    <p className="leading-7 text-slate-600 tsm:ext-[20px] text-[18px]">
                        Become part of our training community. Choose your program, tell us a bit about yourself, and get ready to reach your fitness goals.
                    </p>
                </section>

                <section className="max-w-full grid gap-0 lg:grid-cols-[60%_auto] grid-cols-1 pb-0">
                    {
                        state ?
                            <div className="w-full sm:h-[635px] h-full relative">
                                <img className='w-full sm:h-full h-[350px]  sm:object-center sm:object-top'
                                 src={programImg} alt={programName} />

                                <div className='absolute bottom-2 left-3'>
                                    <h1 className='sm:text-[50px] text-[40px] text-[cyan] font-bold'> {programName}</h1>
                                </div>

                            </div>
                            :
                            <div className='text-red-500 text-3xl sm:text-start text-center'>No Data founds...</div>
                    }

                    <div className="sm:p-10 p-5 bg-slate-50 ">
                        <h2 className="mb-4 ml-5 text-2xl text-slate-900">Candidate Details</h2>
                        <form onSubmit={handleSubmit} className="grid sm:gap-8 gap-4 m-5">
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
