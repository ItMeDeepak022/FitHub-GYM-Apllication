import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Subscription() {
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

    return (
        <div className="p-6 bg-slate-100 min-h-screen">

            <h1 className="text-3xl font-bold mb-6">
                My Subscription
            </h1>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

                <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6 text-white">
                    <h2 className="text-2xl font-bold">
                        Premium Membership
                    </h2>
                    <p>Active Subscription Plan</p>
                </div>

                {
                    member.length > 0 ?
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
                                <div className="p-6">

                                    <div className="grid md:grid-cols-3 gap-6">

                                        <div className="bg-slate-100 rounded-xl p-5">
                                            <h3 className="text-gray-500 text-sm">
                                                Joining Date
                                            </h3>
                                            <p className="text-xl font-bold mt-2">
                                                {start}
                                            </p>
                                        </div>

                                        <div className="bg-slate-100 rounded-xl p-5">
                                            <h3 className="text-gray-500 text-sm">
                                                Expiry Date
                                            </h3>
                                            <p className="text-xl font-bold mt-2">
                                                {end}
                                            </p>
                                        </div>

                                        <div className="bg-slate-100 rounded-xl p-5">
                                            <h3 className="text-gray-500 text-sm">
                                                Plan Name
                                            </h3>

                                            <span className="inline-block mt-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
                                                {membership}
                                            </span>
                                        </div>
                                        <div className="bg-slate-100 rounded-xl p-5">
                                            <h3 className="text-gray-500 text-sm">
                                                Plan Duration
                                            </h3>

                                            <span className="inline-block mt-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
                                                {duration} Months
                                            </span>
                                        </div>

                                    </div>

                                    <div className="mt-8">

                                        <h3 className="text-xl font-bold mb-4">
                                            Membership Benefits
                                        </h3>

                                        <ul className="space-y-3">

                                            <li className="bg-green-50 p-3 rounded-lg">
                                                ✅ Unlimited Gym Access
                                            </li>

                                            <li className="bg-green-50 p-3 rounded-lg">
                                                ✅ Personal Trainer Support
                                            </li>

                                            <li className="bg-green-50 p-3 rounded-lg">
                                                ✅ Diet Consultation
                                            </li>

                                            <li className="bg-green-50 p-3 rounded-lg">
                                                ✅ Fitness Assessment
                                            </li>

                                        </ul>

                                    </div>

                                    <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg">
                                        Renew Membership
                                    </button>

                                </div>
                            )
                        })
                        :
                        <div className="text-3xl text-red-700">No Subscription Founds..</div>
                }
            </div>

        </div>
    );
}