import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Second_banner = () => {
  return (
    <>
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
      >
        <div className="name">
          <div className="flex flex-row justify-center">
            <p className="  text-[#fff] text-3xl md:text-4xl lg:text-6xl shadow-lg  mt-12 font-bold  p-5 flex justify-center w-full rounded-md  ">
              Second Year{" "}
            </p>
          </div>
          <div className=" bg-gray-400 pt-3 pb-3 pl-5 text-lg text-[#000080] mt-28 ">
            <Link to={"/"}>
              <span className="ml-5">Home</span>
            </Link>
            <span className="ml-5">Student's zone</span>
            <span className="ml-5">Internal Assesment</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Second_banner;
