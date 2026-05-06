import React, { useRef } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router";

export default function AboutGYM() {
  const videoRef = useRef();

  const handleSound = async () => {
    const video = videoRef.current;
    video.muted = false;
    try {
      await video.play(); // required after user click
    } catch (err) {
      console.log("Play blocked", err);
    }
  };

  const data = [
    {
      img: "/Img/aman.png",
      name: "Aman Verma",
      age: 24,
      gender: "M",
      category: "Weight Loss",
      text: "I’ve lost 20 kg and more than 20 cm off my torso alone! Gained self-confidence, self-acceptance, and self-love. Now I can wear whatever I want and became more attractive! I am happy and healthy! Thanks a lot!",
    },
    {
      img: "/Img/riya.png",
      name: "Riya Sharma",
      age: 22,
      gender: "F",
      category: "Ideal Body",
      text: "This journey changed my lifestyle completely. I feel stronger, confident, and more energetic every day. Fitness is now part of my life!",
    },
    {
      img: "/Img/shivani.png",
      name: "Shivani Singh",
      age: 26,
      gender: "M",
      category: "Mass Gain",
      text: "I gained lean muscle and improved my strength. My body transformation is unbelievable. Highly recommended training!",
    },
  ];

  return (
    <>

      <div className="w-full h-70 bg-[#332467] mt-6 flex flex-col gap-5 justify-center items-center">
        <h1 className="text-[60px] text-white font-bold">About GYM</h1>

        <div className="flex items-center gap-5 ">
          <p className="text-[20px] text-[#E268E0] font-bold"><Link to={'/'}>Home</Link>  </p>
          <FaGreaterThan className="text-[20px] text-[cyan] mt-1" />
          <p className="text-[20px] text-white font-bold">About GYM</p>
        </div>
      </div>

      <div className="max-w-full min-h-screen bg-gray-100 mx-auto grid grid-cols-1 md:grid-cols-[60%_40%] sm:gap-0 gap-10 items-center">


        <div className="w-full h-full relative">

          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full sm:block hidden object-cover"
          >
            <source src="Img/desktop.mp4" type="video/mp4" />
          </video>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full sm:hidden block object-cover"
          >
            <source src="Img/mobile.mp4" type="video/mp4" />
          </video>

          <button
            onClick={handleSound}
            className="absolute left-[-5px] cursor-pointer sm:top-70 top-70 bg-[#E268E0] hover:bg-[#62D0DF] py-2  font-semibold"
          >
            🔊
          </button>
        </div>


        {/* Right Side (Content) */}
        <div className="flex flex-col gap-5 px-6 md:px-10">

          <h2 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-wide">
            About Our Gym
          </h2>

          <p className="text-gray-800 text-lg">
            Welcome to <span className="font-semibold text-[#E268E0]">FitHub Gym</span> —
            a place where fitness meets passion. Our gym is designed to help you
            transform your body and mind with modern equipment, expert trainers,
            and a motivating environment.
          </p>

          <p className="text-gray-800 text-lg">
            We provide a clean, energetic, and supportive atmosphere where everyone
            feels comfortable — whether you're a beginner or a professional athlete.
            Our goal is to push your limits and help you achieve real results.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mt-3 text-sm text-gray-800">
            <p>✔ Modern Equipment</p>
            <p>✔ Certified Trainers</p>
            <p>✔ Personal Training</p>
            <p>✔ Nutrition Guidance</p>
            <p>✔ Friendly Environment</p>
            <p>✔ Flexible Timings</p>
          </div>

          {/* Button */}
          <button className="w-fit mt-4 sm:mb-0 mb-8 bg-[#E268E0] hover:bg-[#62D0DF] text-black px-6 py-3 rounded-lg font-semibold uppercase tracking-wide transition-all duration-300 hover:scale-105">
           <Link to={'/program-pages'}> Join Now</Link>
          </button>

        </div>
      </div>


      {/* //TESTIMONIALS */}
      <div className="w-full bg-white py-16 px-4 sm:px-10 md:px-20">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-purple-600 tracking-widest text-sm">
            / TESTIMONIALS /
          </h2>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">
            What Our Clients Say 💬
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real transformations, real results. See how our training changed lives.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {data.map((item, index) => (
            <div
              key={index}
              className="w-full full bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition  flex flex-col items-center text-center"
            >

              {/* Image */}
              <div className="w-full h-full ">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Name + Info */}
              <div className="w-full h-full p-5 text-justify">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-gray-500 text-sm">
                  Age: {item.age} | {item.gender}
                </p>

                {/* Category */}
                <span className="mt-2 px-3 py-1 text-xs rounded-full bg-[#E268E0] text-white">
                  {item.category}
                </span>

                {/* Text */}
                <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                  {item.text}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </>


  );
}