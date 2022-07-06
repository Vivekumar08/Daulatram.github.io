import React, { useState } from "react";
import { StudentInfo } from "./Info";

const Bulletin = () => {
  // const [Studentinfo,setInfo] = useState(StudentInfo)
  return (
    <>
      <div className=" flex">
        <div className="name1 z-10  flex flex-row justify-center items-center  px-2">
          Bulletin
        </div>
        <div className="triangle z-10 bg-transparent "></div>
        <div className="bg-blue-200 h-8 absolute overflow-hidden w-full">
          <div className=" bg-blue-200 pt-1 w-full marquee ">
            <span className="">
              {StudentInfo.map((curElem) => {
                // const { id, info, link } = curElem;
                return (
                  <>
                    <a
                      href={curElem.link}
                      target="_blank"
                      rel="norefferer"
                      className="  ml-8 hover:font-semibold hover:text-green-600"
                    >
                      <span className=" text-sm ml-2 mr-2 ">
                        {curElem.info}
                      </span>
                    </a>
                  </>
                );
              })}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bulletin;
