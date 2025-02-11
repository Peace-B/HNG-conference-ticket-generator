import React from 'react'
import NavBar from '../components/NavBar'
import Ticket from "../assets/Ticket.png"
// import { Link } from 'react-router-dom'

const Ready = () => {
  
  return (
      <div className='h-[800px] bg-gradient-to-b from-[#041E23] to-[#07373F] pt-1'>
        <NavBar/>
      <div className=" bg-[#041E23] w-[700px] h-[600px] m-auto mt-20 border-1 border-[#0E464F] rounded-3xl px-12 pt-8">
        <div className="bar">
        <h1 className="text-3xl text-white ">Ready</h1>
          <div className="bar-fill border-1 border-[#0E464F]"></div>
          <div className="text-center text-white mt-8">
            <p className='text-2xl pb-4'>Your Ticket is Booked!</p>    
            <p className='pb-6'>You can download or check your email for a copy</p>      
          </div>
          <div className="py-8 w-[530px] m-auto pb-">
            <img src={Ticket} alt="" />
          </div>
              </div>
              <div className="bg-[#041E23] w-[570px] m-auto mt-8 border-1 border-[#197686] rounded-4xl flex justify-evenly">
              <button className="text-[#0E464F] border-2 border-[#0E464F] px-10 py-2.5 rounded-md">Book Another Ticket</button>
              <button className="bg-[#24A0B5] text-white px-12 py-2.5 rounded-md">Download Ticket</button>
            </div>
      </div>  
    </div>
  )
}

export default Ready