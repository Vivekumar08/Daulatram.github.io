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
      <div className="w-[350px]">
        <Departments />
      </div>
      <div>
        <div className="w-[1100px]">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Publications
          </h2>
        </div>
        <div className="flex flex-row justify-between ">
          <div class="wrapper2  mt-5 mb-5">
            <div class="card1">
              <div className="">
                <span className=" text-2xl font-bold">Research & Publications</span>
              </div>
              <div class="info">
                <h1 className="font-bold">Description</h1>
                <p>
                  List of Publications
                </p>
                <br />
                <a href={publications}>
                  <button>View</button>
                  <br />
                </a>
                <br />
              </div>
            </div>
          </div>
          <div className=" flex  flex-col   mt-4">
            <Chemistry/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Chempublications