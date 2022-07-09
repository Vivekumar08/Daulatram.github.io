import React from 'react'
import Departments from "../../../../Components/Sidebar/Departments";
import Chembanner from "../Chemistry/Chembanner.jsx";
import Chemistry from "../../../../Components/DepartSIde/Chemistry.jsx";
import publications from "../../../../Dummy_data/ImgPages/Chemistry/chem_research_publications.pdf"

function Chempublications() {
  return (
    <div className=" flex flex-col">
    <div className="">
      <Chembanner />
    </div>
    <div className="flex flex-row">
    <div className=" flex  flex-col  ml-2 mt-12">
              <Chemistry />
        </div>
      
        <div className="w-full mr-auto ml-auto">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Publications
          </h2>

        <div className="flex flex-row justify-between ">
          <div class="wrapper2  mt-5 mb-5">
            <div class="card2">
              <div className="">
                <span className=" text-2xl font-bold ml-8 justify-center"> Publications</span>
              </div>
              <div class="info ">
                <h1 className="font-bold ">Description</h1>
                <p className='flex '>
                  List of Publications
                </p>
                <br />
                <a href={publications}>
                  <button className="w-full">View</button>
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

export default Chempublications