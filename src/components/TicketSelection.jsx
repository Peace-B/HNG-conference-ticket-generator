import React from 'react'
import NavBar from '../components/NavBar'
// import { Link } from 'react-router-dom'

const TicketSelection = () => {
  
  return (
      <div className='bg-[radial-gradient(52.52%_32.71%_at_50%_97.66%,rgba(36,160,181,0.2)_0%,#02191D_100%)] pt-1'>
        <NavBar/>
      <div className=" bg-[#041E23] w-[700px] h-[800px] m-auto mt-6 border-1 border-[#0E464F] rounded-3xl px-12 pt-8">
        <div className="bar">
          <h1 className="text-3xl text-white ">Attendee Details</h1>
          <div className="bar-fill border-1 border-[#0E464F]"></div>

          <div className="w-[600px] h-[675px] bg-[#08252B] border-1 border-[#0E464F] m-auto mt-4 rounded-3xl flex flex-col text-white">
            <div className="w-[530px] h-[160px] border-1 border-[#0E464F] m-auto rounded-3xl mt-5 text-center bg-gradient-to-l from-[#08252BF] to-[#07373F] mb-0">
              <div className="flex justify-center">
              </div>           
            </div>
            <div className="w-[530px] mt-8 mb-0 m-auto border-1 border-[#0E464F]"></div>
{/* form  */}
    <div className="form flex flex-col gap-4">
       <div className="flex flex-col w-[530px] m-auto mt-6 ">
         <label htmlFor="">Enter your name</label> 
         <input type="text" className="border-1 border-[#0E464F] py-2 rounded-xl"/>         
       </div>    
       <div className="flex flex-col w-[530px] m-auto ">
            <label htmlFor="">Enter your email *</label> 
            <input type="text" className="border-1 border-[#0E464F] py-2 rounded-xl"/>            
        </div>
        <div className="flex flex-col w-[530px] m-auto">
               <label htmlFor="">About the project</label>
              <textarea placeholder='textarea' rows="5" className="border-1 border-[#0E464F] rounded-xl"/>
        </div>
     </div>

            <div className="w-[530px] m-auto mt-8 rounded-4xl flex justify-between">
              <button className="text-[#0E464F] border-1 border-[#0E464F] px-25 py-2 rounded-xl">Back</button>
              <button className="bg-[#24A0B5] text-white px-14 py-2 rounded-xl">Get My free Ticket</button>
            </div>
          </div>
         </div>
      </div>  
    </div>
  )
}

export default TicketSelection