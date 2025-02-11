import { React, useState} from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

const Events = () => {
  const [purchase, setPurchase] = useState(false)

  return (
      <div className='bg-gradient-to-b from-[#041E23] to-[#07373F] pt-1'>
        <NavBar/>
      <div className=" bg-[#041E23] w-[700px] h-[800px] m-auto mt-6 border-1 border-[#0E464F] rounded-3xl px-12 pt-8">
        <div className="bar">
          <h1 className="text-3xl text-white ">Ticket Selection</h1>
          <div className="bar-fill border-1 border-[#0E464F]"></div>

          <div className="w-[600px] h-[675px] bg-[#08252B] border-1 border-[#0E464F] m-auto mt-4 rounded-3xl flex flex-col text-white">
          {/* event-details */}
            <div className="w-[530px] h-[160px] border-1 border-[#0E464F] m-auto rounded-3xl mt-5 text-center bg-gradient-to-l from-[#08252BF] to-[#07373F] mb-0">
              <h1 className="text-4xl font-bold pt-5 pb-2">Techember Fest "25</h1>
              <p className="w-[300px] m-auto">Join us for an unforgettable experience at <span>{purchase? "tech event " : "[Event Name]"}</span>! Secure your spot now.</p>
              <div className="flex justify-center">
                <span><i className="ri-map-pin-line"></i></span>
                <p>{purchase? "10 olugonsi street, yaba" : "[Event Location]"} || March 15, 2025 | 7:00PM </p>
              </div>
            </div>
            <div className="line w-[530px] border-1 border-[#0E464F] my-8 m-auto"></div>
            
            <div className="">
              <h1 className="px-10 font-medium">Select Ticket Type:</h1>
            <div className="w-[530px] bg-[#052228] h-[170px] border-1 border-[#0E464F] m-auto mt-0 rounded-3xl grid grid-cols-2 p-4 gap-2">
                <div className="bg-[#197686] rounded-xl text-md h-[70px] p-2">
                  <div className="flex justify-between">
                    <h1>REGULAR ACCESS</h1>
                    <h1 className="bg-[#0E464F] pl-8 pr-1 py-1 rounded-md border-1 border-[#197686]">FREE</h1>
                  </div>
                  <p className="">20 Left!</p>
              </div>
                
                <div className="bg-[#052228] rounded-xl text-md h-[70px] p-2 border-1 border-[#0E464F]">
                  <div className="flex justify-between">
                    <h1>VIP ACCESS</h1>
                    <h1 className="bg-[#0E464F] pl-8 pr-1 py-1 rounded-md border-1 border-[#197686]">$50</h1>
                  </div>
                  <p className="">20 Left!</p>
              </div>
                
                <div className="bg-[#052228] rounded-xl text-md h-[70px] p-2 border-1 border-[#0E464F]">
                  <div className="flex justify-between">
                    <h1>VVIP ACCESS</h1>
                    <h1 className="bg-[#0E464F] pl-8 pr-1 py-1 rounded-md border-1 border-[#197686]">$150</h1>
                  </div>
                  <p className="">20 Left!</p>
              </div>
              </div>
            </div>
            
            <div className="w-[530px] m-auto rounded-xl mt-8 mb-0">
              <h1>Number of Tickets</h1>
              <input type="number" placeholder="1" inputMode="numeric" className="border-1 border-[#197686] w-[520px] py-3 rounded-xl"/>
            </div>
            
            <div className="bg-[#041E23] w-[530px] m-auto mt-8 border-1 border-[#197686] rounded-4xl flex justify-evenly">
              <button className="text-[#0E464F] border-1 border-[#0E464F] px-20 py-3 rounded-xl">Cancel</button>
                <Link to="/TicketSelection">
                <button className="bg-[#24A0B5] text-white px-20 py-3 rounded-xl">Next</button>
                </Link>
            </div>
          </div>
         </div>
      </div>  
    </div>
  )
}

export default Events