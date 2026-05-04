import React from "react";

export default function Success() {
  return (
    <div
      className="w-full min-h-screen relative bg-cover bg-center"
      style={{ backgroundImage:"url('/Img/testimonial.png')" }}
    >
      {/* Content */}
      <div className="relative  flex items-center justify-center min-h-screen px-4">
        
        <div className="sm:max-w-[60%] sm:text-start w-full absolute sm:top-20 sm:right-2 sm:p-0 p-3 text-white ">
          
          {/* Heading */}
          <h2 className="text-[15px] sm:text-start text-center text-[cyan] mb-10">
            / SUCCESS STORIES /
          </h2>

          {/* Name */}
          <h1 className="text-2xl sm:text-7xl sm:text-start text-center font-bold">
            JAMES SMITH,
            <span className="sm:block  text-[#E268E0]">DESIGNER</span>
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-5 sm:ml-3 justify-center sm:justify-start ">
            <span className="bg-white/20 px-3 py-1 rounded-full sm:text-[18px] text-bold text-sm">
              Personal Trainings
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full sm:text-[18px] text-bold text-sm">
              10 Weeks+
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full sm:text-[18px] text-bold text-sm">
              Nutrition
            </span>
          </div>

          {/* Text */}
          <p className="mt-6 text-gray-200 leading-relaxed font-normal text-justify text-base sm:text-[30px]">
            "If you are in search of a certified professional fitness trainer, go no further, hire Evelyn Mason. She is really the best of the best and now I know why! She has developed a personal fitness program designed to lose my extra weight in a short time period through intensive workouts and individual diet plan. Thank you very much! I couldn't be happier with the final result!"
          </p>

        </div>

      </div>
    </div>
  );
}