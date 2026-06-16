import axios from "axios";
import React, { useEffect, useState } from "react";

export default function BlogSection() {
    const apiUrl = import.meta.env.VITE_WebAPI;

    let [blog, setblog] = useState([])
    let getblogs = () => {
        axios.get(
            `${apiUrl}/fetch-blog`
        ).then((res) => res.data)
            .then((finalRes) => {
                // console.log(finalRes);
                setblog(finalRes.data)
            })
    }

    useEffect(() => {
        getblogs()
    }, [])
    return (
        <div className="w-full bg-white py-15 px-4 sm:px-10 md:px-20">

            {/* Heading */}
            <div className="mb-10">
                <h2 className="text-[purple] font-extrabold tracking-widest text-md text-center mb-5">/ BLOG /</h2>
                <h1 className="text-3xl uppercase text-center sm:text-[50px] font-bold mt-2">
                    Useful Post
                </h1>
                <p className="text-gray-600 mt-4 sm:text-center text-justify">
                    Read more about nutrition and training to understand the processes in your body.
                </p>
            </div>

            {/* Main Layout */}

            <div className="max-w-7xl mx-auto space-y-12">
                {blog.map((obj, index) => {
                    const {
                        blogImg,
                        blogTitle,
                        blogContent,
                        authorName,
                    } = obj;

                    return (
                        <div
                            key={index}
                            className="grid lg:grid-cols-2 bg-white  overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={blogImg}
                                    alt={blogTitle}
                                    className="w-full h-[350px] lg:h-[450px] object-cover hover:scale-110 transition duration-700"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8 lg:p-12 border-1 border-gray-200 sm:m-15 flex flex-col justify-center">
                                <span className="inline-block w-fit px-4 py-2 bg-[#E268E0]/10 text-[#E268E0] rounded-full text-sm font-semibold mb-4">
                                    Fitness Blog
                                </span>

                                <h2 className="text-3xl font-bold text-gray-900 mb-5">
                                    {blogTitle}
                                </h2>

                                <p className="text-gray-600 leading-8 mb-8">
                                    {blogContent}
                                </p>

                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Written By
                                        </p>
                                        <h4 className="font-semibold text-lg">
                                            {authorName}
                                        </h4>
                                    </div>

                                   
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>



        </div>
    );
}


