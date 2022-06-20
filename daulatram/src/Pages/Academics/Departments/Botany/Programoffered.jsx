import React from "react";
import Botanybanner from "../Botany/Botanybanner.jsx";
import Departments from "../../../../Components/Sidebar/Departments";
import structure from "../../../../Dummy_data/ImgPages/Botany/bsc(lifescience).pdf";
import bscbo from "../../../../Dummy_data/ImgPages/Botany/bschonsbotany.pdf";
import lifesc from "../../../../Dummy_data/ImgPages/Botany/CoursestructureBsc(hons)botany.pdf";

function Programoffered() {
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
              Program Offered
            </h2>
          </div>

          <div class="wrapper2 mt-5 mb-5">
          <div class="card1">
              <div className="">
                <span className=" text-2xl font-bold">B.sc (Hons) Botany</span>
              </div>
              <div class="info">
                <h1 className="font-bold">Description</h1>
                <p>
                  The B.Sc. - Botany honours programme is designed to equip
                  students with essential knowledge and technical skills to
                  study plants in a holistic manner.
                </p>
                <a href={bscbo}>
                  <button>View</button>
                </a>
              </div>
            </div>
            <div class="card1">
              <span className=" text-2xl font-bold">
                B.sc Life Sciences (Botany Component)
              </span>
              <div class="info">
                <h1 className="font-bold ">Description</h1>
                <p>
                  B.Sc. Programme in Life Sciences is designed to afford a
                  skeletal structure within which the programme can be developed
                  to suit the need of the hour, in keeping with the emergence of
                  new areas of life sciences through interdisciplinary approach.
                </p>

                <a href={lifesc}>
                  <button>View</button>
                </a>
              </div>
            </div>
            <div class="card1">
              <div className="flex flex-col">
                <div>
                  <span className=" text-2xl font-bold ">
                    Course Structure B.sc (Hons) Botany
                    <br />
                  </span>
                </div>
              </div>
              <div class="info">
                <h1 className="font-bold">Description</h1>
                <p>
                Course Structure of B.Sc. (Hons) Botany

                </p>
                <a href={structure}>
                  <button>View</button>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programoffered;
