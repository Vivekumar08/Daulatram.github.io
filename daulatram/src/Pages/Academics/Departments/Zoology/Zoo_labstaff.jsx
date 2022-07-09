import React from "react";
import ajay from "../../../../Dummy_data/ImgPages/Zoology/Ajay_Zoology.pdf";
import amar from "../../../../Dummy_data/ImgPages/Zoology/Amar_Zoology.pdf";
import anil from "../../../../Dummy_data/ImgPages/Zoology/Anil_Zoology.pdf";
import mukesh from "../../../../Dummy_data/ImgPages/Zoology/Mukesh_Zoology.pdf";
import pardeep from "../../../../Dummy_data/ImgPages/Zoology/Pardeep_Zoology.pdf";
import puneet from "../../../../Dummy_data/ImgPages/Zoology/Puneet_Zoology.pdf";
import vikas from "../../../../Dummy_data/ImgPages/Zoology/Vikas_Zoology.pdf";

import Zoobanner from "./Zoobanner";
import Zoology from "../../../../Components/DepartSIde/Zoology";

function Zoo_labstaff() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Zoobanner />
      </div>
      <div className="flex flex-row">
       
         <div className=" flex  flex-col mt-12 ml-2  ">
              <Zoology/>
            </div>
        
        <div className=" w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center">
            Laboratory Staff
          </h2>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row w-full justify-center gap-4 mt-16 ">
              <a href={ajay}>
                <span className=" mr-2 bg-blue-900 w-[250px] rounded-lg p-2 pr-8 pl-8 flex flex-col justify-center items-center mb-2 mt-2 text-white hover:bg-blue-600">
                  <span>Ajay Kumar</span>
                  <span>(View CV)</span>
                </span>
              </a>
              <a href={amar}>
                <span className=" mr-2 bg-blue-900 w-[250px] rounded-lg p-2 pr-8 pl-8 flex flex-col justify-center items-center mb-2 mt-2 text-white hover:bg-blue-600">
                  <span>Amar Singh Gurung</span>
                  <span>(View CV)</span>
                </span>
              </a>
              <a href={anil}>
                <span className=" mr-2 bg-blue-900 w-[250px] rounded-lg p-2 pr-8 pl-8 flex flex-col justify-center items-center mb-2 mt-2 text-white hover:bg-blue-600">
                  <span>Anil</span>
                  <span>(View CV)</span>
                </span>
              </a>
              <a href={mukesh}>
                <span className=" mr-2 bg-blue-900 w-[250px] rounded-lg p-2 pr-8 pl-8 flex flex-col justify-center items-center mb-2 mt-2 text-white hover:bg-blue-600">
                  <span>Mukesh</span>
                  <span>(View CV)</span>
                </span>
              </a></div>
              </div>
              <div className="flex flex-row justify-between">
              <div className="flex flex-row w-full justify-center gap-4 mt-8 ">
              <a href={pardeep}>
                <span className=" mr-2 bg-blue-900 w-[250px] rounded-lg p-2 pr-8 pl-8 flex flex-col justify-center items-center mb-2 mt-2 text-white hover:bg-blue-600">
                  <span>PardeepKumar</span>
                  <span>(View CV)</span>
                </span>
              </a>
              <a href={puneet}>
                <span className=" mr-2 bg-blue-900 w-[250px] rounded-lg p-2 pr-8 pl-8 flex flex-col justify-center items-center mb-2 mt-2 text-white hover:bg-blue-600">
                  <span>Puneet Kumar</span>
                  <span>(View CV)</span>
                </span>
              </a>
              <a href={vikas}>
                <span className=" mr-2 bg-blue-900 w-[250px] rounded-lg p-2 pr-8 pl-8 flex flex-col justify-center items-center mb-2 mt-2 text-white hover:bg-blue-600">
                  <span>Vikas</span>
                  <span>(View CV)</span>
                </span>
              </a>





            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Zoo_labstaff;
