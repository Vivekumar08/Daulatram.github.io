import React from 'react'
import Sidebar from "../../Components/Sidebar/DeptSidebar";
import { Link } from "react-router-dom";
import Banner from "../../Components/Banners/ugcourses";

const Postgraduate = () => {
    return (
        <>
          <div className=" flex flex-col">
            <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpeg)" }}
      >
        <div className="name">
          <div className="">
            <div className="flex flex-row justify-center">
              <p className="  text-[#fff] text-3xl md:text-4xl lg:text-6xl shadow-lg  mt-12 font-bold  p-5 flex justify-center w-full rounded-md  ">
                Postgraduate{" "}
              </p>
            </div>

            <div className=" text-lg font-bold bg-gray-400 pb-3 pt-3 pl-5 text-[#000080] mt-28 ">
              <Link to={"/"}>
                <span className="ml-5">Home</span>
              </Link>
              <span className="ml-5">About Us</span>
            </div>
          </div>
        </div>
      </div>
            <div className="flex flex-row">
              <div className="">
                <Sidebar />
              </div>
              <div className="relative mr-20 md:w-[1100px]">
                <h2 className=" md:text-4xl text-xl font-bold mb-5 mt-[5%] md:ml-16 text-justify justify-center  ">
                  POSTGRADUATE COURSES
                </h2>
                
                <figure className=" relative mb-10 md:ml-12 lg:ml-20 mt-10  ">
                  <ul className="  relative list-disc card-description flex flex-col gap-4 text-justify font-medium ">
                    <li>
                    M.A. English
                    </li>
                    <li>
                    M.A. Hindi
                    </li>
                    <li>
                    M.A. History
                    </li>
                    <li>
                    M.A. Music (Vocal)
                    </li>
                    <li>
                    M.A. Political Science
                    </li>
                    <li>
                    M.A. Psychology
                    </li>
                    <li>
                    M.A. Sanskrit
                    </li>
    
                   
                  </ul>
                  
                </figure>
              </div>
            </div>
          </div>
        </>
      );
}

export default Postgraduate