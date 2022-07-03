import React from "react";
import Departments from "../../../../Components/Sidebar/Departments";
import Ecobanner from "../Economics/Ecobanner.jsx";
import Economics from "../../../../Components/DepartSIde/Economics.jsx";
import Publications_eco from "../../../../Dummy_data/ImgPages/Economics/Publications_Economics.pdf";
function Eco_publications() {
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
              Publications
            </h2>
      
          <div className="flex flex-row justify-between ">
            <div class="wrapper2  mt-5 mb-5">
              <div class="card2">
                <div className="">
                  <span className=" text-2xl font-bold">
                    {" "}
                    Research Publications
                  </span>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p className="flex justify-center">(JOURNALS)</p>
                  <br />
                  <a href={Publications_eco}>
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

export default Eco_publications;
