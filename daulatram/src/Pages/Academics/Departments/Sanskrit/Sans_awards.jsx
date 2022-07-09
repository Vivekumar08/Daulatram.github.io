import React from "react";
import Sanskrit from "../../../../Components/DepartSIde/Sanskrit";
import Sansbanner from "./Sansbanner";
import award1 from "../../../../Dummy_data/ImgPages/Sanskrit/awards_sans.pdf";
import award2 from "../../../../Dummy_data/ImgPages/Sanskrit/teach_achieve.pdf";

function Sans_events() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Sansbanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col mt-12 ml-2">
          <Sanskrit />
        </div>

        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5  mt-[5%] flex flex-row justify-center items-center ">
            Awards
          </h2>
          <div className="flex flex-col">
            <div class="wrapper2 mt-5 mb-5">
              <div class="card2">
                <div className="">
                  <span className=" text-2xl font-bold ml-16">
                Awards
                  </span>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p className="flex justify-center">Sanskrit Department </p>
                  <br />
                  <br />
                  <a href={award1}>
                    <button className="w-full">View</button>
                  </a>
                </div>
              </div>
              <div class="card2">
                <span className=" text-2xl font-bold mr-4">Teachers' Achievements</span>
                <div class="info">
                  <h1 className="font-bold flex justify-center ">
                    Description
                  </h1>
                  <p className="flex justify-center">Sanskrit Department</p>
                  <br />
                  <br />
                  <a href={award2}>
                    <button className="w-full">View</button>
                  </a>
                </div>
              </div>
            </div>
           
            </div>
          </div>
        </div>
      </div>

  );
}

export default Sans_events;
