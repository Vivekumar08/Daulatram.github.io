import React from "react";
import { Link } from "react-router-dom";
import Staff_side from "../../Components/Sidebar/Staff_side";
import Maintanence from "../../Components/UnderMaintanence/Maintanence";

const Seniority_list = () => {
  return (
    <>
      <div className=" flex flex-col">
        <div
          className="Banner"
          style={{ backgroundImage: "url(/images/img1.jpeg)" }}
        >
          <div className="name">
            <div className="flex flex-row justify-center">
              <p className="  text-[#fff] text-6xl  mt-12 font-bold  p-5 flex justify-center w-full rounded-md  ">
                Seniority Staff List{" "}
              </p>
            </div>

            <div className=" bg-gray-400 pt-3 pb-3 pl-5 text-lg text-[#000080] mt-28 ">
              <Link to={"/"}>
                <span className="ml-5">Home</span>
              </Link>
              <span className="ml-5">Staff Zone</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-[350px]">
            <Staff_side />
          </div>
          <div className="ml-3 mb-5">
            <div className="w-[1100px]">
              <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
                Senior Staff List
              </h2>
              <Maintanence />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Seniority_list;
