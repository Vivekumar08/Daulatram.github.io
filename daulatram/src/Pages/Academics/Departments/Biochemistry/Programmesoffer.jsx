import React from "react";
import Programbanner from "../../../../Components/Banners/Programbanner";
import Departments from "../../../../Components/Sidebar/Departments";
import ge from '../../../../Dummy_data/pdfs/GE_syllabus.pdf';
import bsc from '../../../../Dummy_data/pdfs/bsc_biochemistry.pdf';

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
          <div className="flex flex-row justify-evenly mt-16">
         
            <span className=" mr-2 bg-blue-900 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-800">
              <a href={ge}>
                Biochemistry as GE Course
              </a>
            </span>
            <span className=" mr-2 bg-blue-900 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-800">
              <a href={bsc}>
                B.Sc.(Hons) Biochemistry
              </a>
            </span>
          </div>
          <div className="p-3 grid grid-cols-4 mr-2 ml-2 mt-11">
                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500"><a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                  Faculty
                </a>
                </span>
                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="./biochem/programmesoffer">
                  Programmes Offered
                </a>
                </span>
                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                  <a href="./biochem/association">
                  Association
                </a></span>
                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                  Student's Achievements
                </a>
                </span>
                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                  Events
                </a>
                </span>

            <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="./biochem/laboratorystaff">
                  Laboratory Staff
                </a>
                </span>

                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                  Publications / Awards
                </a>
                </span>

                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                  Research
                </a>
                </span>
                
              </div>
        </div>
      </div>
    </div>
  );
}

export default Programmesoffer;
