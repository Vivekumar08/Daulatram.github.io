import React from "react";
import Departments from "../../../../Components/Sidebar/Departments";
import Chembanner from "../Chemistry/Chembanner.jsx";
import Chemistry from "../../../../Components/DepartSIde/Chemistry.jsx";
import bschonschem from "../../../../Dummy_data/ImgPages/Chemistry/19082019_B. Sc_Hons_Chemistry.pdf";
import bsclifescience from "../../../../Dummy_data/ImgPages/Chemistry/19082019_B.Sc_Life_Science.pdf";
import bsclifesyll from "../../../../Dummy_data/ImgPages/Chemistry/B.Sc_Lifescience_Syllabus.pdf";
import bscchemsyll from "../../../../Dummy_data/ImgPages/Chemistry/B.Sc._Hons._Chemistry_Syllabus_LOCF.pdf";

function Chemprogramoffered() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Chembanner />
      </div>
      <div className="flex flex-row">
      <div className=" flex  flex-col  ml-2 mt-12">
              <Chemistry />
        </div>
        <div className="w-full mr-auto ml-auto">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Program offered
          </h2>

          <div className="flex flex-col">
            <div class="wrapper2 mt-5 mb-5">
              <div class="card2">
                <div className="">
                  <span className=" text-2xl font-bold ml-2">
                    B. Sc Hons Chemistry 23July 2019
                  </span>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p className="flex text-justify">
                    BSc (Hons) Chemistry offer courses in the areas of
                    inorganic, organic, physical, materials and analytical.
                  </p>
                  <br />
                  <br />
                  <a href={bschonschem}>
                    <button className="w-full">View</button>
                  </a>
                </div>
              </div>
              <div class="card2">
                <span className=" text-2xl font-bold">
                  B.Sc Life Science 18 July 2019
                </span>
                <div class="info">
                  <h1 className="font-bold flex justify-center ">Description</h1>
                  <p className="flex text-justify">
                    CHEMISTRY COURSES OFFERED UNDER B.Sc. Life Science PROGRAMME
                  </p>
<br /><br />
                  <a href={bsclifescience}>
                    <button className="w-full">View</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="wrapper2 mt-5 mb-10">
              <div class="card2">
                <div className="flex flex-col">
                  <div>
                    <span className=" text-2xl font-bold mr-4 ">
                      B.Sc Lifescience Syllabus <br />
                    </span>
                  </div>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify_center">Description</h1>
                  <p classname="ml-3">Syllabus</p><br /><br />
                  <a href={bsclifesyll}>
                    <button className="w-full">View</button>
                  </a>
                </div>
              </div>
              <div class="card2">
                <span className=" text-2xl font-bold">
                  B.Sc. Hons. Chemistry Syllabus LOCF
                </span>
                <div class="info">
                  <h1 className="font-bold flex justify-center ">Description</h1>
                  <p classname="ml-3">Syllabus </p>
<br /><br />
                  <a href={bsclifescience}>
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

export default Chemprogramoffered;
