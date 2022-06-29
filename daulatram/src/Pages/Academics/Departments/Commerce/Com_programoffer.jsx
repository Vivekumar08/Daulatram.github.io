import React from 'react'
import Departments from "../../../../Components/Sidebar/Departments";
import Commercebanner from "../Commerce/Commercebanner.jsx";
import Commerce from "../../../../Components/DepartSIde/Commerce.jsx";
import bcom from "../../../../Dummy_data/ImgPages/Commerce/B.Com.pdf"
import bcomh from "../../../../Dummy_data/ImgPages/Commerce/B.Com(H).pdf"
import ba from "../../../../Dummy_data/ImgPages/Commerce/BA_Prog_Commerce.pdf"



function Com_programoffer() {
  return (
{/* <div className=" flex flex-col">
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
              <div className="">
                <span className=" text-2xl font-bold">B.Com (Hons)</span>
              </div>
              <div class="info">
                <h1 className="font-bold">Description</h1>
                <p>
                  Syllabus of Course
                </p>
                <a href={bcomh}>
                  <button>View</button>
                </a>
              </div>
            </div>
            <div class="card1">
              <span className=" text-2xl font-bold">
                B.Com (Prog.)
              </span>
              <div class="info">
                <h1 className="font-bold ">Description</h1>
                <p>
                  B.Sc. Programme in Life Sciences is designed to afford a
                  skeletal structure within which the programme can be developed
                  to suit the need of the hour.
                </p>

                <a href={lifesc}>
                  <button>View</button>
                </a>
              </div>
            </div>
            <div class="card1">
              <div className="flex flex-col">
                <div>
                  <span className=" text-2xl font-bold ">
                    Course Structure B.sc (Hons) Botany
                    <br />
                  </span>
                </div>
              </div>
              <div class="info">
                <h1 className="font-bold">Description</h1>
                <p>
                Course Structure of B.Sc. (Hons) Botany

                </p>
                <a href={structure}>
                  <button>View</button>
                </a>
              </div>
            </div>
            </div>
          <div className=" flex  flex-col  mt-10">
          <Botany/>
        </div>
          </div>
        </div>
      </div>
    </div> */}
  )
}

export default Com_programoffer