import React from 'react'
import PhysicalEdubanner from "./PhysicalEdubanner.jsx";
import PhysicalEdu from "../../../../Components/DepartSIde/PhysicalEdu";
import course_offered from "../../../../Dummy_data/ImgPages/Physical_Education/Courses_Offered.pdf"
function PhysicalEdu_programoffered() {
  return (
<div className=" flex flex-col">
    <div className="">
      <PhysicalEdubanner />
    </div>
    <div className="flex flex-row">
    <div className=" flex  flex-col mt-12 ml-2">
          <PhysicalEdu />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Program Offered
          </h2>
      
        <div className="flex flex-row justify-between ">
          <div class="wrapper2  mt-5 mb-5">
            <div class="card2">
              <div className="">
                <span className=" text-2xl font-bold ml-7 ">
                  {" "}
                  Program Offered
                </span>
              </div>
              <div class="info">
                <h1 className="font-bold flex justify-center">Description</h1>
                <p className='flex justify-center'>Physical Education Department</p>
                <br />
                <a href={course_offered}>
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

export default PhysicalEdu_programoffered