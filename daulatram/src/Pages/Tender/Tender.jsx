import React, { useState } from "react";
import {Link}  from "react-router-dom";
import { Latest_Tenfo } from "./Ten_info";
import { Old_Tenfo } from "./Ten_info";

const Tender = () => {
  const [info, setInfo] = useState(Latest_Tenfo);
  const [old_info, setOld_Info] = useState(Old_Tenfo);
  return (
    <>
      <div
          className="Banner"
          style={{ backgroundImage: "url(/images/img1.jpeg)" }}
        >
          <div className="name">
            <div className="flex flex-row justify-center">
              <p className="  text-[#fff] text-6xl  mt-12 font-bold  p-5 flex justify-center w-full rounded-md  ">
                Tenders{" "}
              </p>
            </div>

            <div className=" bg-gray-400 pt-3 pb-3 pl-5 text-lg text-[#000080] mt-28 ">
              <Link to={"/"}>
                <span className="ml-5">Home</span>
              </Link>
            </div>
          </div>
        </div>
      <div className="flex flex-col mb-5 ml-8 gap-3">
        <h2 className="text-4xl uppercase font-bold mb-5 mt-5 flex flex-row justify-start items-center ">
          Latest Tenders
        </h2>
        {info.map((curElem) => (
          <a
            href=""
            target="_blank"
            key={curElem.id}
            className="text-lg hover:text-[#000080] hover:font-semibold"
          >
            {" "}
            {curElem.name}{" "}
            {curElem.label == "true" && (
              <sup className="font-extrabold text-transparent  bg-clip-text text-lg bg-gradient-to-r from-red-600 to-fuchsia-600 animate-text">
                new
              </sup>
            )}
          </a>
        ))}
      </div>
      <div className="flex flex-col mb-5 gap-3 ml-8">
        <h2 className="text-4xl uppercase font-bold mb-5 mt-5 flex flex-row justify-start items-center ">
          Old Tenders
        </h2>
        {old_info.map((curElem) => (
          <li className="list-decimal" key={curElem.id}>
            <a
              href=""
              
              className="text-lg hover:text-[#000080] hover:font-semibold"
            >
              {" "}
              {curElem.name}{" "}
              {curElem.label == "true" && (
                <sup className="font-extrabold text-transparent  bg-clip-text text-lg bg-gradient-to-r from-red-600 to-fuchsia-600 animate-text">
                  new
                </sup>
              )}
            </a>
          </li>
        ))}
      </div>
    </>
  );
};

export default Tender;
