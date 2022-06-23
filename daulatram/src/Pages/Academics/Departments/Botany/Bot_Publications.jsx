import React from "react";
import Botanybanner from "../Botany/Botanybanner.jsx";
import Departments from "../../../../Components/Sidebar/Departments";
import pb1 from "../../../../Dummy_data/ImgPages/Botany/Botany Publications.pdf";
import Botany from "../../../../Components/DepartSIde/Botany";

function Bot_Publications() {
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
              Publications
            </h2>
          </div>
          <div className="flex flex-row justify-between ">
            <div class="wrapper2 mt-4 mb-5">
              <div class="card1">
                <div className="">
                  <span className=" text-2xl font-bold justify-center ml-7">
                    Publications
                  </span>
                </div>
                <div class="info ml-16 mt-2">
                  <h1 className="font-bold  ">Description</h1>
                  <p className="ml-1">
                    Research
                    <br />
                  </p>
                  <br />
                  <a href={pb1}>
                    <button className="ml-4">View</button>
                    <br />
                  </a>
                  <br />
                </div>
              </div>
              </div>
              <div className=" flex flex-col  mt-4">
                <Botany />
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default Bot_Publications;
