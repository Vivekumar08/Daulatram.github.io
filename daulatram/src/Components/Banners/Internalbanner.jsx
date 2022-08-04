import React from 'react'
import "./Banner.css";
import { Link } from "react-router-dom";

const Internalbanner = () => {
  return (
<>
<div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpeg)" }}
      >
        <div className="name">
        <div className="flex flex-row justify-center">
            <p className="  text-[#fff] text-3xl md:text-4xl lg:text-6xl  mt-12 font-bold  p-5 flex justify-center w-full rounded-md  ">
          Internal Assessment{" "}
            </p>
          </div>
          <div className=" bg-gray-400 pt-3 pb-3 pl-5 text-lg text-[#000080] mt-28 ">
            <Link to={"/"}>
              <span className="ml-5">Home</span>
            </Link>
            <span className="ml-5">Student's zone</span>
          </div>
        </div>
      </div>

</>  )
}

export default Internalbanner