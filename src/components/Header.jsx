import React from 'react'
import logo from '../assets/logo.png'
// ICONS
import { FaAlignLeft } from "react-icons/fa6";
const Header = ({ isSideBar, setIsSideBar }) => {
  const closeOpen = () =>{
    setIsSideBar(!isSideBar)
  }

  return (
    <div className={`header py-6 flex ${isSideBar ? "justify-between" : "justify-center"} h-[80px] px-5 items-center bg-[#2448C7]`}>
      {isSideBar && <img src={logo} alt="logo" className='w-20 pl-4'/>}
      <span className='text-white cursor-pointer' onClick={closeOpen}> <FaAlignLeft size="1.2rem"/> </span>
    </div>
  )
}

export default Header
