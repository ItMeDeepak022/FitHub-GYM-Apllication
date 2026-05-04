import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="w-full bg-[#3D3361] text-white py-10  flex flex-col justify-around">

            {/* TOP SECTION */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-center md:text-left">

                {/* LOGO */}
                <div>
                    <Link to={'/'}>
                        <img src="/Img/logo.png" alt="" className='w-60 h-12 object-cover sm:ml-31 ml-13' />
                    </Link>
                </div>

                {/* NAVBAR */}
                <div className="flex flex-row gap-5 sm:gap-6 text-[18px] font-normal justify-center">
                    <a href="/" className="hover:text-[#E268E0] transition">Home</a>
                    <a href="/about" className="hover:text-[#E268E0] transition">About</a>
                    <a href="/program" className="hover:text-[#E268E0] transition">Programs</a>
                    <a href="/contact" className="hover:text-[#E268E0] transition">Contact</a>
                </div>

                {/* SOCIAL ICONS */}
                <div className="flex justify-center md:justify-end gap-3 sm:mr-20">

                    <div className="w-13 h-13 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#E268E0] transition cursor-pointer">
                        <FaFacebookF size={26} />
                    </div>

                    <div className="w-13 h-13 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#E268E0] transition cursor-pointer">
                        <FaInstagram size={26} />
                    </div>

                    <div className="w-13 h-13 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#E268E0] transition cursor-pointer">
                        <FaTwitter size={26} />
                    </div>

                    <div className="w-13 h-13 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#E268E0] transition cursor-pointer">
                        <FaLinkedinIn size={26} />
                    </div>

                </div>

            </div>

            {/* DIVIDER */}
            <div className="w-full h-[1px] shadow-md bg-[#332467] my-6"></div>

            {/* COPYRIGHT */}
            <div className="text-center text-gray-400 text-md sm:text-md">
                © 2026 All Rights Reserved | Developed by ❤️{" "}
                <span className="text-[cyan] font-semibold">
                    Deepak Kushwaha
                </span>
            </div>

        </footer>
    );
}