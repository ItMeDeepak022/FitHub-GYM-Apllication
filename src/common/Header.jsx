import React, { useState } from 'react'
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdCancel } from "react-icons/md";
import { Link, useNavigate } from 'react-router';
import { LuLogIn } from "react-icons/lu";
import { AiOutlineLogout } from "react-icons/ai";
import { HiUsers } from "react-icons/hi2";
export default function Header() {
    let [showHideMenu, setShowHideMenu] = useState(false)
    let showNav = () => {
        setShowHideMenu(!showHideMenu)
    }

    const token = localStorage.getItem("token");
    let navigate = useNavigate()
    let logOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem("userName");
        showNav()
        navigate('/login-page')
    }

    return (
        <nav className="fixed top-0 bg-[#271C4F] left-0 right-0 z-40">

            <div className="mx-auto bg-white/10  backdrop-blur-md ">


                <div className="w-full flex items-center justify-around h-15 px-5">
                    <div className='w-60 sm:mr-0 mr-25 pt-3'>
                        <Link to={'/'}>
                            <img src="/Img/logo.png" alt="logo" className='w-full h-15 object-cover' />
                        </Link>


                    </div>
                    <ul className="sm:flex hidden  items-center space-x-4">
                        {/* <li className="text-black hover:border-b-2 border-white px-3 py-2 rounded-md text-md font-medium">My story </li> */}
                        <li className="text-white border-b-2 border-transparent hover:border-white px-3 py-2 text-md font-medium transition-all duration-300">
                            <Link to={'/about'}>About GYM</Link>
                        </li>
                        <li className="text-white hover:border-white  border-b-2 border-transparent  px-3 py-2 text-md font-medium transition-all duration-300">
                            <Link to={'/program-pages'}>Programs</Link>
                        </li>
                        <li className="text-white hover:border-white  border-b-2 border-transparent  px-3 py-2 text-md font-medium transition-all duration-300">
                            <Link to={'/nutrition'}> Nutrition</Link> </li>

                        <li className="text-white hover:border-white  border-b-2 border-transparent  px-3 py-2 text-md font-medium transition-all duration-300"> <Link to={'/contact-now'}>Contact</Link>  </li>
                    </ul>

                    <div className="sm:flex hidden gap-4 justify-center items-center">

                        {/* Instagram */}
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black  cursor-pointer hover:bg-gray-100  transition-all duration-300">
                            <FaInstagram className='text-[red]  text-[30px] hover:font-extrabold' />
                        </div>

                        {/* Facebook */}
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black cursor-pointer group hover:bg-white transition-all duration-300">
                            <FaFacebookF className="text-[blue] text-2xl group-hover:text-[blue] transition-all duration-300" />
                        </div>

                        {/* Twitter */}
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black cursor-pointer group hover:bg-white transition-all duration-300">
                            <FaTwitter className="text-white text-2xl group-hover:text-black transition-all duration-300" />
                        </div>

                        {/* YouTube */}
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black cursor-pointer group hover:bg-white transition-all duration-300">
                            <FaYoutube className="text-red-600 text-2xl group-hover:text-[red] transition-all duration-300" />
                        </div>

                    </div>

                    <div className='sm:flex gap-5 hidden'>
                        {
                            token ?
                                <LuLogIn onClick={logOut} className='cursor-pointer text-[red] text-2xl' />



                                :
                                <Link to={'/login-page'}>

                                    <HiUsers className=' cursor-pointer hover:text-[cyan] text-white  text-[25px]' />
                                </Link>

                        }


                    </div>
                </div>
            </div>

            {/* Mobile Menu Bar */}
            {
                showHideMenu ?
                    <div className='sm:hidden absolute top-3 right-5' onClick={showNav}>
                        <MdCancel className='text-[35px] text-white' />
                    </div>
                    :

                    <div className='sm:hidden absolute top-3 right-5' onClick={showNav}>
                        <HiOutlineMenuAlt3 className='text-[35px] text-white' />
                    </div>
            }





            {/* Mobile Slider Bar */}

            <div className={`sm:hidden fixed top-0 left-0 w-full h-screen bg-[#271C4F] z-57
             transform transition-transform duration-500 ease-in-out
               ${showHideMenu ? "translate-x-0" : "translate-x-full"}`}
            >

                {/* Top Bar */}
                <div className="w-full h-16 bg-white/10 backdrop-blur-lg">
                    <Link to={'/'}>
                        <img
                            src="Img/logo.png"
                            alt=""
                            className="w-[50%] h-full object-cover"
                        />
                    </Link>
                </div>

                {/* Menu */}
                <ul className="flex flex-col gap-2 mt-10 ">
                    <li onClick={showNav} className="mr-1 bg-[#3D3361] text-white border-b border-transparent hover:border-white px-3 py-4 transition-all duration-300">
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li onClick={showNav} className="mr-1 bg-[#3D3361] text-white border-b border-transparent hover:border-white px-3 py-4 transition-all duration-300">
                        <Link to={'/about'}>About GYM</Link>
                    </li>
                    <li onClick={showNav} className="mr-1 bg-[#3D3361] text-white border-b border-transparent hover:border-white px-3 py-4 transition-all duration-300">
                        <Link to={'/program-pages'}>Programs</Link>
                    </li>
                    <li onClick={showNav} className="mr-1 bg-[#3D3361] text-white border-b border-transparent hover:border-white px-3 py-4 transition-all duration-300">
                        <Link to={'/nutrition'}> Nutrition</Link>
                    </li>
                    <li onClick={showNav} className="mr-1 bg-[#3D3361] text-white border-b border-transparent hover:border-white px-3 py-4 transition-all duration-300">
                        <Link to={'/contact-now'}>Contact</Link>
                    </li>
                    <li onClick={logOut} className="mr-1 bg-[#3D3361] text-[red] font-bold border-b border-transparent hover:border-white px-3 py-4 transition-all duration-300">
                        <Link to={'/login-page'}> {token ? 'Logout' : "Login"} </Link>
                    </li>
                </ul>

                {/* Social Icons */}
                <div className='text-[25px] text-[cyan] text-center absolute left-15 top-155'>Let's connect now....</div>
                <div className="flex gap-8 justify-center mt-[110px]">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black hover:bg-white  transition">
                        <FaInstagram className="text-red-500 text-[30px]" />
                    </div>
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black hover:bg-white  transition">
                        <FaFacebookF className="text-blue-500 text-[30px]" />
                    </div>
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black hover:bg-white  transition">
                        <FaTwitter className="text-white hover:text-black text-[30px]" />
                    </div>
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black hover:bg-white  transition">
                        <FaYoutube className="text-red-500 text-[30px]" />
                    </div>
                </div>

                {/* Close Button */}
                <div className="absolute top-4  right-5 " onClick={showNav}>
                    <MdCancel className=" text-3xl text-white cursor-pointer" />
                </div>
            </div>

        </nav>
    )
}
