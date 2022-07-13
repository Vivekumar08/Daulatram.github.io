import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Formsstaff = () => {
  return (
    <>
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpeg)" }}
      >
        <div className="name">
          <span className="  flex flex-row uppercase text-[#000080] text-6xl justify-center pt-14">
          Forms{" "}
          </span>
          <div className=" bg-gray-400 pt-3 pb-3 pl-5 text-lg text-[#000080] mt-28 ">
            <Link to={"/"}>
              <span className="ml-5">Home</span>
            </Link>
            <span className="ml-5">Staff Zone</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formsstaff;
