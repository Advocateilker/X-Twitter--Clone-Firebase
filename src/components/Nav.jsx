import React from 'react'
import { navSections } from '../constants'
import UserLoader from './UserLoader'
import { BiDoorOpen } from "react-icons/bi";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const Nav = ({ user }) => {
  console.log(user)
  return (
    <nav className='flex h-screen flex-col justify-between items-end p-2 py-4'>
      <div>
        <img className='w-14 mb-4' src="x-logo.png" alt="X-Logo" />
        {navSections?.map((item, i) => (
          <div key={i} className='flex justify-center md:justify-normal items-center gap-3 text-2xl md:text-xl cursor-pointer transition rounded hover:bg-gray-700'>
            {item.icon}
            <span className='hidden md:block'>{item.title}</span>
          </div>
        ))}
      </div>
      <div>
        {!user ? <UserLoader /> :
          (<div className='flex flex-col gap-4'>

            <div className='flex items-center gap-2'>
            <img className='w-12 h-12 rounded-full' src={user?.photoURL} alt="" />
            <p className='hidden md:block'>{user.displayName}</p>

            </div>



            <button onClick={()=>signOut(auth)} className='flex justify-center p-1 bg-gray-700 rounded tex-2xl md:text-xl items-center gap-2' >
              <BiDoorOpen />
              <span className='hidden md:block'>Çıkış Yap</span>
              </button>
          </div>)}
      </div>

    </nav>
  )
}

export default Nav