import React from "react";
// import Internalbanner from "../../Components/Banners/Internalbanner";
import Student_side from "../../Components/Sidebar/Student_side";
import "../Academics/Att.css";
import { Link } from "react-router-dom";


const Complaints = () => {
  return (
    <>
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpeg)" }}
      >
        <div className="name">
        <div className="flex flex-row justify-center">
            <p className="  text-[#fff] text-3xl md:text-4xl lg:text-6xl shadow-lg  mt-12 font-bold  p-5 flex justify-center w-full rounded-md  ">
              Complaints / Suggestions{" "}
            </p>
          </div>
          <div className=" bg-gray-400 pt-3 pb-3 pl-5 text-lg text-[#000080] mt-28 ">
            <Link to={"/"}>
              <span className="ml-5">Home</span>
            </Link>
              <span className="ml-5">Student Zone</span>
          </div>
        </div>
      </div>

      <div className="flex ">
        <div className="w-[350px] flex flex-row">
          <Student_side />
        </div>
        <div className="w-[1100px]">
          <h2 className="text-2xl md:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Complaints / Suggestions
          </h2>
          <div className="main flex-col ml-5 p-3 mb-5">
            <div className="flex justify-center md:text-2xl text-lg font-bold mt-20 mb-5 ">
              vneverlivbevknek vek e eeoinkb
            </div>
            <p>joepjp4o5jt4nf3iogn43ojo</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Complaints;
