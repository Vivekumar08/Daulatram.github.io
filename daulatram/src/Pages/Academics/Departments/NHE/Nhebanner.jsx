import React from "react";
import { Link } from "react-router-dom";
function Nhebanner() {
  return (
    <>
      <div
        className="Banner"
        style={{
          backgroundImage: "url(/images/img1.jpg)",
          width: "100%",
          height: "280px",
        }}
      >
        <div className="name">
          <span className="flex flex-row text-[#000080] text-6xl  justify-center pt-14">
            NHE
          </span>
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

export default Nhebanner;
