import React from 'react'
import Departments from "../../../../Components/Sidebar/Departments";
import Engbanner from "../English/Engbanner.jsx";
import English from "../../../../Components/DepartSIde/English.jsx";
import eng_publication from "../../../../Dummy_data/ImgPages/English/Publications_eng.pdf"
function Eng_publications() {
  return (
<div className=" flex flex-col">
    <div className="">
      <Engbanner />
    </div>
    <div className="flex flex-row">
    <div className=" flex  flex-col mt-12 ml-2">
          <English />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Publications
          </h2>
      
        <div className="flex flex-row justify-between ">
          <div class="wrapper2  mt-5 mb-5">
            <div class="card2">
              <div className="">
                <span className=" text-2xl ml-12 font-bold ">
                  {" "}
                  Publications
                </span>
              </div>
              <div class="info">
                <h1 className="font-bold flex justify-center">Description</h1>
                <p className='flex justify-center'>English Department</p>
                <br />
                <a href={eng_publication}>
                  <button className='w-full'>View</button>
                  <br />
                </a>
                <br />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div></div>
  )
}

export default Eng_publications