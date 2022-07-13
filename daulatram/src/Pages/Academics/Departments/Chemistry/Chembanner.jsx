import React from "react";
import { Link } from "react-router-dom";
function DepartBanner() {
  return (
    <>
      <div
        className="Banner"
        style={{
          backgroundImage: "url(/images/img1.jpeg)",
          width: "100%",
          height: "280px",
        }}
      >
        <div className="name">
          <div className="flex flex-row justify-center">

          <span className="  text-[#fff] text-6xl  mt-12 bg-[#000080] p-5 pl-16 rounded-md  w-[25%]">
            Chemistry
          </span>
          </div>
          <div className=" pl-5 text-xl text-[#000080] bg-gray-400 pt-3 pb-3 mt-28">
          <Link to={"/"}>
              <span className="ml-5">Home</span>
            </Link>
            <span className="ml-5">Academics</span>
            <Link to={"/academics/departments"}>
              <span className="ml-5">Departments</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default DepartBanner;
