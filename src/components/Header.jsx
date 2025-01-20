import React from 'react'
import logo from '../assets/logo.png'
// ICONS
import { FaAlignLeft } from "react-icons/fa6";
const Header = ({ isSideBar, setIsSideBar }) => {
  const toggleSideBar = () =>{
    setIsSideBar(!isSideBar)
  }
  

  return (
    <header className={`hidden sm:flex py-6 flex justify-between h-[80px] px-5 items-center bg-[#2448C7]`}>
      <img src={logo} alt="logo" className='w-20 pl-4'/>
      <span className='sm:hidden block p-2 text-white cursor-pointer' onClick={toggleSideBar}> <FaAlignLeft size="1.4rem"/> </span>
    </header>
  )
}

export default Header
