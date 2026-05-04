import React from "react";

export default function FitWithMason() {
    return (
        <div className="w-full bg-white text-gray-900 py-16 px-4 md:px-20">

            {/* Heading */}
            <div className="text-center mb-10">
                <h1 className="sm:text-4xl text-3xl md:text-5xl font-bold text-black">
                    #FITWITHMASON
                </h1>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                    Follow my Instagram for daily fitness tips, expert advice, and motivation 💪
                </p>
            </div>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

                <div className="w-full h-[450px] sm:h-[500px]">
                    <img
                        src="https://media.gettyimages.com/id/585857127/photo/physical-athlete-weightlifting.jpg?s=612x612&w=0&k=20&c=leaK779HBRCyrSWsw-2JRWpPqJIk3CbHHzpWyJvMf5Y="
                        className="w-full h-full object-cover rounded-[10px]"
                    />
                </div>

                <div className="w-full h-[450px] sm:h-[500px] flex flex-col gap-2">
                    
                    <div className="w-full h-full">
                        <img
                            src="https://media.gettyimages.com/id/699086757/photo/hispanic-man-weightlifting-in-gymnasium.jpg?s=612x612&w=0&k=20&c=1QP47TbcpjrUmjtef-ZoY2TcjvEu1zrzyJoctayk2ZY="
                            className=" object-cover   shadow-md"
                        />
                    </div>

                    <div className="w-full h-full overflow-hidden">
                        <img
                            src="Img/fitlogo.webp"
                            className="w-full h-full object-cover  shadow-md"
                        />
                    </div>

                </div>

                <div className="w-full h-[450px] sm:h-[500px]" >
                    <img
                        src="https://media.gettyimages.com/id/564948451/photo/two-friends-exercising-bench-press-in-gym.jpg?s=612x612&w=0&k=20&c=1OEQA6DlUondJpApIK74txF1cZCSnflniRFlI7hThRI="
                        className="w-full h-full object-cover rounded-2xl shadow-md"
                    />
                </div>

            </div>

            {/* Button */}
            <div className="text-center mt-10">
                <button className="bg-black text-white px-6 py-3 rounded-full">
                    Follow on Instagram
                </button>
            </div>

        </div>
    );
}