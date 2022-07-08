import React from 'react'
import Sanskrit from "../../../../Components/DepartSIde/Sanskrit";
import Sansbanner from "./Sansbanner";import event2021_22 from "../../../../Dummy_data/ImgPages/Sanskrit/events_sans.pdf";
import sans_stud from "../../../../Dummy_data/ImgPages/Sanskrit/sans_stud.pdf";


function Sans_studachieve() {
  return (
<div className=" flex flex-col">
    <div className="">
      <Sansbanner />
    </div>
    <div className="flex flex-row">
    <div className=" flex  flex-col mt-12 ml-2">
          <Sanskrit />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
Students' Achievements
          </h2>
      
        <div className="flex flex-row justify-between ">
          <div class="wrapper2  mt-5 mb-5">
            <div class="card2">
              <div className="">
                <span className=" text-2xl font-bold ml-12 ">
                  {" "}
                  Achievements  
                </span>
              </div>
              <div class="info">
                <h1 className="font-bold flex justify-center">Description</h1>
                <p className='flex justify-center'>Sanskrit Department</p>
                <br />
                <a href={sans_stud}>
                  <button className='w-full'>View</button>
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
  )
}

export default Sans_studachieve