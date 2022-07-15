import React from "react";
import Staff_side from "../../Components/Sidebar/Staff_side";
import Maintanence from "../../Components/UnderMaintanence/Maintanence";

const Staff_Council_Committee = () => {
  return (
    <div className=" flex flex-col">
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpeg)" }}
      >
        <div className="name">
          <div className="flex flex-row justify-center">
            <p className="  text-[#fff] text-6xl shadow-lg  mt-12 font-bold  p-5 flex justify-center w-full rounded-md  ">
              Staff Council Committee
            </p>
          </div>
        </div>
        <div className=" pl-5 text-xl text-[#000080] bg-gray-400 pt-3 pb-3 mt-28">

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
              Staff Council Committee
            </h2>
            <Maintanence />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff_Council_Committee;
