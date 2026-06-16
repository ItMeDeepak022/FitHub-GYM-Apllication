import React from 'react'

export default function Userfooter() {
    return (
        <footer className=" py-2 text-black">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-center flex-col items-center gap-1">
                    <h3 className="text-lg font-semibold">FITHUB GYM</h3>
                    <p className=" text-sm text-gray-400">© {new Date().getFullYear()} fitHub GYM. All rights reserved.</p>

                </div>
            </div>
        </footer>
    )
}
