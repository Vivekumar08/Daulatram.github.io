import React from "react";
import Staff_side from "../../Components/Sidebar/Staff_side";
import Maintanence from "../../Components/UnderMaintanence/Maintanence";

const Notices = () => {
  return (
    <div className=" flex flex-col">
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
      >
        <span className="flex flex-row uppercase text-[#000080] text-6xl justify-center pt-14">
          Staff Notices{" "}
        </span>
        <div className="ml-2 text-lg text-white mt-28">
          <span className="ml-5">Home</span>
          <span className="ml-5">Staff Zone</span>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-[350px]">
          <Staff_side />
        </div>
        <div className="ml-3 mb-5">
          <div className="w-[1100px]">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Staff Notices
            </h2>
            <Maintanence />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notices;
