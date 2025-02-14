import React from 'react'
import Logo from "../assets/Frame 1618871078.png"
import {Link} from "react-router-dom"


const NavBar = () => {
  return (
    <div className='w-[350px]  xl:w-4/5 m-auto bg-[#02191D] text-white flex justify-between items-center border-2 border-[#0E464F] rounded-2xl p-3 font-[Jejumyeongjo]'>
      <div className="logo">
        <Link to="/"><img src={Logo} alt="" /></Link>
      </div>
      <ul className='hidden sm:flex gap-6'>
        <Link to="/"><li>Events</li></Link>
        <li>My Tokens</li>
        <Link to="/about"><li>About Projects</li></Link>
      </ul>
      <Link to="/tickets"><button className='bg-white text-black p-2 rounded-md'>MY TICKETS <span><i className="ri-arrow-right-long-line"></i></span></button></Link>
    </div>
  )
}

export default NavBar