import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast, ToastContainer } from 'react-toastify'

export default function LogOut() {
    let [show, setshow] = useState(true)

    let letshowForm = () => {
        setshow(!show)
    }
    let navigate = useNavigate()


    let apiUrl = import.meta.env.VITE_UserUrl


    const handleSubmit = (e) => {
        e.preventDefault()

        if (show) {
            let obj = {
                email: e.target.email.value,
                password: e.target.password.value,
            };
            axios.post(`${apiUrl}/user-login`, obj)
                .then((res) => res.data)
                .then((finalRes) => {
                    // console.log(finalRes);
                    if (finalRes.status) {
                        toast.success(finalRes.message)

                        e.target.reset()
                        localStorage.setItem("token", finalRes.token);
                        localStorage.setItem("userName", finalRes.userName);
                        setTimeout(() => {
                            navigate('/user/home')
                        }, 1500);
                    }
                    else {
                        toast.error(finalRes.message)
                    }
                })

        }

        else {
            let obj = {
                name: e.target.name.value,
                email: e.target.email.value,
                mobileNumber: e.target.mobileNumber.value,
                gender: e.target.gender.value,
                password: e.target.password.value,
            };
            axios.post(`${apiUrl}/user-register`, obj)
                .then((res) => res.data)
                .then((finalRes) => {
                    if (finalRes.status) {
                        toast.success(finalRes.message)
                        e.target.reset()
                        letshowForm()

                    }
                    else
                        toast.error(finalRes.message)
                    

                })


        }




    };

    return (
        <>
            <ToastContainer />
            <div className="min-h-screen  flex items-center justify-center sm:px-4 py-10 mt-6">
                <div className="max-w-6xl w-full sm:rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
                    <div className="w-full relative sm:h-full h-70 text-white p-10 flex items-center justify-center">
                        <img
                            src="https://media.istockphoto.com/id/2024478090/photo/cyber-security-and-security-password-login-online-concept-hands-typing-and-entering-username.jpg?s=612x612&w=0&k=20&c=elPdTy1bW-oUcqapbjVZi7LvUEB25TG-Cbuy7JlF0Ew="
                            alt="Fitness gym"
                            className="absolute inset-0 h-full w-full object-cover opacity-80"
                        />
                        <div className="relative sm:block hidden z-10 text-center space-y-4">
                            <p className="text-sm uppercase tracking-[0.3em] opacity-90">fitHub Gym</p>
                            <h1 className="text-4xl md:text-5xl font-bold">Welcome to</h1>
                            <p className="text-lg md:text-xl max-w-xs mx-auto leading-relaxed">
                                Join our community and start your fitness journey with confidence.
                            </p>
                        </div>

                    </div>

                    <div className="sm:p-3 p-5 md:p-[0px_40px] sm:h-[620px] flex items-center justify-center">

                        {
                            show ?
                                // Login pages Desgin 
                                <div className="w-full leading-8 ">
                                    <div className="mb-8">
                                        <h2 className="text-3xl mb-10 font-semibold text-gray-900">Login</h2>
                                        <p className="mt-2 text-sm text-gray-500">
                                            Enter your email and password to access your account.
                                        </p>
                                    </div>
                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                name='email'
                                                placeholder="you@example.com"
                                                className="mt-2 block w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                                Password
                                            </label>
                                            <input
                                                id="password"
                                                name='password'
                                                type="password"
                                                placeholder="Enter your password"
                                                className="mt-2 block w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                                            />
                                        </div>
                                        <button

                                            type="submit"
                                            className="w-full rounded-2xl bg-indigo-600 px-5 py-3 text-white text-base font-semibold transition hover:bg-indigo-700"
                                        >
                                            Login In
                                        </button>
                                    </form>
                                    <div className="mt-6 text-center cursor-pointer  text-sm text-gray-500">
                                        <p onClick={letshowForm}>
                                            New to fitHub? <span className="text-indigo-600 font-medium">Create account</span>
                                        </p>
                                    </div>
                                </div>

                                :
                                // Create Account Design 
                                <div className="w-full h-[640px] sm:p-0 ">

                                    <div className="mb-1">
                                        <h2 className="text-3xl font-semibold text-gray-900">
                                            Create New Account
                                        </h2>
                                        <p className="mt-2 text-sm text-gray-500">
                                            Create your new account to login.
                                        </p>
                                    </div>

                                    <form className="space-y-4" onSubmit={handleSubmit}>

                                        {/* Name */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Name
                                            </label>
                                            <input
                                                name="name"
                                                type="text"
                                                placeholder="Enter your name"
                                                className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Email
                                            </label>
                                            <input
                                                name="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
                                            />
                                        </div>

                                        {/* Mobile */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Mobile Number
                                            </label>
                                            <input
                                                name="mobileNumber"
                                                type="tel"
                                                placeholder="Enter mobile number"
                                                className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
                                            />
                                        </div>

                                        {/* Gender */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Gender
                                            </label>
                                            <select
                                                name="gender"
                                                className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
                                            >
                                                <option value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        {/* Password */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Password
                                            </label>
                                            <input
                                                name="password"
                                                type="password"
                                                placeholder="Enter your password"
                                                className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
                                            />
                                        </div>

                                        {/* Button */}
                                        <button
                                            type="submit"
                                            className="w-full rounded-2xl bg-indigo-600 px-5 py-3 text-white font-semibold hover:bg-indigo-700 transition"
                                        >
                                            Create Account
                                        </button>
                                    </form>

                                    {/* Footer */}
                                    <div className="sm:mt-3 sm:mb-5 mb-5 mt-5  text-center text-sm text-gray-500">
                                        <p onClick={letshowForm} className="cursor-pointer">
                                            Already have an account?{" "}
                                            <span className="text-indigo-600 font-medium">Login now</span>
                                        </p>
                                    </div>
                                </div>

                        }
                    </div>
                </div>
            </div>
        </>
    )
}
