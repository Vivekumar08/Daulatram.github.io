import React, {useState} from "react";
import Mathbanner from "../Mathematics/Mathbanner.jsx";
import Mathematics from "../../../../Components/DepartSIde/Mathematics.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Math_facilities() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <Mathbanner />
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
                <Mathematics />
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
          <Mathematics />
        </div>
        <div className="w-full mr-16 mb-4">
          <h2 className="md:text-3xl text-lg uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center ml-4 items-center ">
            Facilities
          </h2>

          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <div className="pr-3 pl-3 flex mr-1 mb-4 ml-10">
                    <span className="md:text-lg text-sm text-justify font-medium">
                      <b> Library-</b> There are about 3000 books on Mathematics
                      available in the college library.
                    </span>
                  </div>
                  
                  <div className="pr-3 pl-3 flex mr-1 ml-10">
                    <span className="md:text-lg text-sm text-justify font-medium ">
                      <b>Lab-</b> The Department of Mathematics has a computer
                      lab with a total capacity of 25 desktops which are
                      connected via the main server. The lab has the facility of
                      a printer on LAN, a projector and a white board. The
                      desktops are well equipped with mathematical software such
                      as Mathematica XI, Statistical open-source software R,
                      Latex and Operational Research softwares such as TORA. The
                      department also has a dedicated lab staff for the proper
                      functioning of the lab. The department has recently
                      updated the lab with 10 new desktops having advanced
                      configuration and Windows10 Operating system.
                      <div
                        style={{
                          backgroundImage:
                            "url(/images/ImgPages/Mathematics/Lab_pic.png)",

                        }}
                        className="bg-center ml-auto mr-auto lg:w-[700px] w-[250px] h-[190px] lg:h-[450px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                      ></div>
                    </span>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Math_facilities;
