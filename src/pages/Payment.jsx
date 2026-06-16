import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRazorpay } from "react-razorpay";

import { useLocation, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";



export default function Payment() {
    const [membership, setMembership] = useState('Not selected');
    const [total, setTotal] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState("Not selected");
    let [duration, setduration] = useState('Not selected')
    const { error, isLoading, Razorpay } = useRazorpay();



    const apiUrl = import.meta.env.VITE_UserUrl;

    const apiWebUrl = import.meta.env.VITE_WebAPI;


    let [program, setprogram] = useState([])
    let getprogramdata = () => {
        axios.get(
            `${apiWebUrl}/fetch-program`).then((res) => res.data)
            .then((finalRes) => {
                console.log(finalRes, 'payment');
                setprogram(finalRes.data)
            })
    }

    useEffect(() => {
        getprogramdata()
    }, [])

    let { state } = useLocation()


    let [name, setname] = useState('')
    let [email, setemail] = useState('')
    let [phone, setphone] = useState('')




    useEffect(() => {
        if (state) {
            setname(state.fullName)
            setemail(state.email)
            setphone(state.phone)

        }
    }, [state])

    let navigate = useNavigate()

    const paymentNow = (e) => {
        e.preventDefault();

        const obj = {
            name,
            email,
            phone,
            address: e.target.address.value,
            city: e.target.city.value,
            state: e.target.state.value,
            zip: e.target.zip.value,
            startDate: e.target.startDate.value,
            membership,
            total,
            duration,
            paymentMethod,
            subscriptionId: 'FITHUBGYM' + (Math.random() * 99999).toString().slice(0, 4),
        };



        axios.post(
            `${apiUrl}/create-order`, obj,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
        ).then((res) => res.data)
            .then((finalRes) => {

                if (finalRes.status) {
                    if (paymentMethod === "cash") {

                        alert(finalRes.message)
                        navigate('/user/subscription')
                    }
                    else {

                        let { razorpay_Order } = finalRes
                        const options = {
                            name: "FITHUB GYM",
                            key: "rzp_test_Shg1E0Zo5KP68C",
                            amount: razorpay_Order.id,
                            currency: "INR",
                            order_id: razorpay_Order.id,

                            handler: async function (response) {

                                await axios.post(
                                    `${apiUrl}/verify-payment`, response,
                                    obj,
                                    {
                                        headers: {
                                            Authorization: `Bearer ${localStorage.getItem("token")}`
                                        }
                                    }
                                ).then((res) => res.data)
                                    .then((finalRes) => {
                                        if (finalRes.status) {
                                            toast.info(finalRes.message)
                                            setTimeout(() => {
                                                navigate('/user/subscription')
                                            }, 1500);
                                        }
                                        else {
                                            toast.error(finalRes.message)
                                        }
                                    })


                            },

                            prefill: {
                                name,
                                email,
                                contact: phone
                            }
                        };

                        const razorpayInstance = new Razorpay(options)
                        razorpayInstance.open();
                    }
                }
            })

    };



    return (
        <div className="min-h-screen bg-white sm:mt-12 mt-5 sm:pb-3 pb-0 py-5">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gray-800 overflow-hidden">
                    <ToastContainer />
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 px-6 py-8">
                        <h1 className="text-3xl font-bold text-white">
                            Gym Membership Payment
                        </h1>
                    </div>

                    <form className="p-8" onSubmit={paymentNow}>

                        {/* Personal Info */}
                        <div className="mb-8">
                            <h2 className="text-xl text-white mb-4">
                                Personal Information
                            </h2>

                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    required
                                    onChange={(e) => setname(e.target.value)}
                                    placeholder="Full Name"
                                    className="w-full px-4 py-2 bg-gray-700 text-white rounded"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                    placeholder="Email"
                                    className="w-full px-4 py-2 bg-gray-700 text-white rounded"
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    value={phone}
                                    required
                                    onChange={(e) => setphone(e.target.value)}
                                    placeholder="Phone"
                                    className="w-full px-4 py-2 bg-gray-700 text-white rounded"
                                />
                                <input
                                    type="date"
                                    name="startDate"
                                    required
                                    className="w-full px-4 py-2 bg-gray-700 text-white rounded"
                                />
                            </div>
                        </div>

                        {/* Address */}
                        <div className="mb-8">
                            <textarea
                                name="address"
                                rows="3"
                                placeholder="Address"
                                className="w-full px-4 py-2 bg-gray-700 text-white rounded"
                            />

                            <div className="grid md:grid-cols-3 gap-4 mt-4">
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    className="w-full px-4 py-2 bg-gray-700 text-white rounded"
                                />

                                <input
                                    type="text"
                                    name="state"
                                    placeholder="State"
                                    className="w-full px-4 py-2 bg-gray-700 text-white rounded"
                                />

                                <input
                                    type="text"
                                    name="zip"
                                    placeholder="Zip Code"
                                    className="w-full px-4 py-2 bg-gray-700 text-white rounded"
                                />
                            </div>
                        </div>

                        {/* Membership Plans */}
                        <div className="mb-8">
                            <h2 className="text-xl text-white mb-4">
                                Membership Plans
                            </h2>

                            <div className="grid md:grid-cols-3 gap-4">
                                {program.map((plan, index) => {
                                    let { programName, price, duration } = plan
                                    return (
                                        <label
                                            key={index}
                                            className={`cursor-pointer p-4 rounded border-2 ${membership === programName
                                                ? "border-orange-500"
                                                : "border-gray-600"
                                                } bg-gray-700`}
                                        >
                                            <div className="flex gap-3 items-center mb-2">
                                                <input
                                                    type="radio"
                                                    name="membership"
                                                    checked={membership == programName}
                                                    onChange={() => {
                                                        setMembership(programName);
                                                        setTotal(price);
                                                        setduration(duration)
                                                    }}
                                                />

                                                <h3 className="text-white">
                                                    {programName}
                                                </h3>
                                            </div>

                                            <p className="text-orange-400">
                                                ₹{(price)} - {duration} Months
                                            </p>
                                        </label>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="mb-8">
                            <h2 className="text-xl text-white mb-4">
                                Payment Method
                            </h2>

                            <div className="grid md:grid-cols-2 gap-4">

                                <label className="p-4 rounded border-2 border-gray-600 bg-gray-700 cursor-pointer">
                                    <div className="flex gap-3 items-center">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="UPI"
                                            checked={paymentMethod === "UPI"}
                                            onChange={(e) =>
                                                setPaymentMethod(e.target.value)
                                            }
                                        />

                                        <h3 className="text-white">
                                            UPI Payment
                                        </h3>
                                    </div>
                                </label>

                                <label className="p-4 rounded border-2 border-gray-600 bg-gray-700 cursor-pointer">
                                    <div className="flex gap-3 items-center">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="cash"
                                            checked={paymentMethod === "cash"}
                                            onChange={(e) =>
                                                setPaymentMethod(e.target.value)
                                            }
                                        />

                                        <h3 className="text-white">
                                            Cash Payment
                                        </h3>
                                    </div>
                                </label>

                            </div>
                        </div>

                        {/* Summary */}
                        <div className="bg-gray-700 rounded p-3 mb-8">
                            <div className="flex justify-between mb-3">
                                <span className="text-gray-300">
                                    Membership Plan
                                </span>

                                <span className="text-white">
                                    {membership}
                                </span>
                            </div>

                            <div className="flex justify-between mb-3">
                                <span className="text-gray-300">
                                    Plan Duration
                                </span>

                                <span className="text-white">
                                    {duration} Months
                                </span>
                            </div>

                            <div className="flex justify-between mb-3">
                                <span className="text-gray-300">
                                    Payment Method
                                </span>

                                <span className="text-white capitalize">
                                    {paymentMethod}
                                </span>
                            </div>

                            <div className="flex justify-between border-t pt-4">
                                <span className="text-white font-bold">
                                    Total Amount
                                </span>

                                <span className="text-orange-400 text-xl font-bold">
                                    ₹{total}
                                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-orange-500 to-red-600 py-3 text-white font-bold rounded"
                        >
                            Make Payment
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}