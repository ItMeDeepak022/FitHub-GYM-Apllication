import axios from "axios";
import { useState, useEffect } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AboutGYM() {
  const apiUrl = import.meta.env.VITE_WebAPI;



  let [location, setlocation] = useState([])
  let getlocations = () => {
    axios.get(
      `${apiUrl}/fetch-location`
    ).then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes);
        setlocation(finalRes.data)
      })
  }

  let [data, setdata] = useState([])
  let gettestimonials = () => {
    axios.get(
      `${apiUrl}/fetch-testimonial`
    ).then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes);
        setdata(finalRes.data)
      })
  }


  useEffect(() => {
    getlocations()
    gettestimonials()
  }, [])

  return (
    <>

      <div className="w-full sm:h-70 h-50  bg-[#332467] sm:mt-6 mt-7 flex flex-col sm:gap-5 gap-3 justify-center items-center">
        <h1 className="sm:text-[60px] text-[50px] text-white font-bold">About GYM</h1>

        <div className="flex items-center gap-5 ">
          <p className="text-[20px] text-[#E268E0] font-bold"><Link to={'/'}>Home</Link>  </p>
          <FaGreaterThan className="text-[20px] text-[cyan] mt-1" />
          <p className="text-[20px] text-white font-bold">About GYM</p>
        </div>
      </div>

      {
        location.map((obj) => {
          const {
            Address,
            aboutgym,
            createdAt,
            email,
            locationurl,
            openingTime,
            phoneNumber
          } = obj;
          return (
            <div className="max-w-full min-h-screen bg-gray-100 mx-auto grid grid-cols-1 md:grid-cols-[60%_40%] sm:gap-0 gap-5 items-center">


              <div className="w-full h-full ">
                <iframe
                  src={locationurl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="sm:h-full h-[350px]"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

              </div>


              {/* Right Side (Content) */}
              <div className="flex flex-col gap-5 px-6 md:px-10">

                <h2 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-wide">
                  About Our Gym
                </h2>

                <p className="text-gray-800 text-lg">
                  Welcome to <span className="font-semibold text-[#E268E0]">FitHub Gym</span> —
                  {aboutgym}
                </p>



                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mt-3 text-sm text-gray-800">
                  <p>✔ Modern Equipment</p>
                  <p>✔ Nutrition Guidance</p>
                  <p>✔ Friendly Environment</p>
                  <p>✔ Flexible Timings</p>
                  <p>✔ {openingTime} </p>
                </div>

                {/* Button */}
                <button className="w-fit mt-4 sm:mb-0 mb-8 bg-[#E268E0] hover:bg-[#62D0DF] text-black px-6 py-3 rounded-lg font-semibold uppercase tracking-wide transition-all duration-300 hover:scale-105">
                  <Link to={'/program-pages'}> Join Now</Link>
                </button>

              </div>

            </div>
          )
        })
      }


      {/* //TESTIMONIALS */}
      <div className="w-full bg-white sm:pb-15 px-4 sm:px-10 md:px-20">

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


        {/* Cards */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay:2000,
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
          {data.map((obj) => (
            <SwiperSlide>
              <AboutCard data={obj} />
            </SwiperSlide>
          ))}
        </Swiper>



      </div>
    </>


  );
}

function AboutCard({ data }) {
  const {
    feedback,
    name,
    program,
    rating,
    testimonialImg
  } = data
  return (
    <div className="max-w-[1320px] mx-auto">
      <div
        className="w-full bg-gray-100  shadow-md hover:shadow-xl transition  flex flex-col items-center text-center"
      >

        {/* Image */}
        <div className="w-full h-full ">
          <img
            src={testimonialImg}
            alt={name}
            className="w-full sm:h-[500px] h-[400px] object-cover"
          />
        </div>

        {/* Name + Info */}
        <div className="w-full h-45 p-5 text-justify">
          <h3 className="text-lg font-bold">{name}</h3>


          {/* Category */}
          <span className="mt-2 px-3 py-1 text-xs rounded-full bg-[#E268E0] text-white">
            {program}
          </span>

          {/* Text */}
          <p className="text-gray-600 text-md mt-4 leading-relaxed">
            {feedback}
          </p>
          <p className="text-[green] text-sm text-center">
            {
              rating == "1" && "⭐"
            }

            {
              rating == "2" && "⭐⭐"
            }

            {
              rating == "3" && "⭐⭐⭐"
            }

            {
              rating == "4" && "⭐⭐⭐⭐"
            }

            {
              rating == "5" && "⭐⭐⭐⭐⭐"
            }
          </p>
        </div>

      </div>

    </div>
  )
}