import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Founder_banner = () => {
  return (
    <>
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img5.jpeg)" }}
      >
        <div className="name">
        <div className="flex flex-row justify-center">
            <p className="  text-[#fff] text-6xl shadow-lg  mt-12 font-bold  p-5 flex justify-center w-full rounded-md  ">
              Founder{" "}
            </p>
          </div>
          <div className="caption  text-lg font-bold bg-gray-400 pb-3 pt-3 pl-5 text-[#000080] mt-28 ">
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

export default Founder_banner;
