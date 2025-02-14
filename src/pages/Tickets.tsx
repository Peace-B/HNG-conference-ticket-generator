import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { Link } from "react-router-dom";

const Tickets = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ticketCount, setTicketCount] = useState(null);

  useEffect(() => {
    const storedTicket = localStorage.getItem('selectedTicket');
    const storedCount = localStorage.getItem('ticketCount');

    if (storedTicket && storedCount) {
      setSelectedTicket(storedTicket);
      setTicketCount(storedCount);
    }
  }, []);

  return (
    <div className='h-screen bg-gradient-to-b from-[#041E23] to-[#07373F] py-2'>
      <NavBar />
      <div className="w-[350px] px-0 xl:w-[700px] m-auto mt-6 rounded-3xl xl:px-12 pt-8">
        {selectedTicket && ticketCount ? (
          <div className="flex flex-col justify-center items-center mt-[100px] text-white">
            <h1 className="text-2xl mb-4">Your Ticket</h1>
            <div className="border border-[#2d7783] p-4 rounded-lg w-[300px] text-center">
              <p className="text-lg font-bold">{selectedTicket}</p>
              <p>Tickets: {ticketCount}</p>
              <Link to="/ready">
                <button className="bg-[#2d7783] text-white p-2 mt-4 rounded-md cursor-pointer">
                  View Ticket
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center mt-[200px]">
            <h1 className='text-2xl text-white mb-6'>You Do Not Have Any Ticket!</h1>
            <Link to="/">
              <button className='bg-[#2d7783] text-white p-2 rounded-md cursor-pointer'>
                Get a Ticket
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tickets;