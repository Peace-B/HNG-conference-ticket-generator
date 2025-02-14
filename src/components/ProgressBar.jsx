import React from "react";
const ProgressBar = ({ progress }) => {
    return (
      <div className="w-[280px] xl:w-[580px] m-auto bg-[#07373F] rounded-full h-1 mt-1">
        <div
          className="bg-[#24A0B5] h-1 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };
  
  export default ProgressBar;
  