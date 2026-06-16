import React from 'react'
import { LuLogIn } from 'react-icons/lu'
import { Link, useNavigate } from 'react-router'

export default function Sidebar() {

  let navigate = useNavigate()
  
  let userLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem("userName");
    navigate('/login-page')
  }
  return (
    <aside className="w-full h-full bg-black text-white shadow-lg sm:block hidden">
      <div className="mb-8 flex flex-col justify-center items-center p-4 bg-red-800">
        <h2 className="text-xl font-semibold">User Dashboard</h2>
        <p className="text-sm text-slate-300">Your gym control panel</p>
      </div>
      <nav className="space-y-5 px-3 pt-5">
        <Link to={'/user/home'} className="block rounded-lg px-4 py-3 bg-slate-800 hover:bg-slate-700 transition">
          Home
        </Link>
        <Link to={'/user/profile'} className="block rounded-lg px-4 py-3 bg-slate-800 hover:bg-slate-700 transition">
          Profile
        </Link>
        <Link to={'/user/subscription'} className="block rounded-lg px-4 py-3 bg-slate-800 hover:bg-slate-700 transition">
          Subscription
        </Link>
        <Link to={'/user/histroy'} className="block rounded-lg px-4 py-3 bg-slate-800 hover:bg-slate-700 transition">
          Histroy
        </Link>

        <p onClick={userLogout} className="cursor-pointer flex items-center gap-5 rounded-lg px-4 py-3 bg-slate-800 hover:bg-slate-700 transition">
          Logout <LuLogIn className='cursor-pointer text-[red] text-[25px] font-bold' />
        </p>
      </nav>
    </aside>
  )
}
