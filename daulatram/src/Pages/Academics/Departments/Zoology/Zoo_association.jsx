import React from "react";

import association from "../../../../Dummy_data/ImgPages/Zoology/Association.pdf";

import Zoobanner from "./Zoobanner";
import Zoology from "../../../../Components/DepartSIde/Zoology";

function Zoo_association() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Zoobanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col mt-12 ml-2">
          <Zoology />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Association
          </h2>

          <div className="flex flex-row justify-between ">
            <div class="wrapper2  mt-5 mb-5">
              <div class="card2">
                <div className="">
                  <span className=" text-2xl font-bold ml-16 ">
                    {" "}
                    Association
                  </span>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p className="flex justify-center">Zoology Department</p>
                  <br />
                  <a href={association}>
                    <button className="w-full">View</button>
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
  );
}

export default Zoo_association;
