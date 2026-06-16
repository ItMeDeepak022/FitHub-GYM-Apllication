import React from 'react'
import Sidebar from './common/Sidebar'
import Userheader from './common/Userheader'
import { Outlet } from 'react-router'
import Userfooter from './common/Userfooter'

export default function Rootlayout() {
    return (
        <div className='max-w-full mt-15.5 mx-auto grid sm:grid-cols-[15%_auto] min-h-screen p-0'>

            <div className='w-full sticky top-0 z-50 h-screen sm:block hidden'>
                <Sidebar />
            </div>



            <div className='flex flex-col '>
                <div className='w-full sticky top-0 z-50  '>
                    <Userheader />
                </div>

                {/* Page Content */}
                <main className="flex-1">
                    <Outlet />
                </main>

                <div className='bg-red-800 sticky bottom-0 sm:block hidden'>
                    <Userfooter />
                </div>


            </div>
        </div>

    )
}
