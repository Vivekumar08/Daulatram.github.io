import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Founder_banner = () => {
  return (
    <>
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
      >
        <div className="name">
          <span className="  flex flex-row uppercase text-[#000080] text-6xl justify-center pt-14">
            Founder{" "}
          </span>
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
