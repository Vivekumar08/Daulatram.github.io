import React from 'react'
import Departments from "../../../../Components/Sidebar/Departments";
import Ecobanner from "../Economics/Ecobanner.jsx";
import Economics from "../../../../Components/DepartSIde/Economics.jsx";
import Eco_event from "../../../../Dummy_data/ImgPages/Economics/Eco_events.pdf"
function Eco_events() {
  return (
    <div className=" flex flex-col">
    <div className="">
      <Ecobanner />
    </div>
    <div className="flex flex-row">
      <div className="w-[350px]">
        <Departments />
      </div>
      <div>
        <div className="w-[1100px]">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
             Events
          </h2>
        </div>
        <div className="flex flex-row justify-between ">
          <div class="wrapper2  mt-5 mb-5">
            <div class="card1">
              <div className="">
                <span className=" text-2xl font-bold ml-8"> Economics Association: Events</span>
              </div>
              <div class="info">
                <h1 className="font-bold">Description</h1>
                <p>
                  1. 2020-21
                  <br />
                  2. 2019-20


                </p>
                <br />
                <a href={Eco_events}>
                  <button>View</button>
                  <br />
                </a>
                <br />
              </div>
            </div>
          </div>
          <div className=" flex  flex-col   mt-4">
            <Economics/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Eco_events