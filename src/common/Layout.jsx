import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'
import ContactUs from '../pages/ContactUs'


export default function Layout() {
    return (
        <div>
            <Header />
            <Outlet />

            <ContactUs />
            <Footer />
        </div>
    )
}

