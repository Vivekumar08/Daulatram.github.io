import React from "react";
import Botanybanner from "../Botany/Botanybanner.jsx";
import Departments from "../../../../Components/Sidebar/Departments";
import pdf from "../../../../Dummy_data/ImgPages/Botany/Botany_Students'_Achievements.pdf";
import Botany from "../../../../Components/DepartSIde/Botany";

function Botanystudachieve() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Botanybanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col mt-12 ml-2">
          <Botany />
        </div>
        <div className="mr-auto ml-auto">
          <div className="w-full mr-16">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-16 flex flex-row justify-center items-center ">
              Students Achievements
            </h2>

            <div className="flex flex-row justify-between ">
              <div class="wrapper2  mt-5 mb-5">
                <div class="card2">
                  <div className="">
                    <span className=" text-2xl mr-5 ml-10 font-bold">
                      Achievements
                    </span>
                  </div>
                  <div class="info">
                    <h1 className="font-bold flex justify-center">
                      Description
                    </h1>
                    <p className="flex text-justify">
                      1. Awards
                      <br />
                      2. Student's Progression
                      <br />
                    </p>
                    <br />
                    <a href={pdf}>
                      <button className="w-full ">View</button>
                      <br />
                    </a>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Botanystudachieve;
