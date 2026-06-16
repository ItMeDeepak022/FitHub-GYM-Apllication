import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FiEdit } from 'react-icons/fi'
import { TbLockPassword } from "react-icons/tb";
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
export default function Trainee() {

  const apiUrl = import.meta.env.VITE_UserUrl;

  let [edit, setedit] = useState(false)
  let [change, setchange] = useState(false)

  let showHide = () => {
    setedit(!edit)
  }

  let changePassword = () => {
    setchange(!change)
  }



  let updatedPassword = (e) => {
    e.preventDefault()
    let obj = {
      confirmpassword: e.target.confirmpassword.value,
      newpassword: e.target.newpassword.value,
      currentpassword: e.target.currentpassword.value,
    }

    axios.post(
      `${apiUrl}/change-userpassword`, obj,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    ).then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          changePassword()
          toast.success(finalRes.message)
          e.target.reset()

        }
        else {
          toast.error(finalRes.message)
        }
      })
  }


  let [profile, setprofile] = useState({})
  const { email, mobileNumber, name, about, profileImg } = profile;

  let navigate = useNavigate()
  let token = localStorage.getItem('token')
  let [oldImg, setoldImg] = useState('')

  let getuserProfile = () => {
    axios.get(
      `${apiUrl}/get-userprofile`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    ).then((res) => res.data)
      .then((finalRes) => {
        setprofile(finalRes.data)
      })

  }
  token && (
    useEffect(() => {
      getuserProfile()
    }, [token])

  )


  let editProfile = (e) => {

    e.preventDefault()
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobileNumber", mobileNumber);
    formData.append("about", e.target.about.value);

    if (e.target.profileImg.files[0]) {
      formData.append(
        "profileImg",
        e.target.profileImg.files[0]
      );
    }

    axios.put(
      `${apiUrl}/edit-profile`, formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    ).then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.status) {
          getuserProfile()
          toast.warn(finalRes.message)
          e.target.reset()
          setTimeout(() => {
            navigate('/user/home')
          }, 1500);
        }


      })
  }


  useEffect(() => {
    if (profileImg) {
      const fileName = decodeURIComponent(
        profileImg.split('/').pop()
      );
      setoldImg(fileName);

    }
  }, [profileImg]);

  return (
    <div className="min-h-screen bg-slate-100 sm:p-5 p-2">
      <ToastContainer />
      {/* Container */}
      <div className="max-w-6xl mx-auto pb-5">

        {/* Top Profile Card */}
        <div className="bg-white  shadow-xl overflow-hidden">

          <div className="h-56 bg-black relative">

            {/* Profile Image */}
            <div className="absolute top-12 sm:left-20 left-4">

              <img
                src={profile.profileImg}
                alt='profileImg'
                className="w-60 h-60 rounded-full border-[6px] border-[purple] shadow-xl object-cover"
              />

            </div>

          </div>
          <div className="relative pt-20 pb-8 sm:px-10  px-3 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            <div className='sm:text-start text-center' >

              <h1 className="sm:text-4xl text-[25px] font-bold text-slate-900">
                {profile.name}
              </h1>
              <div className='flex flex-col'>
                <p className="text-slate-500 mt-2 text-lg">
                  {profile.email}
                </p>
                <p className="text-slate-500 mt-2 text-lg">
                  {profile.mobileNumber}
                </p>
              </div>


              <div className="flex flex-wrap sm:justify-start justify-center gap-3 mt-5">

                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  Trainee's
                </span>

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                  Active
                </span>

              </div>

            </div>

            {/* Buttons */}
            <div className='flex sm:gap-5 gap-2 sm:flex-row flex-col sm:justify-center justify-center' >



              <button onClick={showHide} className="border flex  justify-center items-center gap-3  text-[16px] hover:border-[cyan] font-normal border-1 border-slate-200 text-[purple]  px-5 sm:py-1 py-2 rounded-[15px] transition-all">
                <p className=''>Edit</p> <FiEdit />
              </button>

              <button onClick={changePassword} className="border flex  justify-center items-center gap-3  text-[16px] hover:border-[cyan] font-normal border-1 border-slate-200 text-[purple]  px-5 sm:py-1 py-2 rounded-[15px] transition-all">
                <p className=''>Chagne Password</p> <TbLockPassword />
              </button>

            </div>

          </div>
        </div>



      </div>

      {
        edit && (
          <div className='max-w-[1150px] mx-auto bg-white mt-8 rounded-[10px]'>
            <div className="bg-black  p-8 text-white rounded-t-[10px]">

              <h1 className="text-4xl font-bold">
                Edit Profile
              </h1>

              <p className="mt-2 text-slate-300">
                Update your account information
              </p>

            </div>

            <form className="p-8 space-y-5" onSubmit={editProfile}>

              {/* Profile Image */}
              <div className="flex flex-col justify-center items-center">



                <input
                  type="file"
                  name='profileImg'
                  className="mt-5 border border-slate-300 rounded-xl sm:w-[20%] w-[100%] py-2 px-3 "
                />
                <p className='text-[18px] text-[green] font-bold'>Old Img:{oldImg}</p>

              </div>

              {/* Inputs */}
              <div className="grid md:grid-cols-2 gap-6">

                {/* Full Name */}
                <div>

                  <label className="block mb-2 font-semibold text-slate-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setprofile({ ...profile, name: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full border border-slate-300 rounded-2xl px-5 py-3 outline-none"
                  />

                </div>

                {/* Email */}
                <div>

                  <label className="block mb-2 font-semibold text-slate-700">
                    Email
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setprofile({
                      ...profile,
                      email: e.target.value
                    })}
                    placeholder="Enter email"
                    className="w-full border border-slate-300 rounded-2xl px-5 py-3 outline-none"
                  />

                </div>

                {/* Mobile */}
                <div>

                  <label className="block mb-2 font-semibold text-slate-700">
                    Mobile Number
                  </label>

                  <input
                    type="text"
                    placeholder="Enter mobile number"
                    value={mobileNumber}
                    onChange={(e) => setprofile({ ...profile, mobileNumber: e.target.value })}
                    className="w-full border border-slate-300 rounded-2xl px-5 py-3 outline-none"
                  />

                </div>

                {/* Role */}
                <div>

                  <label className="block mb-2">
                    Role
                  </label>

                  <input
                    type="text"
                    value="Gym Candidate"
                    readOnly
                    className="w-full outline-none text-[red] bg-slate-100 border border-slate-300 rounded-2xl px-5 py-3"
                  />

                </div>

              </div>

              {/* About */}
              <div>

                <label className="block mb-2 font-semibold text-slate-700">
                  About
                </label>

                <textarea
                  rows="5"
                  value={about}
                  onChange={(e) => setprofile({ ...profile, about: e.target.value })}
                  name='about'
                  placeholder="Write something about yourself..."
                  className="w-full border border-slate-300 rounded-2xl px-5 py-3 outline-none "
                ></textarea>

              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">

                <button
                  type="submit"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-2xl font-semibold transition-all"
                >
                  Update Profile
                </button>

                <button
                  type="button"
                  className="border border-slate-300 hover:bg-slate-100 px-8 py-3 rounded-2xl font-semibold transition-all"
                >
                  Cancel
                </button>

              </div>

            </form>
          </div>

        )
      }

      {
        change && (

          <div className="max-w-[1150px] mx-auto bg-white rounded-3xl shadow-xl mt-8 overflow-hidden">

            {/* Header */}
            <div className="bg-gradient-to-r from-black via-slate-800 to-black p-8 text-white">

              <h1 className="text-4xl font-bold">
                Change Password
              </h1>

              <p className="mt-2 text-slate-300">
                Keep your account secure by updating your password.
              </p>

            </div>



            {/* Form */}
            <form className="p-8 space-y-6" onSubmit={updatedPassword} >

              {/* Current Password */}
              <div>

                <label className="block mb-2 font-semibold text-slate-700">
                  Current Password
                </label>

                <input
                  type="password"
                  name='currentpassword'
                  placeholder="Enter current password"
                  className="w-full border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:border-black focus:ring-2 focus:ring-slate-200 transition-all"
                />

              </div>

              {/* New Password */}
              <div>

                <label className="block mb-2 font-semibold text-slate-700">
                  New Password
                </label>

                <input
                  type="password"
                  name='newpassword'
                  placeholder="Enter new password"
                  className="w-full border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:border-black focus:ring-2 focus:ring-slate-200 transition-all"
                />

              </div>

              {/* Confirm Password */}
              <div>

                <label className="block mb-2 font-semibold text-slate-700">
                  Confirm Password
                </label>

                <input
                  type="password"
                  name='confirmpassword'
                  placeholder="Confirm new password"
                  className="w-full border border-slate-300 rounded-2xl px-5 py-4 outline-none focus:border-black focus:ring-2 focus:ring-slate-200 transition-all"
                />

              </div>

              {/* Password Rules */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">

                <h3 className="font-bold text-slate-800 mb-3">
                  Password Requirements
                </h3>

                <ul className="space-y-2 text-sm text-slate-600">

                  <li>✓ Minimum 8 characters</li>
                  <li>✓ At least one uppercase letter</li>
                  <li>✓ At least one lowercase letter</li>
                  <li>✓ At least one number</li>
                  <li>✓ At least one special character</li>

                </ul>

              </div>

              {/* Buttons */}
              <div className="flex sm:flex-row flex-col gap-3 pt-2">

                <button
                  type="submit"
                  className="bg-black hover:bg-slate-800 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300"
                >
                  Update Password
                </button>

                <button
                  type="reset"

                  className="border border-slate-300 hover:bg-slate-100 px-8 py-3 rounded-2xl font-semibold transition-all duration-300"
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>
        )
      }


    </div >
  )
}
