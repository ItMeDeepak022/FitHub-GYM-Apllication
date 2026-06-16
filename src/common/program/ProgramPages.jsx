import axios from "axios";
import React, { useEffect, useState } from "react";
import { CgGym } from "react-icons/cg";
import { FaAppleAlt, FaClock } from "react-icons/fa";
import { Link } from "react-router";

export default function ProgramsPages() {
    const apiUrl = import.meta.env.VITE_WebAPI;

    
    let [program, setprogram] = useState([])
    let getprogramdata = () => {
        axios.get(
            `${apiUrl}/fetch-program`).then((res) => res.data)
            .then((finalRes) => {
                console.log(finalRes);
                setprogram(finalRes.data)
            })
    }

    useEffect(() => {
        getprogramdata()
    }, [])

    return (
        <div className="max-w-full bg-white">
            <div className="max-w-[1320px] mx-auto  py-16">

                {/* Heading */}
                <div className="text-center sm:mb-14 mb-8">
                    <h2 className="text-purple-600 tracking-widest text-md">
                        / PROGRAMS /
                    </h2>
                    <h1 className="text-4xl sm:text-6xl font-bold mt-2">
                        Choose Your Fitness Program 💪
                    </h1>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Select the program that fits your goal and start your transformation today.
                    </p>
                </div>

                {/* Program Sections */}
                <div className="flex flex-col gap-10 sm:p-5 p-2 ">

                    {program.map((data, index) => {
                        let { programName, programImg, description, duration,price } = data
                        return (
                            <div
                                key={index}
                                className={`border-1 border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-16 items-center 
                                    }`}
                            >

                                {/* LEFT IMAGE */}
                                <div className="w-full h-[500px] ">
                                    <img
                                        src={programImg}
                                        alt={programName}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* RIGHT TEXT */}
                                <div className="flex flex-col gap-4 sm:p-0 p-5">
                                    <h2 className="text-3xl sm:text-5xl font-bold">
                                        {programName}
                                    </h2>

                                    <div className="flex  gap-5">
                                        <div className="text-[16px] text-black flex items-center gap-5">

                                            <FaClock className="text-[#E268E0]" />{duration} Months
                                            <CgGym className="text-[#E268E0]" /> Gym
                                            <FaAppleAlt className="text-[#E268E0]" /> Nutrition
                                        </div>




                                    </div>
                                    <p className="text-gray-600 leading-relaxed text-[20px]">
                                        {description}
                                    </p>
                                    <p className="text-gray-600 leading-relaxed text-[20px]">
                                        {duration} Months
                                    </p>
                                    <p className="text-gray-600 leading-relaxed text-[20px]">
                                        ₹ {price}
                                    </p>

                                    <button className="mt-4 w-fit px-6 py-3 bg-[#E268E0] text-white rounded-lg font-semibold hover:bg-[#62D0DF] transition">
                                        <Link to={'/join-us'} > Join Now →</Link>
                                    </button>
                                </div>

                            </div>
                        )
                    })}

                </div>

            </div>
        </div>
    );
}