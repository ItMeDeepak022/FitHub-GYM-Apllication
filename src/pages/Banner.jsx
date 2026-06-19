import React, { useRef } from 'react'
import { Link } from 'react-router'

export default function Banner() {

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
    return (

        // style={{ backgroundImage: "url('/Img/cover.png')" }}
        <div className="w-full min-h-screen relative">
            <div>
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    // controls
                    controlsList="nodownload noplaybackrate"
                    loop
                    playsInline
                    className="absolute sm:block hidden inset-0 mt-15 w-full h-full object-cover"
                >
                    <source src="Img/desktop.mp4" type="video/mp4" />
                </video>

                <video
                    autoPlay
                    ref={videoRef}
                    muted
                    loop
                    playsInline
                    className="absolute sm:hidden block mt-15 inset-0 w-full h-full object-cover"
                >
                    <source src="Img/mobile.mp4" type="video/mp4" />
                </video>
            </div>

            <div className='absolute sm:top-60 top-70 sm:p-0 p-2 sm:w-[60%] w-full flex   justify-center'>

                <div className='flex flex-col sm:gap-5 gap-3 ml-10'>
                    <h1 className='sm:text-[75px] text-[35px] text-justify text-white font-bold'>MAKE A STEP TO A
                        <span className='block text-[#E268E0]'>HEALTHIER LIFE</span>


                    </h1>

                    <p className='sm:text-[23px] text-[19px]  text-white sm:mt-0 mt-5 text-start '> With professional coach Evelyn Mason!</p>

                    <a
                        href="#program"
                        className="w-[170px] h-[50px] flex items-center justify-center bg-[#E268E0]  hover:bg-[#62D0DF] text-white rounded-lg font-semibold uppercase tracking-wide transition-all duration-300 "
                    >
                        Choose now +
                    </a>
                </div>

                <button
                    onClick={handleSound}
                    className="absolute left-[-10px] cursor-pointer hover:bg-[#62D0DF] sm:top-20 top-30 bg-[#E268E0] px-2 py-2  font-semibold"
                >
                    🔊
                </button>




            </div>

        </div>
    )
}
