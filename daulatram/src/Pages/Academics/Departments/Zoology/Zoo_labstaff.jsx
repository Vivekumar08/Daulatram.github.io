import React, { useState } from "react";
import ajay from "../../../../Dummy_data/ImgPages/Zoology/Ajay_Zoology.pdf";
import amar from "../../../../Dummy_data/ImgPages/Zoology/Amar_Zoology.pdf";
import anil from "../../../../Dummy_data/ImgPages/Zoology/Anil_Zoology.pdf";
import mukesh from "../../../../Dummy_data/ImgPages/Zoology/Mukesh_Zoology.pdf";
import pardeep from "../../../../Dummy_data/ImgPages/Zoology/Pardeep_Zoology.pdf";
import puneet from "../../../../Dummy_data/ImgPages/Zoology/Puneet_Zoology.pdf";
import vikas from "../../../../Dummy_data/ImgPages/Zoology/Vikas_Zoology.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import Zoobanner from "./Zoobanner";
import Zoology from "../../../../Components/DepartSIde/Zoology";

function Zoo_labstaff() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <Zoobanner />
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
                <Zoology />
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
          <Zoology />
        </div>

        <div className=" w-full ">
          <h2 className="md:text-4xl text-xl sm:text-xl uppercase font-bold mb-5 mt-[7%] flex flex-row ml-3 md:justify-center items-center  ">
            Laboratory Staff
          </h2>
          <div className="flex mt-5 justify-center ml-5 mr-5">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:text-base md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 text-sm gap-2 md:gap-5  ">
                <a
                  href={ajay}
                  className=" mr-2 bg-blue-900 md:w-[215px] w-[140px] rounded-lg p-2 pr-8 pl-8 flex flex-col justify-center items-center mb-2 mt-2 text-white hover:bg-blue-600"
                >
                  <span>Ajay Kumar</span>
                  <span>(View CV)</span>
                </a>
                <a
                  href={amar}
                  className=" mr-2 bg-blue-900 md:w-[215px] w-[140px] rounded-lg p-2 pr-8 pl-8 flex flex-col justify-center items-center mb-2 mt-2 text-white hover:bg-blue-600"
                >
                  <span>Amar Singh Gurung</span>
                  <span>(View CV)</span>
                </a>
                <a
                  href={anil}
                  className=" mr-2 bg-blue-900 md:w-[215px] w-[140px] rounded-lg p-2 pr-8 pl-8 flex flex-col justify-center items-center mb-2 mt-2 text-white hover:bg-blue-600"
                >
                  <span>Anil</span>
                  <span>(View CV)</span>
                </a>
                <a
                  href={mukesh}
                  className=" mr-2 bg-blue-900 md:w-[215px] w-[140px] rounded-lg p-2 pr-8 pl-8 flex flex-col justify-center items-center mb-2 mt-2 text-white hover:bg-blue-600"
                >
                  <span>Mukesh</span>
                  <span>(View CV)</span>
                </a>
                <a
                  href={pardeep}
                  className=" mr-2 bg-blue-900 md:w-[215px] w-[140px] rounded-lg p-2 pr-8 pl-8 flex flex-col justify-center items-center mb-2 mt-2 text-white hover:bg-blue-600"
                >
                  <span>PardeepKumar</span>
                  <span>(View CV)</span>
                </a>
                <a
                  href={puneet}
                  className=" mr-2 bg-blue-900 md:w-[215px] w-[140px] rounded-lg p-2 pr-8 pl-8 flex flex-col justify-center items-center mb-2 mt-2 text-white hover:bg-blue-600"
                >
                  <span>Puneet Kumar</span>
                  <span>(View CV)</span>
                </a>
                <a
                  href={vikas}
                  className=" mr-2 bg-blue-900 md:w-[215px] w-[140px] rounded-lg p-2 pr-8 pl-8 flex flex-col justify-center items-center mb-2 mt-2 text-white hover:bg-blue-600"
                >
                  <span>Vikas</span>
                  <span>(View CV)</span>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zoo_labstaff;
