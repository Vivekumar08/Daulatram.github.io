import React from "react";
import Programbanner from "../../../../Components/Banners/Programbanner";
import Departments from "../../../../Components/Sidebar/Departments";
import ge from "../../../../Dummy_data/pdfs/GE_syllabus.pdf";
import bsc from "../../../../Dummy_data/pdfs/bsc_biochemistry.pdf";
import Biochemistry from "../../../../Components/DepartSIde/Biochemistry";

function Programmesoffer() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Programbanner />
      </div>
      <div className="flex flex-row">
        <div className="w-[350px]">
          <Departments />
        </div>
        <div className="w-[1100px]">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Program Offered
          </h2>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row w-full justify-center gap-20 mt-16 ">
              <a href={ge}>
                <span className=" mr-2 bg-blue-900 rounded-lg p-2 pr-8 pl-8 flex flex-col justify-center items-center mb-2 mt-2 text-white hover:bg-blue-600">
                  <span>Biochemistry as GE Course</span>
                  <span>(Click here)</span>
                </span>
              </a>
              <a href={bsc}>
                <span className=" mr-2 bg-blue-900 rounded-lg p-2 pr-8 pl-8 flex flex-col justify-center items-center mb-2 mt-2 text-white hover:bg-blue-600">
                  <span>B.Sc.(Hons) Biochemistry</span>
                  <span>(Click here)</span>
                </span>
              </a>
            </div>
            <div className=" flex  flex-col ml-5 mt-10  ">
              <Biochemistry/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programmesoffer;
