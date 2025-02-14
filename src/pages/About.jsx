import React from 'react'
import NavBar from '../components/NavBar'

const About = () => {
 

  return (
      <div className='bg-gradient-to-b h-[1500px] from-[#041E23] to-[#07373F] py-2'>
        <NavBar/>
      <div className="w-[350px] px-0 bg-gradient-to-b from-[#04262c] to-[#041E23] xl:w-[700px] xl:h-[800px] m-auto mt-6 border-1 border-[#0E464F] rounded-3xl xl:px-12 pt-8">
        <div className="main text-white border-1 border-[#0E464F]">
          <h1>Ticket Booking Ul - Open Source Practice Project 🎟</h1>
          <p className='py-4'>Overview</p>
          <p className='text-[15px] pb-4'>This is a beginner-friendly yet practical Event Ticket Booking Ul designed for developers to clone explore, and build upon. The design focuses on a seamless, login-free ticket reservation flow, allowing users to book event tickets quickly and efficiently.</p>
          <p className='text-[15px]'>The project consists of a three-step ticket booking flow, and developers can extend it further by Integrating payment solutions, user authentication (optional), and ticket validation systems.</p>
          <h1 className='py-4'>Flow & Features</h1>
          <h3>Ticket Selection</h3>
          <ul className='list-disc pl-5 pb-4'>
            <li>Users can browse avallable tickets (Free & Pald).</li>
            <li>Ticket options are displayed In a list or card view.</li>
            <li>For Free Tickets → Clicking "Get Free Ticket proceeds to attendee detalls.</li>
            <li> For Pald Tickets → Clicking "Purchase Ticket" would Ideally open a payment modal.</li>
          </ul>
          <h3>Attendee Details</h3>
          <ul className='list-disc pl-5 pb-4 pt-0'>
            <li>Users input their Name, Email, and optlonal Phone Number.</li>
            <li> Profile picture upload option with preview functionality.</li>
            <li> Ticket summary is visible to ensure users review their details before submission.</li>
          </ul>

          <h3>Payment or Success Page</h3>
          <ul className="list-disc pl-5 pb-4 pt-0">
            <li>If the ticket Is free, the user is taken directly to the Ticket Confirmaton Page.</li>
            <li>If the ticket Is paid, developers can integrate Stripe, Paystack, or Flutterwave to process payments before showing the confirmation page.</li>
            <li>Upon successful booking, users should receive:</li>
            <li>A visual ticket preview with a unique QR Code.</li>
            <li>An option to download the ticket as PDF or save it to their device.</li>
            <li>An emall confirmation containing ticket details.How to Build This </li>
          </ul>

          <h1>his Ul can be implemented using:</h1>
          <ul>📌Frontend (Next.js or React)
          <li>Component Breakdown:</li>
          <li>TicketCard. tx → Displays ticket detalls</li>
          <li> AttendeeForm.tsx → Captures user details</li>
          <li>PaymentModal.tsx - Handles payment processing</li>
          <li> SuccessScreen.tsx → Shows the final ticket prevlew</li>
          <li>State Management: React's Context API, Zustand, or Redux (if needed).</li>
          </ul>
        </div>
      </div>  
    </div>
  )
}

export default About
