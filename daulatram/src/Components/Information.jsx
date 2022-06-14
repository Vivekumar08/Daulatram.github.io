import React, { useState } from "react";
// import {Link} from 'react-router-dom'
import { StudentInfo } from "./Info"; //first step
import { StaffInfo } from "./Info";
import { PublicInfo } from "./Info";

function Information() {
  const [Studentinfo, setStudentinfo] = useState(StudentInfo);
  const [Staffinfo, setStaffinfo] = useState(StaffInfo);
  const [Publicinfo, setPublicinfo] = useState(PublicInfo);

  return (
    <>
      <div className="bg-blue-100 pb-4">
        <div className="quick_links top-[170px] flex flex-row items-center justify-center text-center text-white font-bold  ">
          <span className="quick_content uppercase">
            <strong>Information Section</strong>
          </span>
        </div>
        {/* content/body/messages */}
        <div className="flex flex-row w-auto h-[500px] mb-5 mt-8 justify-between ml-24 mr-24 ">
          <div className=" bg-[#d9d9d9] w-[20em] rounded-lg text-lg font-semibold">
            <span className="bg-[#273E47] rounded-t-lg flex flex-row justify-center  text-white pb-4  px-4 ">
              <span className="mt-3">Notice for Student</span>
            </span>
            {Studentinfo.map((curElem) => {
              const { id, info, link } = curElem;
              return (
                <>
                  <a href={link} target="_blank" rel="norefferer">
                    <span className=" information flex flex-col ml-4 text-sm mb-4 mt-4">
                      {info}
                    </span>
                  </a>
                </>
              );
            })}
          </div>
          <div className=" bg-[#d9d9d9] w-[20em] rounded-lg text-lg font-semibold">
            <span className="bg-[#273E47] rounded-t-lg flex flex-row justify-center text-white pb-4  px-4 ">
              <span className="mt-3">Notice for Staff</span>
            </span>
            {Staffinfo.map((curElem) => {
              const { id, info, link } = curElem;
              return (
                <>
                  <a href={link} target="_blank" rel="norefferer">
                    <span className=" information flex flex-col ml-4 text-sm mb-4 mt-4">
                      {info}
                    </span>
                  </a>
                </>
              );
            })}
          </div>
          <div className=" bg-[#d9d9d9] w-[20em] rounded-lg text-lg font-semibold">
            <span className="bg-[#273E47] rounded-t-lg flex flex-row justify-center text-white pb-4  px-4 ">
              <span className="mt-3">Notice for Public</span>
            </span>
            {Publicinfo.map((curElem) => {
              const { id, info, link } = curElem;
              return (
                <>
                  <a href={link} target="_blank" rel="noreferrer">
                    <span className=" information flex flex-col ml-4 text-sm mb-4 mt-4">
                      {info}
                    </span>
                  </a>
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