import React from "react";
import { CgGym } from "react-icons/cg";
import { FaAppleAlt } from "react-icons/fa";
import { Link } from "react-router";

export default function TransformPage() {
    return (
        <div
            className="w-full sm:h-screen h-[110vh] bg-fixed bg-center  bg-cover relative z-2 sm:pt-0 pt-5"
            style={{ backgroundImage: "url('/Img/cta.png')" }}
        >
             

            {/* Content */}
            <div className="absolute sm:top-10 z-10 flex flex-col sm:ml-5  text-center px-3">

                {/* Heading */}
                <h1 className="text-3xl sm:text-5xl font-bold text-start text-white leading-tight max-w-3xl">
                    Make Your Step to the New Body
                </h1>

                {/* Description */}
                <p className="text-gray-300 mt-5 max-w-2xl text-lg text-start">
                    Combine active training with healthy food, stay motivated, and see results in less than one month!
                </p>

                {/* Cards */}
                <div className="flex sm:flex-row flex-col  gap-6 mt-12 max-w-4xl w-full">

                    {/* Programs */}
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 hover:bg-white/20 transition">
                        <div className="flex justify-center gap-5">
                               <CgGym className="text-white text-[24px]"/>
                            <h2 className="text-xl font-bold text-white mb-2">
                            Programs
                        </h2>
                        
                        </div>
                        <p className="text-gray-200">
                            Regular training sessions help to lose weight effectively.
                        </p>
                    </div>

                    {/* Nutrition */}
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 hover:bg-white/20 transition">
                       <div className="flex justify-center gap-5">
                        <FaAppleAlt className="text-white text-[24px]"/>
                         <h2 className="text-xl font-bold text-white mb-2">
                            Nutrition
                        </h2>
                       </div>
                        <p className="text-gray-200">
                            Proper nutrition plan keeps you healthy and active.
                        </p>
                    </div>

                </div>

                {/* Button */}
                <button className="mt-10 sm:w-50 px-6 py-3 bg-[#E268E0] text-white rounded-lg font-semibold hover:bg-[#62D0DF] transition">
                    <Link to={'/contact-now'}>Contact Me</Link>
                </button>

            </div>

        </div>
    );
}