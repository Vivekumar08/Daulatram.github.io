import React, { useState } from "react";
import DepartBanner from "../../../../Components/Banners/DepartBanner";
import Botany from "../../../../Components/DepartSIde/Botany";
import Botanybanner from "../Botany/Botanybanner.jsx";

import { Bot_association_info } from "../Fac_info";
const Bot_Lab_Staff = () => {
  const [Info, setFac_info] = useState(Bot_association_info);

  return (
    <>
      <div className=" flex flex-col">
        <div className="">
          <DepartBanner />
        </div>
        <div className="flex flex-row">
          <div className="ml-2 mt-12">
            <Botany />
          </div>
          <div className=" ml-5 w-full">
            <div className="  ">
              <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
                Laboratory Staff
              </h2>
            </div>

            {Info.map((currElem) => {
              const { id, Fac_name,filter, Designation, img, Date_of_joining } = currElem;
              return (
                <>
                  {filter== "Current" && (
                    <>
                      <div class="first1 fac1 " key={id}>
                        <img class="Fac-img1" src={img} alt="" />
                        <div class="fac-description-bk"></div>

                        <div class="Fac-description1">
                          <p>{Fac_name}</p>
                          <p className="font-medium"> {Designation}</p>
                          <p>{Date_of_joining}</p>
                        </div>
                      </div>
                    </>
                  )}
                </>
              );
            })}
            {/* <div className="  ">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Superannuated Laboratory Staff
            </h2>
          </div> */}
            {Info.map((currElem) => {
              const { id, Fac_name,filter, Designation, img, Date_of_joining } = currElem;
              return (
                <>
                  {filter== "Superannuated" && (
                    <>
                      <div class="first1 fac1 " key={id}>
                        <img class="Fac-img1" src={img} alt="" />
                        <div class="fac-description-bk"></div>

                        <div class="Fac-description1">
                          <p>{Fac_name}</p>
                          <p className="font-medium"> {Designation}</p>
                          <p>{Date_of_joining}</p>
                        </div>
                      </div>
                    </>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bot_Lab_Staff;
