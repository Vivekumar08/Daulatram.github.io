import React from "react";
import { Link } from "react-router-dom";

function DepartBanner() {
  return (
    <>
      <div
        className="Banner md:h-[280px]"
        style={{
          backgroundImage: "url(/images/img1.jpeg)",
         
        }}
      >
        <div className="name">
        <div className="flex flex-row justify-center">
            <p className="  text-[#ffffff] md:text-6xl text-4xl shadow-lg  mt-12 font-bold  p-5 flex justify-center w-full rounded-md  ">
              Botany
            </p>
          </div>
          <div className="  bg-gray-400 pt-3 pb-3 pl-5 md:text-lg text-s text-[#000080] mt-20 ">
          <Link to={"/"}>
              <span className="ml-5">Home</span>
            </Link>
            <span className="ml-5">Academics</span>
          {/* <span className="ml-5">  <a href="/academics/departments">Departments</a></span> */}
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
