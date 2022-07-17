import React from "react";
import Student_side from "../../Components/Sidebar/Student_side";
import "./Eresources.css";
import Eresourcesbanner from "../../Components/Banners/Eresourcesbanner";

const Eresources = () => {
  return (
    <>
      <div className="">
        {/* <Studentfacbanner/> */}
        <Eresourcesbanner />
      </div>

      <div className="flex ">
        <div className="w-[350px] flex flex-row">
          <Student_side />
        </div>
        <div className="w-[1100px]">
          <h2 className=" text-3xl md:text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            <span className="lowercase">e</span> -Resources
          </h2>

          <div className=" md:ml-16 card-description leading-14 font-medium text-justify text-base md:text-2xl">
            <li className="res">
              <a href=" https://swayam.gov.in/"> Swayam Portal</a>
            </li>
            <li className="res">
              <a href="https://www.inflibnet.ac.in/"> Inflibnet</a>
            </li>

            <li className="res">
              <a href=" http://crl.du.ac.in/subjectportal/">DUCC Library</a>
            </li>

            <li className="res">
              <a href="https://epgp.inflibnet.ac.in/">e-Pathshala</a>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eresources;
