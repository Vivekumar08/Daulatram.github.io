import React, { useState } from "react";
import PolScibanner from "./PolScibanner";
import Political_Science from "../../../../Components/DepartSIde/Political_Science";
import { Pol_Sci_fac_info } from "../Fac_info";
const Pol_Sci_fac = () => {
  const [Info, setFac_info] = useState( Pol_Sci_fac_info);

  return (
    <>
      <div className=" flex flex-col">
        <div className="">
          <PolScibanner />


        </div>
        <div className="flex flex-row">
          <div className="ml-2 mt-12">
            <Political_Science/>
          </div>
          <div className=" ml-5 w-full">
            <div className="  ">
              <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
                Faculty
              </h2>
            </div>
            <div className="  ">
              <h2 className="text-2xl uppercase font-bold m-1 flex  items-center ">
                Political Science Faculty
              </h2>
            </div>
            {Info.map((currElem) => {
              const { id, Fac_name, Designation, filter, img, cv } = currElem;
              return (
                <>
                  {filter == "Current" && (
                    <>
                      <div class="first fac ">
                        <img class="Fac-img" src={img} alt="" />
                        <div class="fac-description-bk"></div>

                        <div class="Fac-description">
                          <p>{Fac_name}</p>
                          <p className="font-medium"> {Designation}</p>
                        </div>

                        <a href={cv}>
                          <div class="fac-btn">View CV</div>
                        </a>
                      </div>
                    </>
                  ) }
                
                </>
              );
            })}
            <div className="  ">
              {/* <h2 className="text-2xl uppercase font-bold m-1 mt-5 flex  items-center ">
                Superannuated Faculty
              </h2> */}
            </div>
            {Info.map((currElem) => {
              const { id, Fac_name, Designation, filter, img, cv } = currElem;
              return (
                <>
                  {filter=="Superannuated" && (
                    <>
                      <div class="first fac ">
                        <img class="Fac-img" src={img} alt="" />
                        <div class="fac-description-bk"></div>

                        <div class="Fac-description">
                          <p>{Fac_name}</p>
                          <p className="font-medium"> {Designation}</p>
                        </div>

                        <a href={cv}>
                          <div class="fac-btn">View CV</div>
                        </a>
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

export default Pol_Sci_fac;

