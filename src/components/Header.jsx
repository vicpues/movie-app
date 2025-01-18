import React from 'react'
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <div className='py-6 flex justify-center bg-[#2448C7]'>
      <img src={logo} alt="logo" className='w-20'/>
    </div>
  )
}

export default Header
