import React from 'react'
import PolScibanner from "./PolScibanner";
import Political_Science from "../../../../Components/DepartSIde/Political_Science";
import pub_pol_science from "../../../../Dummy_data/ImgPages/Political_Science/Publications_(Political_Science).pdf"
function Pol_Sci_publications() {
  return (
<div className=" flex flex-col">
    <div className="">
      <PolScibanner />
    </div>
    <div className="flex flex-row">
    <div className=" flex  flex-col mt-12 ml-2">
          <Political_Science/>
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Publications
          </h2>
      
        <div className="flex flex-row justify-between ">
          <div class="wrapper2  mt-5 mb-5">
            <div class="card2">
              <div className="">
                <span className=" text-2xl font-bold ml-12">
                  {" "}
                  Publications
                </span>
              </div>
              <div class="info">
                <h1 className="font-bold flex justify-center">Description</h1>
                <p className='flex justify-center'>Political Science Department</p>
                <br />
                <a href={pub_pol_science}>
                  <button className='w-full'>View</button>
                  <br />
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

export default Pol_Sci_publications