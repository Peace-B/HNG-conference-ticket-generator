import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Ready = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData || {};

  return (
    <div className="h-[800px] bg-gradient-to-b from-[#041E23] to-[#07373F] pt-1">
      <NavBar />
      <div className="bg-[#041E23] w-[700px] h-[600px] m-auto mt-20 border border-[#0E464F] rounded-3xl px-12 pt-8">
        <h1 className="text-3xl text-white text-center">Your Ticket is Ready!</h1>
        <div className="text-center text-white mt-8">
          <p className="text-2xl pb-4">🎟 Your Ticket is Booked!</p>
          <p className="pb-6">You can download or check your email for a copy.</p>
        </div>
        <div className="py-8 w-[530px] m-auto">
          <img src={formData.avatar} alt="User Avatar" className="w-40 h-40 rounded-full mx-auto" />
        </div>
        <div className="text-center text-white">
          <p className="text-xl">{formData.name}</p>
          <p>{formData.email}</p>
        </div>
        <div className="bg-[#041E23] w-[570px] m-auto mt-8 border border-[#197686] rounded-4xl flex justify-evenly">
          <button onClick={() => navigate("/")} className="text-[#0E464F] border-2 border-[#0E464F] px-10 py-2.5 rounded-md">
            Book Another Ticket
          </button>
          <button className="bg-[#24A0B5] text-white px-12 py-2.5 rounded-md">Download Ticket</button>
        </div>
      </div>
    </div>
  );
};

export default Ready;
