import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="w-full bg-[#3D3361] text-white   flex flex-col justify-around">

            {/* TOP SECTION */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between sm:gap-8 gap-4 text-center md:text-left">

                {/* LOGO */}
                <div className="p-2">
                    <Link to={'/'}>
                        <img src="/Img/logo.png" alt="" className='w-60 h-12 object-cover sm:ml-25 ml-6 p-1' />
                    </Link>
                </div>

                {/* NAVBAR */}
                <div className="flex flex-row gap-5 sm:gap-6 sm:text-[16px] text-[14px] font-normal justify-center">
                    <a href="/" className="hover:text-[#E268E0] transition">Home</a>
                    <a href="/about" className="hover:text-[#E268E0] transition">About</a>
                    <a href="/program-pages" className="hover:text-[#E268E0] transition">Programs</a>
                    <a href="/contact-now" className="hover:text-[#E268E0] transition">Contact</a>
                </div>

                {/* SOCIAL ICONS */}
                <div className="flex justify-center md:justify-end gap-3 sm:mr-20">

                    <div className="sm:w-12 sm:h-12 w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#E268E0] transition cursor-pointer">
                        <FaFacebookF  className="text-[20px] sm:text-[26]" />
                    </div>

                    <div className="sm:w-12 sm:h-12 w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#E268E0] transition cursor-pointer">
                        <FaInstagram  className="text-[20px] sm:text-[25px]" />
                    </div>

                    <div className="sm:w-12 sm:h-12 w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#E268E0] transition cursor-pointer">
                        <FaTwitter  className="text-[20px] sm:text-[25px]" />
                    </div>

                    <div className="sm:w-12 sm:h-12 w-9 h-9  flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#E268E0] transition cursor-pointer">
                        <FaLinkedinIn  className="text-[20px] sm:text-[25px]" />
                    </div>

                </div>

            </div>

            {/* DIVIDER */}
            <div className="w-full h-[1px] shadow-md bg-[#332467] mt-2 mb-3"></div>

            {/* COPYRIGHT */}
            <div className="text-center text-gray-400 text-md pb-2">
                © 2026 All Rights Reserved | Developed by ❤️{" "}
                <span className="text-[cyan] font-semibold">
                    Deepak Kushwaha
                </span>
            </div>

        </footer>
    );
}