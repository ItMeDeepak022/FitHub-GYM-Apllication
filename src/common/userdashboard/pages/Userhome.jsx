import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Userhome() {

    let  apiUrl=import.meta.env.VITE_UserUrl

    let token = localStorage.getItem('token')
    let [member, setmember] = useState([])


    token && (
        useEffect(() => {
            axios.get(
                `${apiUrl}/get-subscription`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            ).then((res) => res.data)
                .then((finalRes) => {
                    setmember(finalRes.data)
                })

        }, [token])

    )

    let [profile, setprofile] = useState({})
    const { name, } = profile;

    token && (
        useEffect(() => {
            axios.get(
                `${apiUrl}/get-userprofile`,
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
        <div className="p-6 bg-gray-100 min-h-screen">

            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-6 text-white mb-6">
                <h1 className="text-3xl font-bold">
                    Welcome Back, {name} 💪
                </h1>
                <p className="mt-2 text-orange-100">
                    Stay consistent. Your fitness journey is progressing.
                </p>
            </div>


            {
                member.map((obj) => {
                    let { startDate, endDate, duration, membership } = obj

                    let start = new Date(startDate).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    })
                    let end = new Date(endDate).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    })
                    return (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">

                                <div className="bg-white p-5 rounded-xl shadow">
                                    <h3 className="text-gray-500">Membership</h3>
                                    <h2 className="text-2xl font-bold text-green-600">
                                        Active
                                    </h2>
                                </div>

                                <div className="bg-white p-5 rounded-xl shadow">
                                    <h3 className="text-gray-500">Pland Duration</h3>
                                    <h2 className="text-2xl font-bold text-blue-600">
                                        {duration} Months
                                    </h2>
                                </div>

                                <div className="bg-white p-5 rounded-xl shadow">
                                    <h3 className="text-gray-500">Calories Burned</h3>
                                    <h2 className="text-2xl font-bold text-orange-600">
                                        12,450
                                    </h2>
                                </div>

                                <div className="bg-white p-5 rounded-xl shadow">
                                    <h3 className="text-gray-500">BMI</h3>
                                    <h2 className="text-2xl font-bold text-red-600">
                                        22.8
                                    </h2>
                                </div>

                            </div>
                            <div className="grid lg:grid-cols-2 gap-6 mb-6">
                                <div className="bg-white p-6 rounded-xl shadow">
                                    <h2 className="text-xl font-bold mb-4">
                                        Membership Details
                                    </h2>

                                    <div className="space-y-3">
                                        <p>
                                            <span className="font-semibold">
                                                Plan:
                                            </span>{" "}
                                            {membership}
                                        </p>

                                        <p>
                                            <span className="font-semibold">
                                                Start Date:
                                            </span>{" "}
                                            {start}
                                        </p>

                                        <p>
                                            <span className="font-semibold">
                                                Expiry:
                                            </span>{" "}
                                            {end}
                                        </p>
                                    </div>
                                </div>





                            </div>
                        </>
                    )
                })
            }






            {/* Workout Progress */}
            <div className="bg-white p-6 rounded-xl shadow mb-6">
                <h2 className="text-xl font-bold mb-4">
                    Workout Progress
                </h2>

                <div className="space-y-4">

                    <div>
                        <div className="flex justify-between mb-1">
                            <span>Chest Workout</span>
                            <span>90%</span>
                        </div>

                        <div className="w-full bg-gray-200 h-3 rounded-full">
                            <div className="bg-orange-500 h-3 rounded-full w-[90%]" />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mb-1">
                            <span>Leg Workout</span>
                            <span>70%</span>
                        </div>

                        <div className="w-full bg-gray-200 h-3 rounded-full">
                            <div className="bg-blue-500 h-3 rounded-full w-[70%]" />
                        </div>
                    </div>

                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-xl shadow">
                <h2 className="text-xl font-bold mb-4">
                    Recent Activity
                </h2>

                <ul className="space-y-4">

                    <li className="border-l-4 border-green-500 pl-4">
                        Attendance marked successfully.
                    </li>

                    <li className="border-l-4 border-blue-500 pl-4">
                        Membership renewed.
                    </li>

                    <li className="border-l-4 border-orange-500 pl-4">
                        New workout plan assigned.
                    </li>

                </ul>
            </div>

        </div>
    )
}
