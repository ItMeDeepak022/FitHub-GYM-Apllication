import React, { useEffect, useState } from 'react'
import { FaGreaterThan, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router'
import { FaUser, FaEnvelope, FaDumbbell, FaPaperPlane } from "react-icons/fa";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../Loader';

export default function ContactNow() {
    const apiUrl = import.meta.env.VITE_AdminUrl;
    const [active, setActive] = useState(null);



    const toggle = (index) => {
        setActive(active === index ? null : index);
    };
    let [loader, setloader] = useState(false)

    let submitData = (e) => {
        e.preventDefault()
        setloader(true)
        let obj = {
            name: e.target.name.value,
            email: e.target.email.value,
            program: e.target.program.value,
            message: e.target.message.value,
            phone: e.target.phone.value,
        }

        axios.post(
            `${apiUrl}/add-query`, obj
        ).then((res) => res.data)
            .then((finalRes) => {
                if (finalRes.status) {
                    setloader(false)
                    e.target.reset();
                    toast.success(finalRes.message);
                }
            })
    }

    const apiWebUrl = import.meta.env.VITE_WebAPI;


    let [faqs, setfaq] = useState([])
    let getfaqdata = () => {

        axios.get(
            `${apiWebUrl}/fetch-faq`).then((res) => res.data)
            .then((finalRes) => {
                // console.log(finalRes);

                setfaq(finalRes.data)
            })
    }

    useEffect(() => {
        getfaqdata()
    }, [])

    return (
        <>
            <ToastContainer />
            <div className="w-full h-50 bg-[#332467] mt-5 flex flex-col sm:gap-5 gap-3 justify-center items-center sm:mt-15 mt-10">
                <h1 className="sm:text-[50px] text-[40px] text-white font-bold">Contact Now</h1>

                <div className="flex items-center gap-5 ">
                    <p className="text-[17px] text-[#E268E0] font-bold"><Link to={'/'}>Home</Link>  </p>
                    <FaGreaterThan className="text-[17px] text-[cyan] mt-1" />
                    <p className="text-[17px] text-white font-bold">Contact Now</p>
                </div>
            </div>

            <div className="w-full  py-12 px-4 sm:px-10 md:px-20">

                <div className="max-w-[1120px] mx-auto grid sm:grid-cols-[40%_60%] grid-cols-1 gap-10">

                    {/* CONTACT FORM */}


                    <div className="max-w-[500px] bg-white/10 backdrop-blur-md rounded-[10px] p-6 sm:p-8 border border-gray-200">

                        {/* Heading */}
                        <h2 className="text-3xl font-bold mb-2 text-gray-800">
                            Get in Touch 💬
                        </h2>
                        <p className="text-gray-500 mb-6 text-sm">
                            Let’s build your fitness journey together
                        </p>

                        <form className="space-y-5" onSubmit={submitData}>

                            {/* NAME */}
                            <div className="relative">
                                <FaUser className="absolute top-4 left-3 text-gray-400" />
                                <input
                                    type="text"
                                    name='name'
                                    required
                                    placeholder="Your Name"
                                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E268E0] focus:border-transparent transition"
                                />
                            </div>

                            {/* EMAIL */}
                            <div className="relative">
                                <FaEnvelope className="absolute top-4 left-3 text-gray-400" />
                                <input
                                    type="email"
                                    name='email'
                                    required
                                    placeholder="Your Email"
                                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E268E0] focus:border-transparent transition"
                                />
                            </div>

                            <div className="relative">
                                <FaPhone className="absolute top-4 left-3 text-gray-400" />
                                <input
                                    type="phone"
                                    name='phone'
                                    maxLength={10}
                                    required
                                    placeholder="Mobile Number"
                                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E268E0] focus:border-transparent transition"
                                />
                            </div>

                            {/* PROGRAM */}
                            <div className="relative">
                                <FaDumbbell className="absolute top-4 left-3 text-gray-400" />
                                <select
                                    name='program'
                                    required
                                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E268E0] focus:border-transparent transition">
                                    <option value={''}>Select Program</option>
                                    <option value={'weight-loss'}>Weight Loss</option>
                                    <option value={'muscle-gain'}>Muscle Gain</option>
                                    <option value={'fit-body'}>General Fitness</option>
                                </select>
                            </div>

                            {/* MESSAGE */}
                            <textarea
                                placeholder="Write your message..."
                                rows="4"
                                name='message'
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E268E0] focus:border-transparent transition"
                            ></textarea>

                            {/* BUTTON */}
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-5 py-3 hover:bg-[#332467] bg-[#62D0DF] text-white rounded-lg font-semibold   transition-all duration-300 shadow-md"
                            >
                                <div className='flex items-center gap-2'>
                                    <FaPaperPlane />
                                    Send Message
                                </div>
                                {
                                    loader ?
                                        <Loader />
                                        : ''
                                }
                            </button>

                        </form>
                    </div>

                    {/* FAQ SECTION */}
                    <div className="max-w-full max-w-2xl mx-auto py-10 px-4">

                        <h2 className="text-3xl font-bold text-center mb-8">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-4">

                            {faqs.map((item, index) => (
                                <div
                                    key={index}
                                    className="border rounded-xl overflow-hidden shadow-sm"
                                >

                                    {/* QUESTION */}
                                    <button
                                        onClick={() => toggle(index)}
                                        className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition"
                                    >
                                        <span className="font-semibold text-left">
                                            {item.question}
                                        </span>

                                        <span className="text-xl">
                                            {active === index ? "−" : "+"}
                                        </span>
                                    </button>

                                    {/* ANSWER */}
                                    {active === index && (
                                        <div className="p-4 bg-gray-50 text-gray-600 text-sm">
                                            {item.answer}
                                        </div>
                                    )}

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
