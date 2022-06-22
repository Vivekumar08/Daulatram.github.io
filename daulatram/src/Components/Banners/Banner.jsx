import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
      >
        <div className="">
          <span className="  flex flex-row uppercase text-[#000080] text-6xl justify-center pt-14">
            College Profile Mission and Vision{" "}
          </span>
          <div className=" bg-gray-400 pt-3 pb-3 pl-5 text-lg text-[#000080] mt-28 ">
            <span className="ml-5">Home</span>
            <span className="ml-5">About Us</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
