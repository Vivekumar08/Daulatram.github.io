import React from 'react'
import "./Banner.css";

const Vp_banner = () => {
  return (
<>
<div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
      >
        <span className="flex flex-row text-[#000080] text-6xl justify-center pt-14">
               Vice-Principal's Message        </span>
        <div className="ml-2 text-lg text-white mt-28">
          <span className="ml-5">Home</span>
          <span className="ml-5"> About Us </span>

        </div>
      </div>


</>  )
}

export default Vp_banner