import React from "react";

export default function BlogSection() {
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
            <div className="flex sm:flex-row  flex-col gap-5 items-center ">



                <div className="sm:w-150 w-full rounded-[20px]">
                    <img
                        src="Img/sidePose.png"
                        alt="Modern Gym"
                        className="sm:w-full sm:h-[500px] h-[400px]sm:rounded-[20px] rounded-none"
                    />
                </div>
                {/* RIGHT CONTENT */}
                <div className="flex flex-col gap-5">

                    {/* Blog 1 */}
                    <div className="shadow-sm p-5">
                        <p className="text-sm text-gray-400 mb-2">Illustration</p>
                        <h2 className="text-xl sm:text-2xl font-bold mb-3">
                            Make fitness your lifestyle
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Fitness is not just hard training every day, it has to be your way of life.
                            Change your eating habits, believe in yourself, and strive for a better, healthier life!
                        </p>
                        <button className="mt-4 px-6 py-3 bg-[#E268E0] text-white rounded-lg font-semibold shadow-md hover:bg-[#62D0DF] transition-all duration-300">
                            Read More →
                        </button>
                    </div>



                    {/* Blog 2 */}
                    <div className="shadow-sm p-5">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3">
                            How food affects weight loss
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            To lose weight, you need to eat healthy food. However, few people understand
                            how food really affects the speed and quality of weight loss.
                        </p>
                        <button className="mt-4 px-6 py-3 bg-[#E268E0] text-white rounded-lg font-semibold shadow-md hover:bg-[#62D0DF] transition-all duration-300">
                            Read More →
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}