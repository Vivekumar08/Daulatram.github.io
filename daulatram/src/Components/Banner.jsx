import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
      >
        <span className="flex flex-row text-[#fff] text-6xl justify-center pt-14">
          College Profile Mission and Vision
        </span>
        <div className="ml-2 text-lg text-white mt-28">
          <span className="ml-5">Home</span>
          <span className="ml-5">About Us</span>
        </div>
      </div>
    </>
  );
};

export default Banner;
