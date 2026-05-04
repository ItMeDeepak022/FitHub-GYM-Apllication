import React from "react";
import { CgGym } from "react-icons/cg";
import { FaAppleAlt, FaClock } from "react-icons/fa";
import { Link } from "react-router";

export default function ProgramsPages() {
    const programs = [
        {
            title: "Ideal Body",
            desc: "Achieve a balanced and well-toned physique with a personalized fitness plan tailored to your body type and lifestyle. This program focuses on improving flexibility, endurance, posture, and overall fitness. With a combination of strength training, cardio, and guided routines, you will build a body that looks good, feels strong, and stays healthy in the long run. You will also receive expert guidance, progress tracking, and motivation to stay consistent throughout your fitness journey.",
            img: "/Img/ideal.webp",
            time: <><FaClock className="text-[#E268E0]" /> 6 Months</>,
            dest: <><CgGym className="text-[#E268E0]" /> Gym</>,
            nutrition: <><FaAppleAlt className="text-[#E268E0]" /> Nutrition</>
        },
        {
            title: "Weight Loss",
            desc: "Lose excess fat effectively through structured workouts and a scientifically designed nutrition plan. This program includes fat-burning exercises, high-intensity interval training (HIIT), and proper diet guidance to maximize calorie burn. Stay motivated with continuous progress tracking and achieve visible results in a short period while maintaining your energy and health. Our trainers ensure that your transformation is sustainable, safe, and tailored to your body’s needs without extreme dieting or shortcuts.",
            img: "/Img/weightloss.webp",
            time: <><FaClock className="text-[#E268E0]" /> 3 Months</>,
            dest: <><CgGym className="text-[#E268E0]" /> Fat Burn</>,
            nutrition: <><FaAppleAlt className="text-[#E268E0]" /> Diet Plan</>
        },
        {
            title: "Muscle Gain",
            desc: "Build lean muscle mass and increase strength with targeted resistance training and a high-protein nutrition strategy. This program is designed to help you grow muscle safely and efficiently through progressive overload techniques. Improve your strength, body structure, and confidence while maintaining proper recovery and balanced nutrition. Get expert support, customized workout plans, and consistent tracking to achieve long-lasting muscle growth and a powerful physique.",
            img: "/Img/gain.webp",
            time: <><FaClock className="text-[#E268E0]" /> 5 Months</>,
            dest: <><CgGym className="text-[#E268E0]" /> Strength</>,
            nutrition: <><FaAppleAlt className="text-[#E268E0]" /> High Protein</>
        },
    ];

    return (
        <div className="max-w-full bg-gray-100">
            <div className="max-w-[1320px] mx-auto  py-16">

                {/* Heading */}
                <div className="text-center mb-14">
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
                <div className="flex flex-col gap-16 p-5">

                    {programs.map((item, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >

                            {/* LEFT IMAGE */}
                            <div className="w-full h-[500px] ">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* RIGHT TEXT */}
                            <div className="flex flex-col gap-4">
                                <h2 className="text-3xl sm:text-5xl font-bold">
                                    {item.title}
                                </h2>

                                <div className="flex  gap-5">
                                    <div className="text-[16px] text-black flex items-center gap-2">
                                        {item.time}

                                    </div>

                                    <div className="text-[16px] text-black flex items-center gap-2">
                                        {item.dest}

                                    </div>

                                    <div className="text-[16px] text-black flex items-center gap-2">
                                        {item.nutrition}
                                    </div>
                                </div>

                                <p className="text-gray-600 leading-relaxed text-[20px]">
                                    {item.desc}
                                </p>

                                <button className="mt-4 w-fit px-6 py-3 bg-[#E268E0] text-white rounded-lg font-semibold hover:bg-[#62D0DF] transition">
                                    <Link to={'/join-us'} > Join Now →</Link>
                                </button>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
}