import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Vp_banner = () => {
  return (
    <>
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpeg)" }}
      >
        <div className="name">
          <div className="flex flex-row justify-center">
            <p className="  text-[#fff] text-3xl md:text-4xl lg:text-6xl shadow-lg  mt-12 font-bold  p-5 flex justify-center w-full rounded-md  ">
              Vice Principal's Message{" "}
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
    </>
  );
};

export default Vp_banner;
