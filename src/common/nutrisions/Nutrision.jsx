import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import { Link } from 'react-router'

export default function Nutrition() {



    const apiUrl = import.meta.env.VITE_WebAPI;

    let [nutrition, setnutrition] = useState([])
    let getnutrition = () => {
        axios.get(
            `${apiUrl}/fetch-nutrition`
        ).then((res) => res.data)
            .then((finalRes) => {
                // console.log(finalRes);
                setnutrition(finalRes.data)
            })
    }

    useEffect(() => {
        getnutrition()
    }, [])


    const [loading, setLoading] = useState(false);
    let [filterValue, setfilterValue] = useState('')
    let [nutritionFilter, setnutritionFilter] = useState([])
    let filterData = (e) => {
        setLoading(true)
        let { name, value } = e.target;
        setfilterValue(value)
        axios.get(
            `${apiUrl}/fetch-filterData?category=${name}&value=${value}`
        ).then((res) => res.data)
            .then((finalRes) => {
                // console.log(finalRes);
                setLoading(false)
                setnutritionFilter(finalRes.data)
            })

    }


    return (
        <>
            <div className="w-full h-70 bg-[#332467] mt-5 flex flex-col gap-5 justify-center items-center">
                <h1 className="text-[50px] text-white font-bold">NUTRITION</h1>

                <div className="flex items-center gap-5 ">
                    <p className="text-[20px] text-[#E268E0] font-bold"><Link to={'/'}>Home</Link>  </p>
                    <FaGreaterThan className="text-[20px] text-[cyan] mt-1" />
                    <p className="text-[20px] text-white font-bold">NUTRITION</p>
                </div>
            </div>
            <div className='w-full h-full bg-white'>
                <div className='w-full h-full'>
                    <img src="Img/Diet.webp" alt="Diet Img" className='w-full h-full object-cover' />
                </div>
                <div className="w-full max-w-4xl mx-auto px-4 py-16 text-start sm:text-left">

                    {/* Top Tag */}
                    <p className="text-base tracking-widest text-[#E268E0] uppercase font-semibold">
                        / Nutrition /
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mt-3 leading-tight">
                        Fuel Your Body the Right Way
                    </h1>

                    {/* Sub Text */}
                    <p className="text-gray-600 mt-6 text-lg sm:text-xl leading-relaxed">
                        Your transformation doesn’t start in the gym — it starts in your kitchen.
                        A balanced diet gives your body the energy it needs to perform, recover,
                        and grow stronger every day.
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 mt-5 text-base sm:text-lg leading-relaxed">
                        Begin your mornings with nutritious meals that boost your metabolism and keep you active throughout the day.
                        Upgrade your lunch with wholesome options like protein-rich bowls, fresh salads, and light yet satisfying meals.
                    </p>

                    <p className="text-gray-600 mt-5 text-base sm:text-lg leading-relaxed">
                        From vibrant vegetarian dishes to delicious high-protein recipes, you can enjoy food that is both healthy and tasty.
                        Don’t forget — even your cravings can be satisfied with
                        <span className="text-[#E268E0] font-semibold"> smart and healthy desserts</span>.
                    </p>

                    {/* Button */}
                    <button className="mt-8 px-8 py-3 text-lg bg-[#E268E0] text-white rounded-lg font-semibold hover:bg-[#62D0DF] transition-all duration-300">
                        <a href="#recipe"> Explore Recipes →</a>
                    </button>

                </div>
            </div>

            <div id='recipe' className=" w-full bg-white py-16 px-4 sm:px-10 md:px-20">

                {/* Heading */}
                <div className="text-center sm:text-start sm:mb-12 mb-5 relative">
                    <h2 className="text-[#E268E0] tracking-widest text-sm uppercase">
                        / Recipes /
                    </h2>
                    <h1 className="text-3xl sm:text-4xl font-bold mt-2">
                        Healthy & Delicious Meals
                    </h1>

                    <div className='flex sm:flex-row flex-col sm:gap-5 gap-2 sm:mt-0 mt-5 items-center  sm:w-[60%] right-0  sm:absolute sm:top-8 sm:mb-0 mb-5'>
                        <div className='flex gap-5  '>
                            <p className='sm:text-[20px] font-bold'>Filter By Category</p>
                            <select
                                name="category"
                                onChange={filterData}
                                required
                                id="" className='border-2 border-gray-200 sm:px-5 outline-none sm:py-1 rounded-[5px]  '>
                                <option value={''}>Not Selected</option>
                                <option value="fitness">Ideal body </option>
                                <option value="fatloss">Fit body</option>
                                <option value="massgain">Massgain</option>
                            </select>
                        </div>
                        <div className='flex sm:gap-5 gap-8  '>
                            <p className='sm:text-[20px] font-bold'>Fillter By Names</p>
                            <select
                                name="sort"
                                onChange={filterData}
                                id="" className='border-2 outline-none border-gray-200 sm:px-5 sm:py-1 rounded-[5px]  '>
                                <option value=''>Not Selected</option>
                                <option value="A-Z">A-Z</option>
                                <option value="Z-A">Z-A</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* GRID */}
                <div className={`grid grid-cols-1 ${filterValue ? 'hidden' : 'block'} sm:grid-cols-2 md:grid-cols-3 gap-10`}>

                    {nutrition.map((item, index) => {
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
                        } = item;
                        return (
                            <div
                                key={index}
                                className="bg-gray-100  overflow-hidden"
                            >

                                {/* IMAGE */}
                                <div className="w-full h-70 overflow-hidden">
                                    <img
                                        src={nutritionImg}
                                        alt={nutritionName}
                                        className="w-full h-full object-cover hover:scale-110 transition duration-500"
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="p-4">
                                    <h2 className="text-lg font-bold">{nutritionName}</h2>

                                    <div className="flex gap-5 text-sm text-gray-500 mt-2">

                                        <span>calories🔥 {calories}g</span>
                                        <span>carbs🔥 {carbs}g</span>
                                    </div>
                                    <div className="h-18 flex justify-between text-sm text-gray-500 mt-2">
                                        <span>{details}</span>

                                    </div>
                                    {/* Button */}
                                    <button className="mt-4 w-full py-2 bg-[#E268E0] text-white rounded-lg hover:bg-[#62D0DF] transition">
                                        <Link to={`/recipe/${_id}`} state={item}> View Recipe →</Link>
                                    </button>
                                </div>

                            </div>
                        )
                    }

                    )}


                </div>


                {
                    filterValue && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

                            {
                                loading ? (
                                    <div className="col-span-3 flex justify-center items-center py-40">
                                        <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
                                    </div>
                                )
                                    :
                                    (
                                        nutritionFilter.length > 0 ?
                                            nutritionFilter.map((item, index) => {
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
                                                } = item;
                                                return (
                                                    <div
                                                        key={index}
                                                        className="bg-gray-100  overflow-hidden"
                                                    >

                                                        {/* IMAGE */}
                                                        <div className="w-full h-70 overflow-hidden">
                                                            <img
                                                                src={nutritionImg}
                                                                alt={nutritionName}
                                                                className="w-full h-full object-cover hover:scale-110 transition duration-500"
                                                            />
                                                        </div>

                                                        {/* CONTENT */}
                                                        <div className="p-4">
                                                            <h2 className="text-lg font-bold">{nutritionName}</h2>

                                                            <div className="flex gap-5 text-sm text-gray-500 mt-2">

                                                                <span>calories🔥 {calories}g</span>
                                                                <span>carbs🔥 {carbs}g</span>
                                                            </div>
                                                            <div className="h-18 flex justify-between text-sm text-gray-500 mt-2">
                                                                <span>{details}</span>

                                                            </div>
                                                            {/* Button */}
                                                            <button className="mt-4 w-full py-2 bg-[#E268E0] text-white rounded-lg hover:bg-[#62D0DF] transition">
                                                                <Link to={`/recipe/${_id}`} state={item}> View Recipe →</Link>
                                                            </button>
                                                        </div>

                                                    </div>
                                                )
                                            }

                                            )
                                            :
                                            <div>No Nutrition Data founds...</div>
                                    )
                            }


                        </div>
                    )
                }

            </div>
        </>
    )
}
