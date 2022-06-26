import React from "react";
// import "./Banner.css";
import { Link } from "react-router-dom";

const Contact_side = () => {
  return (
    <>
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
      >
        <div className="">
          <span className="  flex flex-row uppercase text-[#000080] text-6xl justify-center pt-14">
            Contact{" "}
          </span>
          <div className=" bg-gray-400 pt-3 pb-3 pl-5 text-lg text-[#000080] mt-28 ">
            <Link to={"/"}>
              <span className="ml-5">Home</span>
            </Link>
            <span className="ml-5">Contact Us</span>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-4xl uppercase font-bold mb-5 mt-5 flex flex-row justify-center items-center ">
            Contact Information
          </h2>
        </div>
      </div>
    </>
  );
};

export default Contact_side;
