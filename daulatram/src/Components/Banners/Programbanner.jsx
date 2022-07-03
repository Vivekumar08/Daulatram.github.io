import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

function Programbanner() {
  return (
    <>
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
      >
        <div className="name">
          <span className="  flex flex-row uppercase text-[#000080] text-6xl justify-center pt-14">
            Biochemistry{" "}
          </span>
          <div className=" bg-gray-400 pt-3 pb-3 pl-5 text-lg text-[#000080] mt-28 ">
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

export default Programbanner;
