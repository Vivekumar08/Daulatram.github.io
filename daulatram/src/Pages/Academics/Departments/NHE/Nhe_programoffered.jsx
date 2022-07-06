import React from 'react'
import Nhebanner from "../NHE/Nhebanner.jsx";
import NHE from "../../../../Components/DepartSIde/NHE.jsx";
import baprognhe from "../../../../Dummy_data/ImgPages/NHE/BAProgNHE.pdf"
function Nhe_programoffered() {
  return (
<div className=" flex flex-col">
    <div className="">
      <Nhebanner />
    </div>
    <div className="flex flex-row">
    <div className=" flex  flex-col mt-12 ml-2">
          <NHE />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Program offered
          </h2>
      
        <div className="flex flex-row justify-between ">
          <div class="wrapper2  mt-5 mb-5">
            <div class="card2">
              <div className="">
                <span className=" text-2xl font-bold ml-12 ">
                  {" "}
                 B.A (Program)  
                </span>
              </div>
              <div class="info">
                <h1 className="font-bold flex justify-center">Description</h1>
                <p className='flex justify-center'>NHE Department</p>
                <br />
                <a href={baprognhe}>
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

export default Nhe_programoffered