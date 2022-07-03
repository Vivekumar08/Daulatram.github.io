import React from "react";
import Departments from "../../../../Components/Sidebar/Departments";
import Engbanner from "../English/Engbanner.jsx";
import English from "../../../../Components/DepartSIde/English.jsx";
import Eng_Stuachieve from "../../../../Dummy_data/ImgPages/English/Eng_StuAcheivements.pdf";

function Eng_Studachieve() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Engbanner />
      </div>
      <div className="flex flex-row">
      <div className=" flex  flex-col mt-12 ml-2">
          <English />
        </div>
        <div className="w-full mr-16">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Students' Achievements
            </h2>
        
          <div className="flex flex-row justify-between ">
            <div class="wrapper2  mt-5 mb-5">
              <div class="card2">
                <div className="">
                  <span className=" text-2xl font-bold ml-8 "> Achievements</span>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p className="flex text-justify">
                    The Department of English had secured two university
                    positions in the year 2018-19, Tripti Agarwal and Dimple
                    Madaan creating the success story.
                  </p>
                  <br />
                  <a href={Eng_Stuachieve}>
                    <button className="w-full">View</button>
                    
                  </a>
                  <br/>
                
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eng_Studachieve;
