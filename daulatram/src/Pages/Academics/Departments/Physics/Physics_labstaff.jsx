import React, {useState} from "react";
import Physicsbanner from "../Physics/Physicsbanner.jsx";
import Physics from "../../../../Components/DepartSIde/Physics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Physics_labstaff() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <Physicsbanner />
      </div>
      <div className="flex flex-row">
      <div className="md:hidden absolute bg-white">
          {visible ? (
            <>
              <div className=" flex  flex-col mt-8 ml-2">
                <FontAwesomeIcon
                  icon={faClose}
                  size="lg"
                  onClick={() => setVisible(!visible)}
                  className=" border-2  border-[#000080] mr-2 hover:text-black text-white  rounded-lg p-2 cursor-pointer hover:bg-white bg-[#000080]"
                />
                <Physics />
              </div>
            </>
          ) : (
            <div className=" flex  flex-col mt-8 ml-2">
              <FontAwesomeIcon
                icon={faBars}
                size="lg"
                onClick={() => setVisible(!visible)}
                className="text-black border-2 border-[#000080] mr-2 hover:text-white bg-[#fff] rounded-lg p-2 cursor-pointer hover:bg-[#000080]"
              />
            </div>
          )}
        </div>
        <div className=" md:flex hidden md:flex-col mt-12 ml-2">
          <Physics />
        </div>
        <div className="w-full mr-16">
          <h2 className="md:text-4xl text-xl sm:text-xl uppercase font-bold mb-5 mt-[7%] flex flex-row ml-3 md:justify-center items-center  ">
            Laboratory Staff
          </h2>
          <div>
            <h2 className="md:text-2xl text-lg ml-4 font-bold mb-6">
              Our dedicated Lab Staff :
            </h2>
          </div>

          <div className="flex ">
            <div className=" ml-2">
              <img
                style={{
                  backgroundImage: "url(/images/ImgPages/Physics/Dinesh.jpg)",
                 
                }}
                className="bg-center ml-auto mr-auto lg:w-[250px] w-[250px] h-[190px] lg:h-[250px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
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
             <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  w-full mt-5 mb-5">
            <div className=" ml-2">
              <img
                style={{
                  backgroundImage: "url(/images/ImgPages/Physics/Devindar.jpg)",
                  
                }}
                className="bg-center ml-auto mr-auto lg:w-[250px] w-[250px] h-[190px] lg:h-[250px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
              />
              <div className="pr-3 pl-3 flex mr-auto w-[260px] ml-9">
                <span className="text-lg text-justify   mt-3 ">
                  <ul>
                    <li className="flex ml-10">
                      <b>Devindar Pal </b>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  w-full mt-5 mb-5">
            <div className=" ml-2">
              <img
                style={{
                  backgroundImage: "url(/images/ImgPages/Physics/Premlata.png)",
                  
                }}
                className="bg-center ml-auto mr-auto lg:w-[250px] w-[250px] h-[190px] lg:h-[250px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
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
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  w-full mt-5 mb-5">

            <div className=" ml-2">
              <img
                style={{
                  backgroundImage: "url(/images/ImgPages/Physics/vivek.jpg)",
                 
                }}
                className="bg-center ml-auto mr-auto lg:w-[250px] w-[250px] h-[190px] lg:h-[250px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
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
    </div>
  );
}

export default Physics_labstaff;
