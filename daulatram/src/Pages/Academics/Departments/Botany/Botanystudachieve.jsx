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
        <div className="w-[350px]">
          <Departments />
        </div>
        <div>
          <div className="w-[1100px]">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Students Achievements
            </h2>
          </div>
          <div className="flex flex-row justify-between ">
            <div class="wrapper2  mt-5 mb-5">
              <div class="card1">
                <div className="">
                  <span className=" text-2xl font-bold">Achievements</span>
                </div>
                <div class="info">
                  <h1 className="font-bold">Description</h1>
                  <p>
                    1. Awards
                    <br />
                    2. Student's Progression
                    <br />
                  </p>
                  <br />
                  <a href={pdf}>
                    <button>View</button>
                    <br />
                  </a>
                  <br />
                </div>
              </div>
            </div>
            <div className=" flex  flex-col   mt-4">
              <Botany />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Botanystudachieve;
