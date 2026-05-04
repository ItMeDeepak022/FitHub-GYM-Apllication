import React, { useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { Link, useLocation } from "react-router";

export default function RecipeDetails() {

    let state = useLocation()
    let [details, setdetails] = useState([])
    console.log(details);
    let { title, time, id, calories, img, protein, carbs, desc, ingredients, directions, tip } = details



    useEffect(() => {
        if (state) {
            // alert('data aa rha hai')
            setdetails(state.state)

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

            <div className="mx-auto max-w-full bg-white sm:p-4 p-0 shadow-xl shadow-slate-200">
                <div className="grid gap-5 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
                    <div className="space-y-6">
                        <div className="overflow-hidden  bg-slate-200 shadow-inner shadow-slate-300">
                            <img
                                src={img}
                                alt="Recipe"
                                className="h-100 w-full object-cover"
                            />
                        </div>

                        <section className="space-y-4 rounded-3xl bg-slate-50 sm:p-6 p-4 sm:m-0 m-4 shadow-sm shadow-slate-200">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                                    Healthy Choice
                                </span>
                                <div className="flex items-center gap-4 text-slate-600">
                                    <div className="flex items-center gap-2">
                                        <span className="h-3.5 w-3.5 rounded-full bg-amber-400"></span>
                                        <span>Easy</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
                                        </svg>
                                        <span>{time} min</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
                                    {title}
                                </h1>
                                <p className="max-w-2xl text-slate-600 sm:text-justify">
                                    {desc}
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-3">
                                <div className="rounded-3xl bg-white p-4 text-center shadow-sm shadow-slate-200">
                                    <p className="text-3xl font-bold text-slate-900"> {calories} </p>
                                    <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Calories</p>
                                </div>
                                <div className="rounded-3xl bg-white p-4 text-center shadow-sm shadow-slate-200">
                                    <p className="text-3xl font-bold text-slate-900">{protein} </p>
                                    <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Protein</p>
                                </div>
                                <div className="rounded-3xl bg-white p-4 text-center shadow-sm shadow-slate-200">
                                    <p className="text-3xl font-bold text-slate-900"> {carbs} </p>
                                    <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Carbs</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <aside className="flex flex-col gap-5">
                        <section className="rounded-3xl bg-slate-50 sm:p-6 p-4 sm:m-0 m-4 shadow-sm shadow-slate-200">
                            <h2 className="text-xl font-semibold text-slate-900">Ingredients</h2>
                            {
                                ingredients && (
                                    ingredients.map((obj, index) => {
                                        return (
                                            <ul className="mt-4 space-y-3 text-slate-700">
                                                <li className="flex items-start gap-3">
                                                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                                                    {obj}
                                                </li>

                                            </ul>
                                        )
                                    })
                                )
                            }
                        </section>

                        <section className="rounded-3xl bg-slate-50 sm:p-6 p-4 sm:m-0 m-4 shadow-sm shadow-slate-200">
                            <h2 className="text-xl font-semibold text-slate-900">Directions</h2>
                            {
                                directions && (
                                    directions.map((obj, index) => {
                                        return (
                                            <ol className="mt-5 space-y-4 text-slate-700">
                                                <li className="rounded-3xl bg-white p-4 shadow-sm shadow-slate-100">
                                                    <span className="font-semibold text-slate-900">{index+1}.</span> {obj}
                                                </li>

                                            </ol>
                                        )
                                    })
                                )
                            }
                        </section>

                        <section className="rounded-3xl bg-emerald-600 sm:p-5 p-2 sm:m-2 m-4 text-white shadow-sm shadow-emerald-200">
                            <h2 className="text-xl font-semibold">Quick Tip</h2>
                            <p className="mt-3 leading-5 text-slate-100">
                                {tip}
                            </p>
                        </section>
                    </aside>
                </div>
            </div>
        </main>
    );
}