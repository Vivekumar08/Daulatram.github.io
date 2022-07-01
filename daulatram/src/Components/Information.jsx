import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StudentInfo } from "./Info"; //first step
import { StaffInfo } from "./Info";
import { PublicInfo } from "./Info";

function Information() {
  const [Studentinfo, setStudentinfo] = useState(StudentInfo);
  const [Staffinfo, setStaffinfo] = useState(StaffInfo);
  const [Publicinfo, setPublicinfo] = useState(PublicInfo);

  return (
    <>
      <div className="bg-white pb-4 ">
        <div className="quick_links flex flex-row items-center justify-center text-center text-white font-bold  ">
          <span className="quick_content uppercase w-full">
            <strong>Information Section</strong>
          </span>
        </div>
        {/* content/body/messages */}
        <div className="flex md:flex-row flex-col w-auto   mb-5 mt-8 justify-between ml-24 mr-24 ">
          <div className=" bg-[#d3d3d3] w-[20em] rounded-lg h-[600px] text-lg font-semibold mb-5 hover:animate-none ">
            <span className="bg-[#000080] rounded-t-lg flex flex-row justify-center  text-white pb-4  px-4 ">
              <span className="mt-3">Notice for Students</span>
            </span>
            {Studentinfo.map((curElem) => {
              const { id, info, link, date } = curElem;
              return (
                <>
                  <Link to={link} target="_blank" rel="norefferer" className="">
                    <span className=" information flex flex-col hover:font-semibold hover:text-blue-600 hover:text-base ml-4 text-sm mb-4 mt-4  ">
                      {info}
                    </span>
                  </Link>
                </>
              );
            })}
          </div>
          <div className=" bg-[#d9d9d9] w-[20em] rounded-lg text-lg mb-5 h-[600px] font-semibold">
            <span className="bg-[#000080] rounded-t-lg flex flex-row  justify-center text-white pb-4  px-4 ">
              <span className="mt-3">Notice for Staff</span>
            </span>
            {Staffinfo.map((curElem) => {
              const { id, info, link } = curElem;
              return (
                <>
                  <Link to={link} target="_blank" rel="norefferer">
                    <span className=" information flex flex-col ml-4 hover:font-semibold hover:text-blue-600 hover:text-base text-sm mb-4 mt-4">
                      {info}
                    </span>
                  </Link>
                </>
              );
            })}
          </div>
          <div className=" bg-[#d9d9d9] w-[20em] rounded-lg mb-5 text-lg h-[600px] font-semibold">
            <span className="bg-[#000080] rounded-t-lg flex flex-row justify-center text-white pb-4  px-4 ">
              <span className="mt-3">Notice for Public</span>
            </span>
            {Publicinfo.map((curElem) => {
              const { id, info, link } = curElem;
              return (
                <>
                  <Link to={link} target="_blank" rel="noreferrer">
                    <span className=" information flex flex-col ml-4 text-sm mb-4 hover:font-semibold hover:text-blue-600 hover:text-base mt-4">
                      {info}
                    </span>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
