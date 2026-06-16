import axios from "axios";
import React, { useEffect, useState } from "react";

export default function PaymentHistory() {

    let  apiUrl=import.meta.env.VITE_UserUrl

    const payments = [
        {
            id: "#PAY001",
            amount: 1000,
            plan: "Idea Body",
            date: "01 June 2026",
            status: "Success",
            receipt: 'Download'
        },
        {
            id: "#PAY002",
            amount: 2000,
            plan: "Fit Body",
            date: "01 May 2026",
            status: "Success",
            receipt: 'Download'
        },

    ];
    
    let [history, sethistory] = useState([])

    let token = localStorage.getItem('token')

    token && (
        useEffect(() => {
            axios.get(
                `${apiUrl}/subscription-history`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            ).then((res) => res.data)
                .then((finalRes) => {
                    // console.log(finalRes);
                    sethistory(finalRes.data)
                })

        }, [token])

    )

    return (
        <div className="bg-white ">

            {/* Desktop Table */}
            <div className="hidden max-w-full sm:block">

                <table className="w-full ">

                    <thead className="bg-slate-800 text-white">
                        <tr>
                            <th className="p-5 pl-15 text-left">Payment ID</th>
                            <th className="p-5 pl-15 text-left">Plan</th>
                            <th className="p-5 pl-15 text-left">Amount</th>
                            <th className="p-5 pl-15 text-left">Date</th>
                            <th className="p-5 pl-15 text-left">Status</th>
                            <th className="p-5 pl-15 text-left">View Recipt</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            history.length > 0 ?
                                history.map((item, index) => {
                                    let { startDate } = item
                                    let start = new Date(startDate).toLocaleDateString("en-IN", {
                                        day: "2-digit",
                                        month: "long",
                                        year: "numeric",
                                    })
                                    return (
                                        <tr
                                            key={index}
                                            className="border-b hover:bg-slate-50 bg-white "
                                        >
                                            <td className="p-4 font-semibold pl-15">
                                                {item.subscriptionId}
                                            </td>

                                            <td className="p-4 pl-15">
                                                {item.membership}
                                            </td>

                                            <td className={`p-4 pl-15 font-bold ${item.paymentStatus === 'Success' ? 'text-green-600' : 'text-[red]'} `}>
                                                ₹{item.total}
                                            </td>

                                            <td className="p-4 pl-15" >
                                                {start}
                                            </td>

                                            <td className="p-4 pl-15 ">
                                                <span className={`px-3 py-1 rounded-full bg-green-100 ${item.paymentStatus === "Success" ? 'text-green-700' : 'text-[red]'} text-sm font-bold`}>
                                                    {item.paymentStatus}
                                                </span>
                                            </td>
                                            <td className="p-4 pl-15">
                                                <button className="py-2 text-black text-[15px] px-4 bg-white border-1 border-gray-200 rounded-[15px]">
                                                    Download
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                <tr>No Payment History Founds...</tr>
                        }
                    </tbody>

                </table>
            </div>


            {/* Mobile Cards */}
            <div className="md:hidden p-2 space-y-4">
                <h1 className="text-black text-3xl font-normal p-2 text-start">Histroy Details</h1>
                {
                    history.length > 0 ?
                        history.map((item, index) => {

                            let { startDate } = item
                            let start = new Date(startDate).toLocaleDateString("en-IN", {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                            })
                            return (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-xl p-2 shadow-sm"
                                >

                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="font-bold text-slate-800">
                                            {item.subscriptionId}
                                        </h3>

                                        <button className="py-2 text-black px-1 bg-white border-1 border-gray-200 rounded-[15px]">
                                            Download
                                        </button>

                                        <span className={`px-2 py-1 rounded-full  bg-green-100 ${item.paymentStatus === 'Success' ? 'text-green-700' : 'text-[red]'}  text-xs`} >
                                            {item.paymentStatus}
                                        </span>
                                    </div>

                                    <div className="space-y-2 text-sm">

                                        <div className="flex justify-between">
                                            <span className="text-gray-500">
                                                Plan
                                            </span>

                                            <span className="font-medium">
                                                {item.membership}
                                            </span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span className="text-gray-500">
                                                Amount
                                            </span>

                                            <span className="font-bold text-green-600">
                                                ₹{item.total}
                                            </span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span className="text-gray-500">
                                                Date
                                            </span>

                                            <span>
                                                {start}
                                            </span>
                                        </div>

                                    </div>

                                </div>
                            )
                        })
                        :
                        <div>No histroy founds...</div>
                }


            </div>

        </div>
    );
}