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
    <div className=" flex  flex-col mt-12 ml-2">
          <English />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Program Offered
          </h2>
      
        <div className="flex flex-row justify-between ">
          <div class="wrapper2  mt-5 mb-5">
            <div class="card2">
              <div className="">
                <span className=" text-2xl font-bold ml-8 ">
                  {" "}
                  Program offered
                </span>
              </div>
              <div class="info">
                <h1 className="font-bold flex justify-center">Description</h1>
                <p className='flex justify-center'>Courses Structure</p>
                <br />
                <a href={progoffer}>
                  <button className='w-full'>View</button>
                  <br />
                </a>
                <br />
                <br />
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </div>
  )
}

export default Eng_programoffered