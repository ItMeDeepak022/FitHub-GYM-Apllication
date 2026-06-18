import React, { useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { Link, useLocation } from "react-router";

export default function RecipeDetails() {

    let { state } = useLocation()

    let [detailspage, setdetailspage] = useState([])
    
    const {
        calories,
        carbs,
        category,
        details,
        fat,
        nutritionImg,
        nutritionName,
        protein,
        _id
    } = detailspage;




    useEffect(() => {
        if (state) {
            // alert('data aa rha hai')
            setdetailspage(state)

        }
        else {
            alert("no data loaded")
        }
    }, [state])

    return (
        <main className="max-w-full min-h-screen bg-slate-100  mt-10">

            <div className="w-full h-45 bg-[#332467] mt-5 flex flex-col gap-5 justify-center items-center">
                <h1 className="text-[50px] text-white font-bold">Details Pages</h1>

                <div className="flex items-center gap-5 ">
                    <p className="text-[20px] text-[#E268E0] font-bold"><Link to={'/'}>Home</Link>  </p>
                    <FaGreaterThan className="text-[20px] text-[cyan] mt-1" />
                    <p className="text-[20px] text-white font-bold">Recipe Details Pages</p>
                </div>
            </div>
            <div className="max-w-full py-0 relative ">
                <div className="grid lg:grid-cols-2 sm:gap-10 bg-white  ">

                    {/* Left Side */}
                    <div className="sm:border-1 border-gray-200 sm:m-1">
                        <img
                            src={nutritionImg}
                            alt={nutritionName}
                            className="w-full h-[500px] object-cover "
                        />

                        <div className="mt-8 bg-gray-50 px-5 py-3 sm:m-5 m-2">
                            <h2 className="text-2xl font-bold ">
                                About Nutrition
                            </h2>

                            <p className="text-gray-600 leading-8">
                                {details}
                            </p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col justify-center p-5">

                        <span className="w-fit bg-[#E268E0] absolute  sm:top-13 sm:right-15 top-5   text-white px-6  py-2 rounded-full">
                            {category}
                        </span>

                        <h1 className="text-5xl font-bold mt-5">
                            {nutritionName}
                        </h1>

                        <p className="text-gray-500 mt-4 text-lg">
                            Healthy nutrition for a strong body and better performance.
                        </p>

                        {/* Nutrition Values */}
                        <div className="grid grid-cols-2 gap-5 mt-10">

                            <div className="bg-red-50 rounded-[20px] p-6 text-center">
                                <h3 className="text-4xl font-bold text-red-500">
                                    {calories}
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Calories
                                </p>
                            </div>

                            <div className="bg-green-50 rounded-[20px] p-6 text-center">
                                <h3 className="text-4xl font-bold text-green-500">
                                    {protein}g
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Protein
                                </p>
                            </div>

                            <div className="bg-blue-50 rounded-[20px] p-6 text-center">
                                <h3 className="text-4xl font-bold text-blue-500">
                                    {carbs}g
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Carbs
                                </p>
                            </div>

                            <div className="bg-pink-50 rounded-[20px] p-6 text-center">
                                <h3 className="text-4xl font-bold text-pink-500">
                                    {fat}g
                                </h3>
                                <p className="text-gray-600 mt-2">
                                    Fat
                                </p>
                            </div>

                        </div>

                        {/* Benefits */}
                        <div className="mt-10 border-1 border-gray-200 rounded-[10px] p-6">
                            <h3 className="text-2xl font-semibold mb-4">
                                Benefits
                            </h3>

                            <ul className="space-y-3 text-gray-600">
                                <li>✓ Rich in Protein</li>
                                <li>✓ Supports Muscle Growth</li>
                                <li>✓ Improves Recovery</li>
                                <li>✓ Provides Daily Energy</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>

        </main>
    );
}