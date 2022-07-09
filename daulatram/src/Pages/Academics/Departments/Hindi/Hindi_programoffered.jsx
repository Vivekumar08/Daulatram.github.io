import React from "react";

import Hindibanner from "../Hindi/Hindibanner.jsx";
import Hindi from "../../../../Components/DepartSIde/Hindi.jsx";
import bahons from "../../../../Dummy_data/ImgPages/Hindi/BAHonsHindi.pdf"
import baprog from "../../../../Dummy_data/ImgPages/Hindi/BAProgHindi.pdf"
import bcomprog from "../../../../Dummy_data/ImgPages/Hindi/BcomprogHindi.pdf"


function Hindi_programoffered() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Hindibanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col ml-2 mt-12">
          <Hindi />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Program Offered
          </h2>

          <div className="flex flex-row">
            <div class="wrapper2 mt-5 mb-5">
              <div class="card2">
                <div className="">
                  <span className=" text-2xl ml-2 font-bold">
                    BA (Hons) Hindi
                  </span>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p className="flex justify-center">Syllabus</p>
                  <br />

                  <a href={bahons}>
                    <button className="w-full">View</button>
                  </a>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
              <div class="card2">
                <span className=" text-2xl ml-12 font-bold">BA (Prog) Hindi</span>
                <div class="info">
                  <h1 className="font-bold  flex justify-center ">
                    Description
                  </h1>
                  <p className="flex justify-center">Syllabus</p>
                  <br />
                  <a href={baprog}>
                    <button className="w-full">View</button>
                  </a>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
              <div class="card2">
                <div className="flex flex-col">
                  <div>
                    <span className=" text-2xl ml-7 font-bold ">
                    B.Com (Prog) Hindi
                      <br />
                    </span>
                  </div>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p className="flex justify-center">Syllabus</p>
                  <br />
                  <a href={bcomprog}>
                    <button className="w-full">View</button>
                  </a>
                  <br />
                  <br />
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

export default Hindi_programoffered;
