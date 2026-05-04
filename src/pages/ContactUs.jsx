import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaDumbbell } from "react-icons/fa";


export default function ContactUs() {
    return (
        <div className="w-full sm:min-h-[60vh] min-h-screen bg-[#332467] pb-8">

            <div className="max-w-[1320px]  mx-auto flex  flex-col items-center pt-5">
                {/* Heading */}
                <div className="text-center mb-12 text-white p-2">
                    <h2 className="font-bold text-md text-[cyan] pb-5">
                        / GET IN TOUCH /
                    </h2>
                    <h1 className="text-3xl sm:text-4xl font-bold mt-2 sm:text-center text-justify">
                        I CAN HELP YOU GET IN SHAPE
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-100 sm:text-center text-justify">
                        Contact me, and I will create a plan designed especially for you.
                    </p>
                </div>

                {/* Cards */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:p-0 p-4">

                    {/* CALL */}
                    <div className="bg-white p-2 rounded-xl text-center shadow-lg hover:shadow-xl transition">
                        <FaPhoneAlt className="text-[#E268E0] text-2xl mx-auto mb-3" />
                        <h3 className="font-bold mb-2">CALL ME</h3>
                        <p className="text-gray-600 text-sm">
                            +1 (234) 567 89 00 <br />
                            +1 (234) 567 89 01
                        </p>
                    </div>

                    {/* MAIL */}
                    <div className="bg-white p-2 rounded-xl text-center shadow-lg hover:shadow-xl transition">
                        <FaEnvelope className="text-[#E268E0] text-2xl mx-auto mb-3" />
                        <h3 className="font-bold mb-2">MAIL ME</h3>
                        <p className="text-gray-600 text-sm">
                            e.mason@email.com <br />
                            help.mason@email.com
                        </p>
                    </div>

                    {/* LOCATION */}
                    <div className="bg-white p-2 rounded-xl text-center shadow-lg hover:shadow-xl transition">
                        <FaMapMarkerAlt className="text-[#E268E0] text-2xl mx-auto mb-3" />
                        <h3 className="font-bold mb-2">FIND ME</h3>
                        <p className="text-gray-600 text-sm">
                            45 Rockefeller Plaza,<br />
                            New York, NY 10111, USA
                        </p>
                    </div>

                    {/* PROGRAMS */}
                    <div className="bg-white p-2 rounded-xl text-center shadow-lg hover:shadow-xl transition">
                        <FaDumbbell className="text-[#E268E0] text-2xl mx-auto mb-3" />
                        <h3 className="font-bold mb-2">PROGRAMS</h3>
                        <button className="mt-2 px-4 py-2 bg-[#E268E0] text-white rounded-lg hover:bg-[#62D0DF] transition">
                            Choose now +
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}
