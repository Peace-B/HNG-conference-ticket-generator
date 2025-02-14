import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import ProgressBar from "../components/ProgressBar";

const AttendeeDetails = () => {
  const navigate = useNavigate();

  // Reset local storage when the component is mounted
  useEffect(() => {
    localStorage.removeItem("attendeeFormData");
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    about: "",
    avatar: "",
    ticketType: localStorage.getItem("selectedTicket") || "",
  });

  const [errors, setErrors] = useState({});

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "first_cloudinary_upload");
    data.append("cloud_name", "domflvgj5");

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/domflvgj5/image/upload", {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error("File upload failed");

      const uploadedImage = await res.json();
      setFormData({ ...formData, avatar: uploadedImage.secure_url });
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) newErrors.email = "Invalid email format";
    if (formData.about.length < 10) newErrors.about = "Must be at least 10 characters";
    if (!formData.avatar) newErrors.avatar = "Avatar upload is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    navigate("/ready", { state: { formData } });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className="bg-[radial-gradient(52.52%_32.71%_at_50%_97.66%,rgba(36,160,181,0.2)_0%,#02191D_100%)] h-auto pt-1">
      <NavBar />
      <div className="w-[350px] px-0 bg-[#041E23] xl:w-[700px] m-auto mt-10 border border-[#0E464F] rounded-3xl xl:px-12 pt-8 pb-8">
        <div className="bar mt-4">
          <div className="flex justify-between text-white w-[580px] m-auto items-center">
            <h1 className="text-3xl">Attendee Details</h1>
            <p>Step 2/3</p>
          </div>
          <ProgressBar progress={50} />
          <form className="w-[300px] xl:w-[600px] bg-[#08252B] xl:border border-[#0E464F] m-auto mt-4 rounded-3xl flex flex-col text-white pb-6" onSubmit={handleSubmit}>
            <div className="w-[280px] xl:w-[530px] h-[290px] m-auto mt-8 text-center bg-gradient-to-l from-[#08252B] to-[#07373F] xl:border border-[#0E464F] rounded-3xl">
              <p className="text-start pl-8 pt-3">Upload a File</p>
              <div className="relative w-[260px] xl:w-[470px] h-[180px] bg-[#041E23] m-auto mt-4 flex items-center justify-center">
                <input 
                  type="file" 
                  className="absolute bg-[#24A0B5] h-[220px] xl:py-2 px-0 rounded-3xl text-white cursor-pointer"
                  onChange={handleFileUpload} 
                />
              </div>
              {errors.avatar && <p className="text-red-500 text-sm">{errors.avatar}</p>}
            </div>
            <div className="w-[300px] flex flex-col xl:w-[530px] m-auto my-8">
              <label>Enter your name</label>
              <input type="text" name="name" className="py-3 border border-[#0E464F] xl:py-2.5 rounded-xl px-4" value={formData.name} onChange={handleChange} />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="w-[300px] flex flex-col xl:w-[530px] m-auto mb-8">
              <label>Enter your email *</label>
              <input type="text" name="email" className="py-3 border border-[#0E464F] xl:py-2.5 rounded-xl px-4" value={formData.email} onChange={handleChange} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="w-[300px] flex flex-col xl:w-[530px] m-auto">
              <label>About the project</label>
              <textarea name="about" placeholder="Write something about the project..." rows="5" className="border border-[#0E464F] rounded-xl px-4 py-2" value={formData.about} onChange={handleChange} />
              {errors.about && <p className="text-red-500 text-sm">{errors.about}</p>}
            </div>
            <div className="w-[300px] flex-col gap-4 xl:w-[530px] m-auto mt-8 flex xl:flex-row xl:gap-0 justify-between">
              <button type="button" className="py-4 text-[#0E464F] border border-[#0E464F] xl:px-28 xl:py-2 rounded-xl">Back</button>
              <button type="submit" className="py-4 bg-[#24A0B5] text-white px-2 xl:px-14 xl:py-2 rounded-xl disabled:opacity-50">Get My Free Ticket</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AttendeeDetails;
