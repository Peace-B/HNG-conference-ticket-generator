import React, { useRef, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Tick from "../assets/Bar Code.png";
import html2canvas from "html2canvas";

const Ready = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};
  const ticketRef = useRef(null);

  const [ticketType, setTicketType] = useState("");
  const [ticketCount, setTicketCount] = useState("");

  useEffect(() => {
    const storedTicket = localStorage.getItem("selectedTicket");
    const storedCount = localStorage.getItem("ticketCount");
  
    console.log("Retrieved ticket type:", storedTicket);
    console.log("Retrieved ticket count:", storedCount);
  
    setTicketType(storedTicket || "Not Selected");
    setTicketCount(storedCount || "1");
  }, []);
  

  const downloadTicket = async () => {
    if (!ticketRef.current) return;
    const canvas = await html2canvas(ticketRef.current, { backgroundColor: null });
    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = "ticket.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full h-[1400px] bg-[#052F35] flex justify-center items-center py-10">
      <div className="lg:w-[45%] w-[90%] lg:h-[1000px] border border-[#197686] rounded-3xl p-8 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <span className="flex justify-between">
            <p className="text-white">Ready</p>
            <p className="text-white">Step 3/3</p>
          </span>
          <span>
            <p className="bg-[#197686] w-full h-[3px]"></p>
          </span>
        </div>

        <div className="w-full flex flex-col justify-between items-center">
          <span className="h-[81px] flex flex-col justify-between items-center">
            <p className="text-center lg:text-[32px] text-[20px] text-white">Your Ticket Is Booked!</p>
            <p className="text-white lg:text-[16px] text-[14px] text-center">
              Check your email for a copy or you can <b>download</b>
            </p>
          </span>

          {/* Ticket Section */}
          <div ref={ticketRef} className="relative w-[300px] h-[600px] bg-cover bg-no-repeat bg-center p-5 mt-12"
            style={{ backgroundImage: "url('/TICKET (3).png')" }}>

            <div className="w-[260px] h-[446px] border-2 border-[#0E464F] rounded-2xl flex flex-col items-center justify-center gap-[16px]">
              
              <div className="w-[175px] h-[76px] text-center">
                <h1 className="header text-white text-[24px]">Techember Fest '25</h1>
                <p className="text-white text-[10px]">📍 4, Rumens road, Ikoyi, Lagos</p>
                <p className="text-white text-[10px]">📅 March 15, 2025 | 7:00 PM</p>
              </div>

              {/* Avatar Display */}
              <div className="w-[140px] h-[140px] border-3 border-[#24A0B5] rounded-2xl overflow-hidden flex items-center justify-center bg-white">
                {formData.avatar ? (
                  <img src={formData.avatar} alt="User Avatar" className="w-full h-full object-cover rounded-2xl" />
                ) : (
                  <p className="text-gray-400 text-sm">No Image</p>
                )}
              </div>

              <div className="w-[232px] h-[160px] bg-[#08343C] border border-[#133D44] rounded-xl">
                <div className="grid grid-cols-2">
                  <div className="text-[10px] text-gray-400 border-r-2 border-b-2 border-[#133D44]">
                    <label>Name:</label>
                    <p className="text-white">{formData.name || "Not Provided"}</p>
                  </div>

                  <div className="text-[10px] text-gray-400 border-r-2 border-b-2 border-[#133D44] p-1">
                    <p>Email:</p>
                    <p className="text-white">{formData.email || "Not Provided"}</p>
                  </div>

                  <div className="text-[10px] text-gray-400 border-r-2 border-b-2 border-[#133D44] p-1">
                    <p>Ticket Type:</p>
                    <p className="text-white">{ticketType}</p>
                  </div>

                  <div className="text-[10px] text-gray-400 border-r-2 border-b-2 border-[#133D44] p-1">
                    <p>Ticket Count:</p>
                    <p className="text-white">{ticketCount}</p>
                  </div>

                  <div className="text-[10px] text-gray-400 pt-2">
                    <p>About:</p>
                    <p className="text-white text-xs">{formData.about || "Not Provided"}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[150px] w-[260px] flex justify-center items-center">
              <img src={Tick} alt="Bar Code" />
            </div>
          </div>

          {/* Buttons */}
          <div className="lg:w-[556px] lg:h-[48px] flex flex-col-reverse md:flex-row justify-center gap-4 pt-20">
            <Link to="/">
              <button className="border border-[#2BA4B9] lg:w-[214px] w-[287px] h-[48px] rounded-lg text-[#2BA4B9] cursor-pointer">
                Book Another Ticket
              </button>
            </Link>
            <button className="lg:w-[214px] w-[287px] h-[48px] bg-[#2BA4B9] rounded-lg text-white cursor-pointer"
              onClick={downloadTicket}>
              Download Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;
