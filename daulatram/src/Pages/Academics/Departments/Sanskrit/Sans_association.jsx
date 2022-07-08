import React from 'react'
import Sanskrit from "../../../../Components/DepartSIde/Sanskrit";
import Sansbanner from "./Sansbanner";
import association_sans from "../../../../Dummy_data/ImgPages/Sanskrit/association_sans.pdf";


function Sans_association() {
  return (
<div className=" flex flex-col">
    <div className="">
      <Sansbanner />
    </div>
    <div className="flex flex-row">
    <div className=" flex  flex-col mt-12 ml-2">
          <Sanskrit />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
Association
          </h2>
      
        <div className="flex flex-row justify-between ">
          <div class="wrapper2  mt-5 mb-5">
            <div class="card2">
              <div className="">
                <span className=" text-2xl font-bold ml-12 ">
                  {" "}
                  Association 
                </span>
              </div>
              <div class="info">
                <h1 className="font-bold flex justify-center">Description</h1>
                <p className='flex justify-center'>Sanskrit Department</p>
                <br />
                <a href={association_sans}>
                  <button className='w-full'>View</button>
                  <br />
                </a>

                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
                <div>
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Sanskrit/a1.jpg)",
                      width: "800px",
                      height: "600px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 flex justify-center rounded-3xl border-2 border-black"
                  /></div>
               
                <div>
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Sanskrit/a2.jpg)",
                      width: "800px",
                      height: "600px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 flex justify-center rounded-3xl border-2 border-black"
                  /></div>
                <div>
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Sanskrit/a3.jpg)",
                      width: "800px",
                      height: "600px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 flex justify-center rounded-3xl border-2 border-black"
                  /></div>
                <div>
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Sanskrit/a4.jpeg)",
                      width: "800px",
                      height: "600px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 flex justify-center rounded-3xl border-2 border-black"
                  /></div>
                <div>
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Sanskrit/a5.jpeg)",
                      width: "800px",
                      height: "600px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 flex justify-center rounded-3xl border-2 border-black"
                  /></div>
                <div>
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Sanskrit/a6.jpeg)",
                      width: "800px",
                      height: "600px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 flex justify-center rounded-3xl border-2 border-black"
                  /></div>





</div>
      </div>
    </div>
  </div>
  )
}

export default Sans_association