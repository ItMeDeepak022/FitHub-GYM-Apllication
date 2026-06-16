import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { IoFitness, IoMenu } from "react-icons/io5";
import { LuLogIn } from "react-icons/lu";
import { Link, useNavigate } from "react-router";

export default function Userheader() {
    let navigate = useNavigate()

    let userLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem("userName");
        localStorage.removeItem("firstletter");
        navigate('/login-page')
    }

    let [show, setshow] = useState(false)

    let showMenu = () => {
        setshow(!show)
    }

    let token = localStorage.getItem('token')
    let [profile, setprofile] = useState({})
    const { name, } = profile;

    token && (
        useEffect(() => {
            axios.get(
                "http://localhost:1000/website/authentication/get-userprofile",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            ).then((res) => res.data)
                .then((finalRes) => {
                    setprofile(finalRes.data)
                })

        }, [token])

    )

     

    return (
        <header className="relative z-40 max-w-full bg-gray-900  border-gray-800 sm:px-10 sm:py-3.5 ">
            <div className="flex items-center sm:justify-between justify-between sm:px-0 sm:py-0 px-3 py-4 ">

                {/* Logo & Welcome */}
                <div className="sm:flex items-center gap-4 hidden">
                    <div className="bg-orange-500 p-3 rounded-full">
                        <IoFitness className="text-white text-2xl" />
                    </div>

                    <div>
                        <h1 className="text-white text-2xl font-bold">
                            Welcome Back 👋
                        </h1>
                        <p className="text-gray-400 text-sm">
                            Track your fitness journey and stay consistent.
                        </p>
                    </div>
                </div>

                <div className="sm:hidden flex items-center text-white gap-7 w-full">
                    <IoMenu onClick={showMenu} className="text-[30px]" />
                    <p className="text-[22px] font-bold">User Dashboard</p>
                </div>
                {/* Right Section */}
                <div className="flex items-center gap-5">


                    {/* Notification */}
                    <button className="sm:block hidden relative text-white hover:text-orange-500 transition">
                        <FaBell size={22} />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
                            3
                        </span>
                    </button>

                    {/* Profile */}
                    <div className="flex items-center gap-3 cursor-pointer">
                        <FaUserCircle className="text-orange-500 text-4xl" />
                        <div className="hidden sm:block">
                            <h3 className="text-white font-semibold">
                                {name}
                            </h3>
                            <p className="text-gray-400 text-xs">
                                Active Member
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            {/* For Mobile Sreens Menubar;s */}

            <div className={`absolute top-15 w-full sm:hidden h-screen bg-white 
            transform transition-transform duration-500 ease-in-out
                ${show ? "translate-x-0" : "translate-x-[-100%]"}
                `}>
                <nav className="px-3 pt-5 m-5 text-black">

                    <Link onClick={showMenu}
                        to="/user/home"
                        className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-100 transition"
                    >
                        Home
                    </Link>

                    <Link onClick={showMenu}
                        to="/user/profile"
                        className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-100 transition"
                    >
                        Profile
                    </Link>

                    <Link onClick={showMenu}
                        to="/user/subscription"
                        className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-100 transition"
                    >
                        Subscription
                    </Link>

                    <Link onClick={showMenu}
                        to="/user/histroy"
                        className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-100 transition"
                    >
                        History
                    </Link>

                    <p
                        onClick={userLogout}
                        className="cursor-pointer flex items-center gap-5 px-4 py-3 border-b border-gray-200 hover:bg-gray-100 transition"
                    >
                        Logout
                        <LuLogIn className="text-red-500 text-[25px]" />
                    </p>

                </nav>
            </div>
        </header>
    );
}