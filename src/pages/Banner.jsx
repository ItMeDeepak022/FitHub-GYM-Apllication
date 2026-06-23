// import React, { useRef } from 'react'
// import { Link } from 'react-router'

// export default function Banner() {

//     const videoRef = useRef();

//     const handleSound = async () => {
//         const video = videoRef.current;
//         video.muted = false;
//         try {
//             await video.play(); // required after user click
//         } catch (err) {
//             console.log("Play blocked", err);
//         }
//     };
//     return (

//         // style={{ backgroundImage: "url('/Img/cover.png')" }}
//         <div className="w-full min-h-screen relative">
//             <div>
//                 <video
//                     ref={videoRef}
//                     autoPlay
//                     muted
//                     // controls
//                     controlsList="nodownload noplaybackrate"
//                     loop
//                     playsInline
//                     className="absolute sm:block hidden inset-0 mt-15 w-full h-full object-cover"
//                 >
//                     <source src="Img/desktop.mp4" type="video/mp4" />
//                 </video>

//                 <video
//                     autoPlay
//                     ref={videoRef}
//                     muted
//                     loop
//                     playsInline
//                     className="absolute sm:hidden block mt-15 inset-0 w-full h-full object-cover"
//                 >
//                     <source src="Img/mobile.mp4" type="video/mp4" />
//                 </video>
//             </div>

//             <div className='absolute sm:top-60 top-70 sm:p-0 p-2 sm:w-[60%] w-full flex   justify-center'>

//                 <div className='flex flex-col sm:gap-5 gap-3 ml-10'>
//                     <h1 className='sm:text-[75px] text-[35px] text-justify text-white font-bold'>MAKE A STEP TO A
//                         <span className='block text-[#E268E0]'>HEALTHIER LIFE</span>


//                     </h1>

//                     <p className='sm:text-[23px] text-[19px]  text-white sm:mt-0 mt-5 text-start '> With professional coach Evelyn Mason!</p>

//                     <a
//                         href="#program"
//                         className="w-[170px] h-[50px] flex items-center justify-center bg-[#E268E0]  hover:bg-[#62D0DF] text-white rounded-lg font-semibold uppercase tracking-wide transition-all duration-300 "
//                     >
//                         Choose now +
//                     </a>
//                 </div>

//                 <button
//                     onClick={handleSound}
//                     className="absolute left-[-10px] cursor-pointer hover:bg-[#62D0DF] sm:top-20 top-30 bg-[#E268E0] px-2 py-2  font-semibold"
//                 >
//                     🔊
//                 </button>




//             </div>

//         </div>
//     )
// }


import React, { useRef } from 'react';

export default function Banner() {
    const desktopVideoRef = useRef(null);
    const mobileVideoRef = useRef(null);

    const handleSound = async () => {
        const video =
            window.innerWidth >= 640
                ? desktopVideoRef.current
                : mobileVideoRef.current;

        if (!video) return;

        video.muted = false;

        try {
            await video.play();
        } catch (err) {
            console.log("Play blocked", err);
        }
    };

    return (
        <div className="w-full min-h-screen relative overflow-hidden">
            {/* Desktop Video */}
            <video
                ref={desktopVideoRef}
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
                controlsList="nodownload noplaybackrate"
                onContextMenu={(e) => e.preventDefault()}
                className="absolute sm:block hidden inset-0 mt-15 w-full h-full object-cover"
            >
                <source src="Img/desktop.mp4" type="video/mp4" />
            </video>

            {/* Mobile Video */}
            <video
                ref={mobileVideoRef}
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
                controlsList="nodownload noplaybackrate"
                onContextMenu={(e) => e.preventDefault()}
                className="absolute sm:hidden block inset-0 mt-15 w-full h-full object-cover"
            >
                <source src="Img/mobile.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 mt-15 bg-black/40 z-[1]"></div>

            {/* Content */}
            <div className="absolute inset-0 z-10 flex items-center justify-center sm:justify-start px-4 sm:px-10 lg:px-20">
                <div className="max-w-4xl flex flex-col sm:gap-6 text-left">
                    <h1 className="text-white  sm:text-start text-justify  font-bold leading-tight text-[34px] sm:text-5xl md:text-6xl lg:text-7xl">
                        MAKE A STEP TO A
                        <span className=" text-[#E268E0] ml-2">
                            HEALTHIER LIFE
                        </span>
                    </h1>

                    <p className="text-white mt-4 text-justify text-lg sm:text-xl md:text-2xl">
                        With professional fitness dynamic gym!
                    </p>

                    <a
                        href="#program"
                        className="inline-flex w-fit mt-6 px-6 py-3 bg-[#E268E0] hover:bg-[#62D0DF] text-white rounded-lg font-semibold uppercase tracking-wide transition-all duration-300"
                    >
                        Choose now +
                    </a>
                </div>

                {/* Sound Button */}
                <button
                    onClick={handleSound}
                    className="absolute bottom-8 right-4 sm:right-8 bg-[#E268E0] hover:bg-[#62D0DF] text-white px-3 py-2 rounded-md cursor-pointer transition-all duration-300"
                >
                    🔊
                </button>
            </div>
        </div>
    );
}