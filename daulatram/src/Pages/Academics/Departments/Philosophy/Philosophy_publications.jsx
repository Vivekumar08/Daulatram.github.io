import React from 'react'
import Philosophybanner from "../Philosophy/Philosophybanner.jsx";
import Philosophy from "../../../../Components/DepartSIde/Philosophy";
import Publications_philosophy from "../../../../Dummy_data/ImgPages/Philosophy/Publications_philosophy.pdf"
function Philosophy_publications() {
  return (
<div className=" flex flex-col">
    <div className="">
      <Philosophybanner />
    </div>
    <div className="flex flex-row">
    <div className=" flex  flex-col mt-12 ml-2">
          <Philosophy />
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
                Philosophy Department Publications  
                </span>
              </div>
              <div class="info">
                <h1 className="font-bold flex justify-center">Description</h1>
                <p className='flex justify-center'>Philosophy Department</p>
                <br />
                <a href={Publications_philosophy}>
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

export default Philosophy_publications