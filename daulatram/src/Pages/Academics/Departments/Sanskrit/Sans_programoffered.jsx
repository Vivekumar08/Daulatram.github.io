import React from "react";
import Sanskrit from "../../../../Components/DepartSIde/Sanskrit";
import Sansbanner from "./Sansbanner";
import a163 from "../../../../Dummy_data/ImgPages/Sanskrit/a163.pdf"
import a164 from "../../../../Dummy_data/ImgPages/Sanskrit/a164.pdf"

import locfsyllabus from "../../../../Dummy_data/ImgPages/Sanskrit/locfsyllabus.pdf"

function Sans_programoffered() {
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
            Program Offered
          </h2>

          <div className="flex flex-row">
            <div class="wrapper2 mt-5 mb-5">
              <div class="card2">
                <div className="">
                  <span className=" text-2xl font-bold ml-8">Sanskrit (Hons)</span>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p className="flex text-justify">
                  Sanskrit Department
                  </p>
                  <br />
                  <a href={a163}>
                    <button className="w-full">View</button>
                  </a>
                  <br />
                </div>
              </div>
              <div class="card2">
                <span className=" text-2xl font-bold ml-8">Sanskrit (Prog)</span>
                <div class="info">
                  <h1 className="font-bold flex justify-center ">
                    Description
                  </h1>
                  <p className="flex text-justify">
                  Sanskrit Department
                  </p>
                  <br />
                  <a href={a164}>
                    <button className="w-full">View</button>
                  </a>
                  <br />
                </div>
              </div>
              <div class="card2">
                <div className="flex flex-col">
                  <div>
                    <span className=" text-2xl font-bold ml-8">
                      PG LOCF Syllabus
                      <br />
                    </span>
                  </div>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p className="flex text-justify">
                Sanskrit Department 
                  </p>
                  <br />

                  
                  <a href={locfsyllabus}>
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

export default Sans_programoffered;
