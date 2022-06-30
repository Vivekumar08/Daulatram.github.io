import React from 'react'
import Departments from "../../../../Components/Sidebar/Departments";
import Engbanner from "../English/Engbanner.jsx";
import English from "../../../../Components/DepartSIde/English.jsx";
import progoffer from "../../../../Dummy_data/ImgPages/English/Eng_ProgrammesOffered.pdf"

function Eng_programoffered() {
  return (
    <div className=" flex flex-col">
    <div className="">
      <Engbanner />
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
        <div className="flex flex-row justify-between ">
          <div class="wrapper2  mt-5 mb-5">
            <div class="card1">
              <div className="">
                <span className=" text-2xl font-bold ">
                  {" "}
                  Program offered
                </span>
              </div>
              <div class="info">
                <h1 className="font-bold">Description</h1>
                <p>Courses Structure</p>
                <br />
                <a href={progoffer}>
                  <button>View</button>
                  <br />
                </a>
                <br />
              </div>
            </div>
          </div>
          <div className=" flex  flex-col   mt-4">
            <English/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Eng_programoffered