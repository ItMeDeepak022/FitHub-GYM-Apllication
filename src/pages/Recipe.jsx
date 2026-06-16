import React from "react";
import { Link } from "react-router";

export default function RecipesPage() {
  return (
    <div className="w-full min-h-screen bg-white sm:px-0 px-2 sm:mb-0 mb-8">

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="w-full h-full overflow-hidden ">
          <img
            src="/Img/recipe.png"
            alt="food"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="w-full flex flex-col gap-8 px-2 sm:px-0">

          {/* Heading */}
          <div>
            <h2 className="text-purple-600 tracking-widest text-sm font-medium uppercase">
              / Nutrition /
            </h2>

            <h1 className="text-2xl sm:text-4xl font-bold mt-2">
              Healthy Nutrition
            </h1>

            <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
              Healthy eating is your first step to success! We are what we eat, remember?
              Proper nutrition is important not only for the period of active weight loss
              but also throughout life if you want to live long and stay active.
              I can prove that healthy food can be delicious and offer you simple recipes.
            </p>
          </div>

          {/* Recipe 1 */}
          <div className="flex items-center gap-4 border-t pt-4">

            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk9nNnSZQQkjUOwThZLMO-YwX6h6DjyLANxfZz1W7Mhw&s=10"
                alt="falafel"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase">
                Illustration
              </p>
              <h2 className="text-lg font-semibold">
                VEGAN FALAFEL FRITTERS
              </h2>
              <p className="text-gray-500 text-sm">
                Time: 50 min | 417 calories
              </p>
            </div>

          </div>

          

          {/* BUTTON */}
          <div className="mt-4">
            <button className="px-6 py-3 bg-[#E268E0] text-white rounded-lg font-semibold hover:bg-[#62D0DF] transition-all duration-300">
             <Link to={'/nutrition'}> More Recipes →</Link>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}