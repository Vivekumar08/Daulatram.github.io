import React from "react";
import { Link } from "react-router-dom";
function Philosophybanner() {
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
            <p className="  text-[#fff] text-6xl shadow-lg  mt-12 font-bold  p-5 flex justify-center w-full rounded-md  ">
              Philosophy
            </p>
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

export default Philosophybanner;
