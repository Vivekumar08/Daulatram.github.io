import React from "react";
import Departments from "../../../../Components/Sidebar/Departments";
import Ecobanner from "../Economics/Ecobanner.jsx";
import Economics from "../../../../Components/DepartSIde/Economics.jsx";
import BAh from "../../../../Dummy_data/ImgPages/Economics/BA_(h)_Economics_Syllabus.pdf";
import BAprog from "../../../../Dummy_data/ImgPages/Economics/BA_Prog_Syllabus.pdf";
import progoffer from "../../../../Dummy_data/ImgPages/Economics/Programmes_offered.pdf";
function Eco_programoffered() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Ecobanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col ml-2 mt-12">
          <Economics />
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
                    BA (Hons) Economics
                  </span>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p className="flex justify-center">Syllabus</p>
                  <br />

                  <a href={BAh}>
                    <button className="w-full">View</button>
                  </a>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
              <div class="card2">
                <span className=" text-2xl ml-12 font-bold">BA Program</span>
                <div class="info">
                  <h1 className="font-bold  flex justify-center ">
                    Description
                  </h1>
                  <p className="flex justify-center">Syllabus</p>
                  <br />
                  <a href={BAprog}>
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
                      Program Offered
                      <br />
                    </span>
                  </div>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p>Structure</p>
                  <br />
                  <a href={progoffer}>
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

export default Eco_programoffered;
