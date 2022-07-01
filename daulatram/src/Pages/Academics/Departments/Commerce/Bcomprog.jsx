import React from 'react'
import Departments from "../../../../Components/Sidebar/Departments";
import Commercebanner from "../Commerce/Commercebanner.jsx";
import Commerce from "../../../../Components/DepartSIde/Commerce.jsx";
import bcom from "../../../../Dummy_data/ImgPages/Commerce/B.Com.pdf"
import ba from "../../../../Dummy_data/ImgPages/Commerce/BA_Prog_Commerce.pdf"
function Bcomprog() {
  return (
    <div className=" flex flex-col">
    <div className="">
      <Commercebanner />
    </div>
    <div className="flex flex-row">
      <div className="w-[350px]">
        <Departments />
      </div>
      <div>
        <div className="w-[1100px]">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Program Offered
          </h2>
        </div>
<div className="flex flex-row">
        <div class="wrapper2 mt-5 mb-5">
       
          <div class="card1">
            <span className=" text-2xl ml-8 font-bold">
              B.Com 
            </span>
            <div class="info">
              <h1 className="font-bold ">Description</h1>
              <p>
                Syllabus of Course
              </p>
<br />
              <a href={"bcom"}>
                <button>View</button>
              </a>
            </div>
          </div>
          <div class="card1">
            <div className="flex flex-col">
              <div>
                <span className=" text-2xl ml-8 font-bold ">
                  B.A Prog. Commerce
                  <br />
                </span>
              </div>
            </div>
            <div class="info">
              <h1 className="font-bold">Description</h1>
              <p>
              Syllabus of course

              </p>
              <br />
              <a href={"ba"}>
                <button>View</button>
              </a>
            </div>
          </div>
          </div>
        <div className=" flex  flex-col  mt-10">
        <Commerce/>
      </div>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default Bcomprog