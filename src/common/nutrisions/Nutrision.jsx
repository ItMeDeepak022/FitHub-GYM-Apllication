import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import { Link } from 'react-router'

export default function Nutrition() {

    const recipes = [
        {
            id: "recipe-details-1",
            title: "Vegan Falafel Fritters",
            time: "50 min",
            calories: "417 calories",
            protein: "14g",
            carbs: "45g",
            img: "/Img/1.png",
            desc: "Crispy vegan falafel made from chickpeas, herbs, and spices. A perfect plant-based protein snack that is both filling and nutritious.",
            ingredients: [
                "Chickpeas (soaked)",
                "Garlic cloves",
                "Fresh parsley & coriander",
                "Cumin & coriander powder",
                "Salt & pepper",
                "Olive oil"
            ],
            directions: [
                "Blend chickpeas with herbs and spices.",
                "Shape into small balls.",
                "Deep fry or air fry until golden brown.",
                "Serve with sauce or salad."
            ],
            tip: "For extra crispiness, chill the mixture before frying."
        },

        {
            id: "recipe-details-2",
            title: "Strawberry Pancakes",
            time: "30 min",
            calories: "398 calories",
            protein: "10g",
            carbs: "52g",
            img: "/Img/2.webp",
            desc: "Fluffy pancakes topped with fresh strawberries and syrup, perfect for a sweet breakfast.",
            ingredients: [
                "Flour",
                "Milk",
                "Eggs",
                "Baking powder",
                "Fresh strawberries",
                "Maple syrup"
            ],
            directions: [
                "Mix flour, milk, eggs, and baking powder.",
                "Pour batter onto a hot pan.",
                "Cook both sides until golden.",
                "Serve with strawberries and syrup."
            ],
            tip: "Use chilled strawberries for better taste and freshness."
        },

        {
            id: "recipe-details-3",
            title: "Grilled Squid Salad",
            time: "30 min",
            calories: "266 calories",
            protein: "20g",
            carbs: "12g",
            img: "/Img/3.webp",
            desc: "A light seafood salad with grilled squid and fresh greens.",
            ingredients: [
                "Fresh squid",
                "Olive oil",
                "Lemon juice",
                "Mixed greens",
                "Salt & pepper"
            ],
            directions: [
                "Clean and marinate squid.",
                "Grill for 2-3 minutes.",
                "Toss with greens and dressing.",
                "Serve fresh."
            ],
            tip: "Do not overcook squid to keep it tender."
        },

        {
            id: "recipe-details-4",
            title: "Butterflied Chicken",
            time: "18 min",
            calories: "489 calories",
            protein: "35g",
            carbs: "5g",
            img: "/Img/4.webp",
            desc: "Juicy grilled chicken rich in protein and perfect for fitness meals.",
            ingredients: [
                "Chicken breast",
                "Garlic paste",
                "Lemon juice",
                "Spices",
                "Olive oil"
            ],
            directions: [
                "Butterfly the chicken.",
                "Marinate with spices and lemon.",
                "Grill for 10-12 minutes.",
                "Serve hot."
            ],
            tip: "Let chicken rest after cooking to retain juices."
        },

        {
            id: "recipe-details-5",
            title: "Toasted Popeye Bread",
            time: "25 min",
            calories: "356 calories",
            protein: "12g",
            carbs: "48g",
            img: "/Img/5.webp",
            desc: "Crunchy bread topped with spinach and cheese.",
            ingredients: [
                "Bread slices",
                "Spinach",
                "Cheese",
                "Butter",
                "Garlic"
            ],
            directions: [
                "Saute spinach with garlic.",
                "Spread on bread.",
                "Add cheese and toast.",
                "Serve warm."
            ],
            tip: "Use whole grain bread for extra fiber."
        },

        {
            id: "recipe-details-6",
            title: "Chocolate Porridge",
            time: "20 min",
            calories: "356 calories",
            protein: "11g",
            carbs: "50g",
            img: "/Img/6.webp",
            desc: "Creamy chocolate oats perfect for breakfast.",
            ingredients: [
                "Oats",
                "Milk",
                "Cocoa powder",
                "Honey",
                "Fruits"
            ],
            directions: [
                "Cook oats with milk.",
                "Add cocoa powder and mix.",
                "Sweeten with honey.",
                "Top with fruits."
            ],
            tip: "Add nuts for extra crunch and nutrition."
        },

        {
            id: "recipe-details-7",
            title: "Oaty Fruity Cereal",
            time: "10 min",
            calories: "189 calories",
            protein: "6g",
            carbs: "32g",
            img: "/Img/7.webp",
            desc: "Quick cereal packed with fiber and vitamins.",
            ingredients: [
                "Oats",
                "Milk",
                "Mixed fruits",
                "Honey"
            ],
            directions: [
                "Mix oats and milk.",
                "Add chopped fruits.",
                "Drizzle honey.",
                "Serve fresh."
            ],
            tip: "Use seasonal fruits for better taste."
        },

        {
            id: "recipe-details-8",
            title: "Healthy Chicken Caesar",
            time: "25 min",
            calories: "418 calories",
            protein: "28g",
            carbs: "18g",
            img: "/Img/8.webp",
            desc: "Healthy Caesar salad with grilled chicken.",
            ingredients: [
                "Chicken breast",
                "Lettuce",
                "Parmesan cheese",
                "Caesar dressing",
                "Croutons"
            ],
            directions: [
                "Grill chicken.",
                "Chop lettuce.",
                "Mix with dressing.",
                "Top with chicken and cheese."
            ],
            tip: "Use light dressing to reduce calories."
        },

        {
            id: "recipe-details-9",
            title: "Asparagus Sushi",
            time: "45 min",
            calories: "209 calories",
            protein: "8g",
            carbs: "28g",
            img: "/Img/9.webp",
            desc: "Fresh vegetarian sushi rolls.",
            ingredients: [
                "Sushi rice",
                "Asparagus",
                "Nori sheets",
                "Soy sauce"
            ],
            directions: [
                "Cook sushi rice.",
                "Place rice on nori.",
                "Add asparagus.",
                "Roll and slice."
            ],
            tip: "Use a bamboo mat for perfect sushi rolls."
        }
    ];

    const apiUrl = import.meta.env.VITE_WebAPI;

    let [nutrition, setnutrition] = useState([])
    let getnutrition = () => {
        axios.get(
            `${apiUrl}/fetch-nutrition`
        ).then((res) => res.data)
            .then((finalRes) => {
                console.log(finalRes);
                setnutrition(finalRes.data)
            })
    }

    useEffect(() => {
        getnutrition()
    }, [])


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

            <div id='recipe' className="w-full bg-white py-16 px-4 sm:px-10 md:px-20">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-[#E268E0] tracking-widest text-sm uppercase">
                        / Recipes /
                    </h2>
                    <h1 className="text-3xl sm:text-4xl font-bold mt-2">
                        Healthy & Delicious Meals
                    </h1>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

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

            </div>
        </>
    )
}
