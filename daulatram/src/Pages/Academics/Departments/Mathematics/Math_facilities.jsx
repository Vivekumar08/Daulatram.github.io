import React from "react";
import Mathbanner from "../Mathematics/Mathbanner.jsx";
import Mathematics from "../../../../Components/DepartSIde/Mathematics.jsx";
function Math_facilities() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Mathbanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col mt-12 ml-2">
          <Mathematics />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Facilities
          </h2>

          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium mt-3">
                      <b> Library-</b> There are about 3000 books on Mathematics
                      available in the college library.
                    </span>
                  </div>
                  <br />
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium ">
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
                          width: "700px",
                          height: "450px",
                        }}
                        className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"
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
