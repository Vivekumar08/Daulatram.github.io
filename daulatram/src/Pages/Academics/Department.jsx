import React from "react";
import DeptSidebar from "../../Components/Sidebar/DeptSidebar";
import DeptBanner from "../../Components/Banners/DeptBanner";
import "./card.css";
import { dept } from "../../Components/Mylinks";

function Department() {
  return (
    <>
      <>
        <div className=" flex flex-col">
          <div className="">
            <DeptBanner />
          </div>
          <div className="flex flex-row">
            <div className="w-[350px]">
              <DeptSidebar />
            </div>
            <div className="w-[1100px]">
              {dept.map((names) => (
                <h2 className="text-4xl font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
                  {names.name}
                </h2>
              ))}

              {dept.map((names) => (
                <>
                  <div className="scene ml-20">
                    {names.names.map((name) => (
                      <>
                        <a href={name.link}>
                          <div className="flip">
                            <div className="front text-2xl">
                              <h1 className="text-shadow mt-20 ml-6">
                                {name.name}
                              </h1>
                            </div>
                            <div className="back text-2xl">
                              <h2 className="mt-14 ml-6">{name.name}</h2>
                            </div>
                          </div>
                        </a>
                      </>
                    ))}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Department;