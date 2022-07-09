import React from "react";
import Physicsbanner from "../Physics/Physicsbanner.jsx";
import Physics from "../../../../Components/DepartSIde/Physics";
function Physics_labstaff() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Physicsbanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col mt-12 ml-2">
          <Physics />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Laboratory Staff
          </h2>
          <div>
            <h2 className="text-2xl ml-4 font-bold mb-6">
              Our dedicated Lab Staff :
            </h2>
          </div>

          <div className="flex ">
            <div className=" ml-2">
              <img
                style={{
                  backgroundImage: "url(/images/ImgPages/Physics/Dinesh.jpg)",
                  width: "250px",
                  height: "250px",
                }}
                className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto  mb-1 rounded-3xl border-2 border-black"
              />
              <div className="pr-3 pl-3 flex mr-auto  w-[260px] ">
                <span className="text-lg text-justify mt-3 ">
                  <ul>
                    <li className="flex ml-20">
                      <b>Dinesh</b>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className=" ml-2">
              <img
                style={{
                  backgroundImage: "url(/images/ImgPages/Physics/Devindar.jpg)",
                  width: "250px",
                  height: "250px",
                }}
                className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-12 mb-1 rounded-3xl border-2 border-black"
              />
              <div className="pr-3 pl-3 flex mr-auto w-[260px] ml-9">
                <span className="text-lg text-justify   mt-3 ">
                  <ul>
                    <li className="flex ml-20">
                      <b>Devindar Pal </b>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className=" ml-2">
              <img
                style={{
                  backgroundImage: "url(/images/ImgPages/Physics/Premlata.png)",
                  width: "250px",
                  height: "250px",
                }}
                className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-12 mb-1 rounded-3xl border-2 border-black"
              />
              <div className="pr-3 pl-3 flex mr-auto w-[260px] ml-9">
                <span className="text-lg text-justify   mt-3 ">
                  <ul>
                    <li className="flex ml-20">
                      <b>Premlata </b>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            <div className=" ml-2">
              <img
                style={{
                  backgroundImage: "url(/images/ImgPages/Physics/vivek.jpg)",
                  width: "250px",
                  height: "250px",
                }}
                className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-12 mb-1 rounded-3xl border-2 border-black"
              />
              <div className="pr-3 pl-3 flex mr-auto w-[260px] ml-9">
                <span className="text-lg text-justify   mt-3 ">
                  <ul>
                    <li className="flex ml-20">
                      <b>Vivek </b>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Physics_labstaff;
