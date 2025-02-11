import React from 'react'
import Logo from "../assets/Frame 1618871078.png"


const NavBar = () => {
  return (
    <div className='w-4/5 m-auto bg-[#02191D] text-white flex justify-between items-center border-2 border-[#0E464F] rounded-2xl p-3 font-[Jejumyeongjo]'>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <ul className='flex gap-6'>
        <li>Events</li>
        <li>My Tokens</li>
        <li>About Projects</li>
      </ul>
      <button className='bg-white text-black p-2 rounded-md'>MY TICKETS <span><i className="ri-arrow-right-long-line"></i></span></button>
    </div>
  )
}

export default NavBar