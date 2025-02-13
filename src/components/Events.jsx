import { React, useState, useEffect} from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'
import ProgressBar from '../components/ProgressBar'

const Events = () => {
  const [purchase, setPurchase] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ticketCount, setTicketCount] = useState('');
  const totalTickets = 20;

  useEffect(() => {
    localStorage.removeItem('selectedTicket');
    localStorage.removeItem('ticketCount');
  }, []);

  useEffect(() => {
    if (selectedTicket && ticketCount) {
      localStorage.setItem('selectedTicket', selectedTicket);
      localStorage.setItem('ticketCount', ticketCount);
    }
  }, [selectedTicket, ticketCount]);

  const handleNext = () => {
    localStorage.removeItem('selectedTicket');
    localStorage.removeItem('ticketCount');
  };

  const ticketOptions = [
    { type: 'REGULAR ACCESS', price: 'Free' },
    { type: 'VIP ACCESS', price: '$50' },
    { type: 'VVIP ACCESS', price: '$150' }
  ];
  

  return (
      <div className='bg-gradient-to-b from-[#041E23] to-[#07373F] py-2'>
        <NavBar/>
      <div className="w-[350px] h-[1220px] px-0 bg-gradient-to-b from-[#04262c] to-[#041E23] xl:w-[700px] xl:h-[800px] m-auto mt-6 border-1 border-[#0E464F] rounded-3xl xl:px-12 pt-8">
        <div className="bar">
          <div className="w-[300px] flex-col flex xl:flex-row xl:justify-between xl:items-center xl:w-[580px] m-auto text-white">
            <h1 className="text-3xl ">Ticket Selection</h1>
            <p>Step 1/3</p>
          </div>
          <ProgressBar progress={35}/>
          <div className="w-[300px] bg-[#041E23] border-0 xl:w-[600px] h-[675px] xlbg-[#08252B] xl:border-1 border-[#0E464F] m-auto mt-4 rounded-3xl flex flex-col text-white">
          {/* event-details */}
            <div className="w-[300px] h-[270px] pb-6 xl:w-[550px] xl:pb-0 xl:h-[160px] border-1 border-[#0E464F] m-auto rounded-3xl mt-5 text-center bg-gradient-to-l from-[#08252BF] to-[#07373F] mb-0">
              <h1 className="text-3xl pb-5 xl:text-4xl xl:font-bold pt-5 xl:pb-2">Techember Fest "25</h1>
              <p className="pb-8 w-[250px] xl:w-[300px] m-auto xl:pb-0">Join us for an unforgettable experience at <span>{purchase? "tech event " : "[Event Name]"}</span>! Secure your spot now.</p>
              <div className="w-[180px] m-auto xl:w-full">
                <p>{purchase? "10 olugonsi street, yaba" : "📍[Event Location]"} || March 15, 2025 | 7:00PM </p>
              </div>
            </div>
            <div className="line w-[300px] xl:w-[550px] border-1 border-[#0E464F] my-8 m-auto"></div>
            
            <div className="">
            <h2 className="mt-2 font-medium pl-12">Select Ticket Type:</h2>
          <div className="w-[300px] h-[450px] grid grid-cols-1 xl:grid-cols-3 gap-2 xl:w-[550px] bg-[#052228] xl:h-[150px] border border-[#0E464F] m-auto mt-2 rounded-3xl p-2">
            {ticketOptions.map((ticket, index) => (
              <div 
                key={index} 
                className={`border-3 rounded-xl text-md h-[120px] p-3 mt-1 cursor-pointer xl:border border-[#0E464F] 
                  ${selectedTicket === ticket.type ? 'bg-[#24A0B5] text-white border-[#197686]' : 'bg-[#052228] text-white'} 
                  hover:bg-[#197686] hover:text-white transition-all duration-300`}
                onClick={() => setSelectedTicket(ticket.type)}
              >
                <div className="flex flex-col">
                  <h1 className="text-2xl mb-2">{ticket.price}</h1>
                  <h1 className="">{ticket.type}</h1>
                </div>
                <small>{totalTickets - (selectedTicket === ticket.price ? parseInt(ticketCount) || 0 : 0)}/52</small>
              </div>
            ))}
          </div>
          </div>
          <div className="w-[300px] mt-8 xl:w-[550px] m-auto">
            <label htmlFor="ticketCount" className="pl-2">Number of Tickets</label>
              <input 
              type="number" 
              placeholder="1" 
              inputMode="numeric" 
              className="border border-[#197686] w-full py-3 rounded-xl mt-2 px-4"
              value={ticketCount}
              onChange={(e) => setTicketCount(e.target.value)}
            />
          </div>
          <div className="w-[300px] bg-[#041E23] xl:w-[550px] m-auto mt-8 xl:border border-[#197686] rounded-xl xl:flex justify-evenly">
            <button className="px-31 mb-4 xl:mb-0 text-[#0E464F] border border-[#0E464F] xl:px-25 py-2 rounded-xl"
            onClick={() => {
              setSelectedTicket(null);
              setTicketCount('');
              localStorage.removeItem('selectedTicket');
              localStorage.removeItem('ticketCount');
            }}
              >Cancel</button>
            <Link to="/attendeedetails" onClick={handleNext}>
              <button 
                className="px-33 bg-[#24A0B5] text-white xl:px-22 py-2 rounded-xl disabled:opacity-50" 
                disabled={!selectedTicket || !ticketCount}
              >Next</button>
            </Link>
          </div>
          </div>
         </div>
      </div>  
    </div>
  )
}

export default Events
