import React, { useState } from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import { Link } from 'react-router'
import { FaUser, FaEnvelope, FaDumbbell, FaPaperPlane } from "react-icons/fa";

export default function ContactNow() {
    const [active, setActive] = useState(null);

    const faqs = [
        {
            question: "What are the gym hours?",
            answer: "Our gym is open from 6 AM to 10 PM daily.",
        },
        {
            question: "Do you offer personal training?",
            answer: "Yes, we have certified personal trainers available.",
        },
        {
            question: "What programs do you have?",
            answer:
                "We offer weight loss, muscle gain, and general fitness programs.",
        },
    ];

    const toggle = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <>
            <div className="w-full h-50 bg-[#332467] mt-5 flex flex-col gap-5 justify-center items-center mt-15">
                <h1 className="text-[50px] text-white font-bold">Contact Now</h1>

                <div className="flex items-center gap-5 ">
                    <p className="text-[20px] text-[#E268E0] font-bold"><Link to={'/'}>Home</Link>  </p>
                    <FaGreaterThan className="text-[20px] text-[cyan] mt-1" />
                    <p className="text-[20px] text-white font-bold">Contact Now</p>
                </div>
            </div>

            <div className="w-full  py-12 px-4 sm:px-10 md:px-20">

                <div className="max-w-[1120px] mx-auto grid grid-cols-[40%_60%] md:grid-cols-2 gap-10">

                    {/* CONTACT FORM */}


                    <div className="w-[500px] bg-white/10 backdrop-blur-md rounded-[10px] p-6 sm:p-8 border border-gray-200">

                        {/* Heading */}
                        <h2 className="text-3xl font-bold mb-2 text-gray-800">
                            Get in Touch 💬
                        </h2>
                        <p className="text-gray-500 mb-6 text-sm">
                            Let’s build your fitness journey together
                        </p>

                        <form className="space-y-5">

                            {/* NAME */}
                            <div className="relative">
                                <FaUser className="absolute top-4 left-3 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E268E0] focus:border-transparent transition"
                                />
                            </div>

                            {/* EMAIL */}
                            <div className="relative">
                                <FaEnvelope className="absolute top-4 left-3 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E268E0] focus:border-transparent transition"
                                />
                            </div>

                            {/* PROGRAM */}
                            <div className="relative">
                                <FaDumbbell className="absolute top-4 left-3 text-gray-400" />
                                <select className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E268E0] focus:border-transparent transition">
                                    <option>Select Program</option>
                                    <option>Weight Loss</option>
                                    <option>Muscle Gain</option>
                                    <option>General Fitness</option>
                                </select>
                            </div>

                            {/* MESSAGE */}
                            <textarea
                                placeholder="Write your message..."
                                rows="4"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E268E0] focus:border-transparent transition"
                            ></textarea>

                            {/* BUTTON */}
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 py-3 bg-[#332467] hover:bg-[#62D0DF] text-white rounded-lg font-semibold   transition-all duration-300 shadow-md"
                            >
                                <FaPaperPlane />
                                Send Message
                            </button>

                        </form>
                    </div>

                    {/* FAQ SECTION */}
                    <div className="w-full max-w-2xl mx-auto py-10 px-4">

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
