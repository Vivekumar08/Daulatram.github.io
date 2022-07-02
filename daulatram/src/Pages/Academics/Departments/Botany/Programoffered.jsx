import React from "react";
import Botanybanner from "../Botany/Botanybanner.jsx";
import Departments from "../../../../Components/Sidebar/Departments";
import structure from "../../../../Dummy_data/ImgPages/Botany/bsc(lifescience).pdf";
import bscbo from "../../../../Dummy_data/ImgPages/Botany/bschonsbotany.pdf";
import lifesc from "../../../../Dummy_data/ImgPages/Botany/2.pdf";
import Botany from "../../../../Components/DepartSIde/Botany.jsx";
function Programoffered() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Botanybanner />
      </div>
      <div className="flex flex-row">
      <div className=" flex  flex-col mt-12 ml-2">
          <Botany />
        </div>
        <div>
          <div className="w-full mr-16">
            <h2 className="text-4xl uppercase font-bold mb-5  mt-[5%] flex flex-row justify-center items-center ">
              Program Offered
            </h2>
         
 <div className="flex flex-row">
          <div class="wrapper2 mt-5 mb-5">
          <div class="card1">
              <div className="">
                <span className=" text-2xl font-bold mr-5">B.sc (Hons) Botany</span>
              </div>
              <div class="info">
                <h1 className="font-bold flex justify-center">Description</h1>
                <p className="flex text-justify">
                  The B.Sc. - Botany honours programme is designed to equip
                  students with essential knowledge and technical skills to
                  study plants in a holistic manner.
                </p>
                <br />
                <a href={bscbo}>
                  <button className="w-full">View</button>
                </a>
                <br />
              </div>
            </div>
            <div class="card1">
              <span className=" text-2xl font-bold mr-5">
                B.sc Life Sciences (Botany Component)
              </span>
              <div class="info">
                <h1 className="font-bold flex justify-center ">Description</h1>
                <p className="flex text-justify">
                  B.Sc. Programme in Life Sciences is designed to afford a
                  skeletal structure within which the programme can be developed
                  to suit the need of the hour.
                </p>
<br />
                <a href={lifesc}>
                  <button className="w-full">View</button>
                </a>
                <br />
              </div>
            </div>
            <div class="card1">
              <div className="flex flex-col">
                <div>
                  <span className=" text-2xl font-bold mr-5 ">
                    Course Structure B.sc (Hons) Botany
                    <br />
                  </span>
                </div>
              </div>
              <div class="info">
                <h1 className="font-bold flex justify-center">Description</h1>
                <p className="flex text-justify">
                Course Structure of B.Sc. (Hons) Botany
                </p>
                <br />
                <br /><br /><br />
                <a href={structure}>
                  <button className="w-full">View</button>
                </a>
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

export default Programoffered;
