import React from "react";
import Admission_side from "../../Components/Sidebar/Admission_side.";
import Maintanence from "../../Components/UnderMaintanence/Maintanence";

const Fee_Structure = () => {
  return (
    <div className=" flex flex-col">
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
      >
        <span className="flex flex-row uppercase text-[#000080] text-6xl justify-center pt-14">
          Fee Structure{" "}
        </span>
        <div className="ml-2 text-lg text-white mt-28">
          <span className="ml-5">Home</span>
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
              Fee Structure
            </h2>
            <Maintanence />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fee_Structure;
