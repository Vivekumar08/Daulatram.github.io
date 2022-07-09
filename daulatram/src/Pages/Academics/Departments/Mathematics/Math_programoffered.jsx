import React from 'react'
import Mathbanner from "../Mathematics/Mathbanner.jsx";
import Mathematics from "../../../../Components/DepartSIde/Mathematics.jsx";
import baprogmath from "../../../../Dummy_data/ImgPages/Mathematics/baprogmath.pdf";
import geforba from "../../../../Dummy_data/ImgPages/Mathematics/geforba.pdf";
import gehons from "../../../../Dummy_data/ImgPages/Mathematics/gehons.pdf";
import math from "../../../../Dummy_data/ImgPages/Mathematics/math.pdf";

function Math_programoffered() {
  return (
<div className=" flex flex-col">
      <div className="">
        <Mathbanner />
      </div>
      <div className="flex flex-row">
      <div className=" flex  flex-col  ml-2 mt-12">
              <Mathematics />
        </div>
        <div className="w-full mr-auto ml-auto">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Program offered
          </h2>

          <div className="flex flex-col">
            <div class="wrapper2 mt-5 mb-5">
              <div class="card2">
                <div className="">
                  <span className=" text-2xl font-bold ml-4">
                    B.A (Prog) (2019)
                  </span>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p className="flex ml-3">
                    Syllabus
                  </p>
                  <br />
                  <br />
                  <a href={baprogmath}>
                    <button className="w-full">View</button>
                  </a>
                </div>
              </div>
              <div class="card2">
                <span className=" text-2xl font-bold  mr-2">
                  GE for B.A & B.Com (Prog) 2019
                </span>
                <div class="info">
                  <h1 className="font-bold flex justify-center ">Description</h1>
                  <p className="flex ml-">
                    Syllabus
                  </p>
<br /><br />
                  <a href={geforba}>
                    <button className="w-full">View</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="wrapper2 mt-5 mb-10">
              <div class="card2">
                <div className="flex flex-col">
                  <div>
                    <span className=" text-2xl font-bold ml-12  ">
                      GE for Hons <br />
                    </span>
                  </div>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify_center">Description</h1>
                  <p classname="flex justify-center">Syllabus</p><br /><br />
                  <a href={gehons}>
                    <button className="w-full">View</button>
                  </a>
                </div>
              </div>
              <div class="card2">
                <span className=" text-2xl font-bold ml-8">
                  Math(H) 2019
                </span>
                <div class="info">
                  <h1 className="font-bold flex justify-center ">Description</h1>
                  <p classname="flex ml-3">Syllabus </p>
<br /><br />
                  <a href={math}>
                  <button className="w-full">View</button>
                  </a>
                </div>
              </div>
            </div>

            </div>
          </div>
            
      </div>
    </div>
  )
}

export default Math_programoffered