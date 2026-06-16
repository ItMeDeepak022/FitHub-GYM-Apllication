import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'
import ContactUs from '../pages/ContactUs'

import Typewriter from "typewriter-effect";
import axios from 'axios'


export default function Layout() {

    const apiUrl = import.meta.env.VITE_WebAPI;


    let [program, setprogram] = useState([])
    let getprogramdata = () => {
        axios.get(
            `${apiUrl}/fetch-program`).then((res) => res.data)
            .then((finalRes) => {
                
                setprogram(finalRes.data)
            })
    }

    useEffect(() => {
        getprogramdata()
    }, [])

    function TypeWriterText() {
        return (
            <Typewriter
                options={{
                    strings: ['loading...'],
                    autoStart: true,
                    loop: true,
                    delay:50,
                    deleteSpeed:50,
                }}
            />
        );
    }

    if (program.length===0) {
        return (
            <div className='max-w-full min-h-screen text-white font-bold text-4xl bg-black flex items-center justify-center'>
                <TypeWriterText />
            </div>
        )
    }

    return (

        <div>
            <Header />

            <Outlet />

            <ContactUs />
            <Footer />
        </div>
    )
}

