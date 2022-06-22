import React from "react";
import Programbanner from "../../../../Components/Banners/Programbanner";
import Departments from "../../../../Components/Sidebar/Departments";
import ge from "../../../../Dummy_data/pdfs/GE_syllabus.pdf";
import bsc from "../../../../Dummy_data/pdfs/bsc_biochemistry.pdf";

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
              <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-900">
                <a href="./biochem/faculty">Faculty</a>
              </span>
              <span className="  bg-[#000080] rounded-lg p-2 flex w-[220px] flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
                  <a href="/biochem/programmesoffer">Programmes Offered</a>
                </span>
              <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-900">
                <a href="./biochem/association">Association</a>
              </span>
              <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-900">
                <a href="./biochem/studentsachieve">Student's Achievements</a>
              </span>
              <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-900">
                <a href="./biochem/events">Events</a>
              </span>

              <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-900">
                <a href="./biochem/laboratorystaff">Laboratory Staff</a>
              </span>

              <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px]flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-900">
                <a href="./biochem/publications">Publications</a>
              </span>

              <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-900">
                <a href="./biochem/awards">Awards</a>
              </span>

              <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-900">
                <a href="./biochem/research">Research</a>
              </span>
              <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-900">
                <a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                  Time Table
                </a>
              </span>
              <span className=" mr-2 bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-900">
                <a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                  Photo Gallery
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programmesoffer;
