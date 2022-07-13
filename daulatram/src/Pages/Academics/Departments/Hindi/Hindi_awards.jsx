import React from 'react'

import Hindibanner from "../Hindi/Hindibanner.jsx";
import Hindi from "../../../../Components/DepartSIde/Hindi.jsx";
import awards_hindi from "../../../../Dummy_data/ImgPages/Hindi/Hindi_Awards.pdf"

function Hindi_awards() {
  return (
    <div className=" flex flex-col">
    <div className="">
      <Hindibanner />
    </div>
    <div className="flex flex-row">
    <div className=" flex  flex-col mt-12 ml-2">
          <Hindi />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Awards
          </h2>
      
        <div className="flex flex-row justify-between ">
          <div class="wrapper2  mt-5 mb-5">
            <div class="card2">
              <div className="">
                <span className=" text-2xl font-bold ml-20 ">
                  {" "}
                  Awards
                </span>
              </div>
              <div class="info">
                <h1 className="font-bold flex justify-center">Description</h1>
                <p className='flex justify-center'>Hindi Department Awards</p>
                <br />
                <a href={awards_hindi}>
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

export default Hindi_awards