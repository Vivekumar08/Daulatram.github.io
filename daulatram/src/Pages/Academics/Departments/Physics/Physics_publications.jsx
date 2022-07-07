import React from 'react'
import Physicsbanner from "../Physics/Physicsbanner.jsx";
import Physics from "../../../../Components/DepartSIde/Physics";
import Publications_physics from "../../../../Dummy_data/ImgPages/Physics/Publications_physics.pdf"
function Physics_publications() {
  return (
<div className=" flex flex-col">
    <div className="">
      <Physicsbanner />
    </div>
    <div className="flex flex-row">
    <div className=" flex  flex-col mt-12 ml-2">
          <Physics/>
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Publications
          </h2>
      
        <div className="flex flex-row justify-between ">
          <div class="wrapper2  mt-5 mb-5">
            <div class="card2">
              <div className="">
                <span className=" text-2xl font-bold ml-12 ">
                  {" "}
                  Publications
                </span>
              </div>
              <div class="info">
                <h1 className="font-bold flex justify-center">Description</h1>
                <p className='flex justify-center'>Physics Department</p>
                <br />
                <a href={Publications_physics}>
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

export default Physics_publications