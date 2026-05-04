import React from 'react'
import { FaAppleAlt, FaClock } from 'react-icons/fa'
import { CgGym } from "react-icons/cg";
import { Link } from 'react-router';


export default function Program() {
    return (
        <section id='program' className="w-full py-16 px-4 bg-[#F3F2F8] text-center">
            <div className='max-w-[1320px] mx-auto'>

                <b className='text-center uppercase text-[#E268E0] block pb-5'> <span className='text-[cyan]'>/ </span> Programs <span className='text-[cyan]'> /</span></b>
                {/* Heading */}
                <h1 className="sm:text-[60px] text-[50px] font-bold uppercase mb-4">
                    Choose a Program
                </h1>

                {/* Description */}
                <p className="text-gray-600 sm:text-center text-justify mb-12 text-2xl">
                    Select a program that suits your fitness goals. Whether you want to build muscle,
                    lose weight, or improve overall health — we’ve got you covered.
                </p>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
                        <img
                            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
                            alt="Ideal Body"
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-6 text-left">
                            <h2 className="text-xl font-semibold mb-2">Ideal Body</h2>

                            <div className="flex justify-between flex-wrap gap-2">
                                <div className="text-[16px] text-black flex items-center gap-2">
                                    <FaClock className="text-[#E268E0]" />
                                    <p>6 months</p>
                                </div>

                                <div className="text-[16px] text-black flex items-center gap-2">
                                    <CgGym className="text-[#E268E0]" />
                                    <p>GYM</p>
                                </div>

                                <div className="text-[16px] text-black flex items-center gap-2">
                                    <FaAppleAlt className="text-[#E268E0]" />
                                    <p> Nutrition</p>
                                </div>
                            </div>

                            <p className="text-gray-600 text-sm mt-3">
                                Achieve a perfect body you've always dreamed of. My Ideal Body
                                program includes training 2 times a week.
                            </p>

                            <div className='mt-5  text-center'>
                                <button className="bg-[#62D0DF] hover:bg-[#E268E0] text-white px-5 py-3 rounded-[20px] font-normal text-[15px] uppercase tracking-wide transition-all duration-300">
                                    <Link to={'/program-pages'}>More Details</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
                        <img
                            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b"
                            alt="Weight Loss"
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-6 text-left">
                            <h2 className="text-xl font-semibold mb-2">Weight Loss</h2>

                            <div className="flex justify-between flex-wrap gap-2">
                                <div className="text-[16px] text-black flex items-center gap-2">
                                    <FaClock className="text-[#E268E0]" />
                                    <p>3 months</p>
                                </div>

                                <div className="text-[16px] text-black flex items-center gap-2">
                                    <CgGym className="text-[#E268E0]" />
                                    <p>Cardio</p>
                                </div>

                                <div className="text-[16px] text-black flex items-center gap-2">
                                    <FaAppleAlt className="text-[#E268E0]" />
                                    <p> Nutrition</p>
                                </div>
                            </div>

                            <p className="text-gray-600 text-sm mt-3">
                                Burn fat and stay fit with structured workouts and proper diet planning.
                            </p>
                            <div className='mt-5  text-center'>
                                <button className="bg-[#62D0DF] hover:bg-[#E268E0] text-white px-5 py-3 rounded-[20px] font-normal text-[15px] uppercase tracking-wide transition-all duration-300">
                                    <Link to={'/program-pages'}>More Details</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
                        <img
                            src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
                            alt="Muscle Gain"
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-6 text-left">
                            <h2 className="text-xl font-semibold mb-2">Muscle Gain</h2>

                            <div className="flex justify-between flex-wrap gap-2">
                                <div className="text-[16px] text-black flex items-center gap-2">
                                    <FaClock className="text-[#E268E0]" />
                                    <p>5 months</p>
                                </div>

                                <div className="text-[16px] text-black flex items-center gap-2">
                                    <CgGym className="text-[#E268E0]" />
                                    <p>Gym</p>
                                </div>

                                <div className="text-[16px] text-black flex items-center gap-2">
                                    <FaAppleAlt className="text-[#E268E0]" />

                                    <p> Nutrition</p>
                                </div>
                            </div>

                            <p className="text-gray-600 text-sm mt-3">
                                Build strength and muscle with progressive overload training.
                            </p>
                            <div className='mt-5  text-center'>
                                <button className="bg-[#62D0DF] hover:bg-[#E268E0] text-white px-5 py-3 rounded-[20px] font-normal text-[15px] uppercase tracking-wide transition-all duration-300">
                                    <Link to={'/program-pages'}>More Details</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
