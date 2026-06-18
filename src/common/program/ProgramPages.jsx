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
                // console.log(finalRes);
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
                        let { programName, programImg, description, duration, price } = data
                        return (
                            <div
                                key={index}
                                className={`border-1 border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-5 
                                    }`}
                            >

                                {/* LEFT IMAGE */}
                                <div className="w-full sm:h-[600px] h-[300px] ">
                                    <img
                                        src={programImg}
                                        alt={programName}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* RIGHT TEXT */}
                                <div className="flex flex-col sm:gap-5 gap-3 sm:p-5 p-2">
                                    <h2 className="text-3xl sm:text-5xl font-bold">
                                        {programName}
                                    </h2>

                                    <div className="w-full  text-[16px] text-black flex sm:justify-start sm:gap-5 gap-6 ">

                                        <div className="flex items-center gap-2  "><FaClock className="text-[#E268E0]" />{duration} Months</div>
                                        <div className="flex items-center gap-2  "><CgGym className="text-[#E268E0]" /> Gym</div>
                                        <div className="flex items-center gap-2  "><FaAppleAlt className="text-[#E268E0]" /> Nutrition</div>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed text-[20px] text-justify">
                                        {description}
                                    </p>
                                    <p className="text-gray-600 leading-relaxed text-[20px]">
                                      Duraitons — <span className="text-green-600">{duration} Months</span> 
                                    </p>
                                    <p className="text-gray-600 leading-relaxed text-[20px]">
                                       Price —<span className="text-green-600"> ₹ {price}</span>
                                    </p>

                                    <button className="sm:mb-0 mb-3 w-fit px-6 py-3 bg-[#E268E0] text-white rounded-lg font-semibold hover:bg-[#62D0DF] transition">
                                        <Link to={'/join-us'} state={data}> Join Now →</Link>
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