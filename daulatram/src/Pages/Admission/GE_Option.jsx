import React from "react";
import Admission_side from "../../Components/Sidebar/Admission_side.";
import Maintanence from "../../Components/UnderMaintanence/Maintanence";
import { Link } from "react-router-dom";

const GE_Option = () => {
  return (
    <div className=" flex flex-col">
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
      >
        <span className="flex flex-row uppercase text-[#000080] text-6xl justify-center pt-14">
          GE Options{" "}
        </span>
        <div className=" bg-gray-400 pt-3 pb-3 pl-5 text-lg text-[#000080] mt-28 ">
          <Link to={"/"}>
            <span className="ml-5">Home</span>
          </Link>
          <span className="ml-5">Admisssion</span>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-[350px]">
          <Admission_side />
        </div>
        <div className="ml-3 mb-5">
          <div className="w-[1100px]">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              GE Options 2022-23
            </h2>
            <Maintanence />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GE_Option;
