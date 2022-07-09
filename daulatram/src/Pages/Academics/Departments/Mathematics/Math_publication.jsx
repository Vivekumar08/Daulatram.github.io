import React from 'react'

import Mathbanner from "../Mathematics/Mathbanner.jsx";
import Mathematics from "../../../../Components/DepartSIde/Mathematics.jsx";
import publication_math from "../../../../Dummy_data/ImgPages/Mathematics/Publications_Maths.pdf"
function Math_publication() {
  return (
<div className=" flex flex-col">
    <div className="">
      <Mathbanner />
    </div>
    <div className="flex flex-row">
    <div className=" flex  flex-col mt-12 ml-2">
          <Mathematics />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Publications
          </h2>
      
        <div className="flex flex-row justify-between ">
          <div class="wrapper2  mt-5 mb-5">
            <div class="card2">
              <div className="">
                <span className=" text-2xl font-bold ml-16 ">
                  {" "}
                  Publication
                </span>
              </div>
              <div class="info">
                <h1 className="font-bold flex justify-center">Description</h1>
                <p className='flex justify-center'>Mathematics Department</p>
                <br />
                <a href={publication_math}>
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

export default Math_publication