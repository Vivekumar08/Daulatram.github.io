import React, { useState } from "react";
import Stu_Noticebanner from "../Components/Banners/Stu_Noticebanner";
import { StudentInfo } from "../Components/Info";
// import "./Notice.css";
import Notice_side from "../Components/Sidebar/Notice_side";
const Student_Notice = () => {
  const [Studentinfo, setStudentinfo] = useState(StudentInfo);
  return (
    <>
      <div className="">
        <Stu_Noticebanner />
      </div>

      <div className="flex flex-row">
        <div className="w-[280px] mt-7 ">
          <Notice_side />
        </div>
        
          <div className="w-[1100px]">
            <h2 className="text-3xl md:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Student Notice
            </h2>
            {Studentinfo.map((curElem) => {
              const { id, info, link, day, mon } = curElem;
              return (
                <div className="flex relative w-full items-center border rounded-xl bg-[#daa520] ">
                  <div class=" p-2 m-3 md:m-4 w-12 h-13 md:w-16 md:h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25 ">
                    <span class=" text-xs md:text-base tracking-wide  font-bold border-b border-white font-sans">
                      {day}
                    </span>
                    <span class="text-xs md:text-base tracking-wide font-bold uppercase block font-sans">
                      {mon}
                    </span>
                  </div>
                  <span className="text-base md:text-xl">{info}</span>
                </div>
              );
            })}
          </div>
        </div>
      
    </>
  );
};

export default Student_Notice;
