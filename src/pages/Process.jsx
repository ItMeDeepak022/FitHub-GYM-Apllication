import React from "react";
import { Link } from "react-router";

export default function Process() {
    const steps = [
        {
            id: "01",
            title: "Pick a program",
            desc: "I offer a variety of programs you can join in my gym or online.",
        },
        {
            id: "02",
            title: "Make a payment",
            desc: "You can pay monthly or per each session.",
        },
        {
            id: "03",
            title: "Get an invitation",
            desc: "I'll send you details about training sessions.",
        },
        {
            id: "04",
            title: "Start training",
            desc: "Join me online or offline and start losing weight right away!",
        },
    ];

    return (
        <section className="w-full pb-10 px-6 bg-[#F3F2F8]">

            <div className="max-w-7xl mx-auto text-center">

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-gray-800">
                    How to Start
                </h2>

                <p className="mt-4 text-gray-600 text-lg">
                    Start Training Today
                </p>

                <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
                    Only four easy steps to the body of your dreams:
                </p>

                {/* Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-[#2A1F4F] p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300 text-left"
                        >
                            {/* Number */}
                            <h3 className="text-4xl font-bold text-[#E268E0] mb-4">
                                {step.id}
                            </h3>

                            {/* Title */}
                            <h4 className="text-xl font-semibold text-white mb-2">
                                {step.title}
                            </h4>

                            {/* Description */}
                            <p className="text-gray-300 text-sm">
                                {step.desc}
                            </p>
                        </div>
                    ))}

                </div>

                {/* Button */}
                <button className="mt-12 bg-[#E268E0] hover:bg-[#62D0DF] text-white px-8 py-3 rounded-lg font-semibold uppercase tracking-wide transition-all duration-300 hover:scale-105">
                    <Link to={'/join-us'}>Get Started Now</Link>
                </button>

            </div>
        </section>
    );
}