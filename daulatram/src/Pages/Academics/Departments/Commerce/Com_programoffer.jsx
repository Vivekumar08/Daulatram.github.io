import React from 'react'
import Departments from "../../../../Components/Sidebar/Departments";
import Commercebanner from "../Commerce/Commercebanner.jsx";
import Commerce from "../../../../Components/DepartSIde/Commerce.jsx";
import bcom from "../../../../Dummy_data/ImgPages/Commerce/B.Com.pdf"
import bcomh from "../../../../Dummy_data/ImgPages/Commerce/B.Com(H).pdf"
import ba from "../../../../Dummy_data/ImgPages/Commerce/BA_Prog_Commerce.pdf"



function Com_programoffer() {
  return (
 <div className=" flex flex-col">
      <div className="">
        <Commercebanner />
      </div>
      <div className="flex flex-row">
      <div className=" flex  flex-col mt-12 ml-2">
          <Commerce />
        </div>
        <div className="w-full mr-16">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Program Offered
            </h2>
         
 <div className="flex flex-row">
          <div class="wrapper2 mt-5 mb-5">
          <div class="card2">
              <div className="">
                <span className=" text-2xl font-bold ml-12">B.Com (Hons)</span>
              </div>
              <div class="info">
                <h1 className="font-bold flex justify-center">Description</h1>
                
                <p>
                  Syllabus of Course
                </p>
                <br />
                <a href={bcomh}>
                  <button className='w-full'>View</button>
                </a>
                <br />
                <br /><br />
              </div>
            </div>
            <div class="card2">
              <span className=" text-2xl ml-12 font-bold">
                B.Com (Prog.)
              </span>
              <div class="info">
                <h1 className="font-bold flex justify-center ">Description</h1>
                <p>
                  Syllabus of Course
                </p>
<br />
                <a href={"/academics/departments/Commerce/Programoffered/Bcomprog"}>
                  <button className='w-full'>View</button>
                </a>
                <br /><br />
                <br />
              </div>
            </div>
            <div class="card2">
              <div className="flex flex-col">
                <div>
                  <span className=" text-2xl mr-5 font-bold ">
                    B.A Prog. Commerce (ESB)
                    <br />
                  </span>
                </div>
              </div>
              <div class="info">
                <h1 className="font-bold flex justify-center">Description</h1>
                <p>
                Syllabus of course

                </p>
                <br />
                <a href={"#"}>
                  <button className='w-full'>View</button>
                </a>
                <br />
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

export default Com_programoffer