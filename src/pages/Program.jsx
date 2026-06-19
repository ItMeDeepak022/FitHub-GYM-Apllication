import React, { useEffect, useState } from 'react'
import { FaAppleAlt, FaClock } from 'react-icons/fa'
import { CgGym } from "react-icons/cg";
import { Link } from 'react-router';
import axios from 'axios';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Program() {

    const apiUrl = import.meta.env.VITE_WebAPI;




    
    let [program, setprogram] = useState([])
    let getprogramdata = () => {
        axios.get(
            `${apiUrl}/fetch-program`).then((res) => res.data)
            .then((finalRes) => {
                // console.log(finalRes);
                setprogram(finalRes.data)
            })
    }
    


 useEffect(() => {
        getprogramdata()
    }, [])



    return (
        <section id='program' className="w-full py-16 px-4 bg-[#F3F2F8] text-center">
            <div className='max-w-[1320px] mx-auto'>

                <b className='text-center uppercase text-[#E268E0] block pb-5'> <span className='text-[cyan]'>/ </span> Programs <span className='text-[cyan]'> /</span></b>
                {/* Heading */}
                <h1 className="sm:text-[60px] text-[30px] font-bold uppercase mb-4">
                    Choose a Program
                </h1>

                {/* Description */}
                <p className="text-gray-600 sm:text-center text-justify mb-12 sm:text-2xl text-[18px]">
                    Select a program that suits your fitness goals. Whether you want to build muscle,
                    lose weight, or improve overall health — we’ve got you covered.
                </p>

                {/* Cards */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {program.map((obj, index) => (
                        <SwiperSlide key={index}>
                            <Cards data={obj} />
                        </SwiperSlide>
                    ))}
                </Swiper>



            </div>

        </section >
    )
}


function Cards({ data }) {
    let { programName, programImg, description, duration } = data
    return (
        <div className="bg-white sm:rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
            <img
                src={programImg}
                alt="Ideal Body"
                className="w-full h-60 object-cover"
            />
            <div className="p-6 text-left">
                <h2 className="text-xl font-semibold mb-2">{programName} </h2>

                <div className="flex justify-between flex-wrap gap-2">
                    <div className="text-[16px] text-black flex items-center gap-2">
                        <FaClock className="text-[#E268E0]" />
                        <p>{duration} </p>
                    </div>

                    <div className="text-[16px] text-black flex items-center gap-2">
                        <CgGym className="text-[#E268E0]" />
                        <p>GYM</p>
                    </div>

                    <div className="text-[16px] text-black flex items-center gap-2">
                        <FaAppleAlt className="text-[#E268E0]" />
                        <p> Nutrition</p>
                    </div>
                </div>

                <p className="text-gray-600 text-sm mt-3">
                    {description}
                </p>

                <div className='mt-5  text-center'>
                    <button className="bg-[#62D0DF] hover:bg-[#E268E0] text-white px-5 py-3 rounded-[20px] font-normal text-[15px] uppercase tracking-wide transition-all duration-300">
                        <Link to={'/program-pages'}>More Details</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}