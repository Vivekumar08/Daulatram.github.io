import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
       <div className="Banner" style={{ backgroundImage:"url(/images/img1.jpg)" }}>    
      
        
      </div>
      <div className='name'>
      <span className="  flex flex-row uppercase text-[#000080] text-6xl justify-center pt-14">
               Facilities   </span>
        <div className="caption ml-2 text-lg text-[#000080] mt-28 ">
          <span className="ml-5">Home</span>
          <span className="ml-5">Academics</span>

        </div>
      </div>
    </>
  );
};

export default Banner;

