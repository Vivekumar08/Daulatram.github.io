import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import PolScibanner from "./PolScibanner";
import Political_Science from "../../../../Components/DepartSIde/Political_Science";
import { Pol_Sci_fac_info } from "../Political_Science/event_info";
const Pol_Sci_events = () => {
  const [Info, setFac_info] = useState(Pol_Sci_fac_info);
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className=" flex flex-col">
        <div className="">
          <PolScibanner />
        </div>
        <div className="flex flex-row">
          <div className="md:hidden">
            {visible ? (
              <>
                <div className=" flex  flex-col mt-8 ml-2">
                  <FontAwesomeIcon
                    icon={faClose}
                    size="lg"
                    onClick={() => setVisible(!visible)}
                    className=" border-2  border-[#000080] mr-2 hover:text-black text-white  rounded-lg p-2 cursor-pointer hover:bg-white bg-[#000080]"
                  />
                  <Botany />
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
          <div className="w-[250px]  md:flex hidden md:flex-col mt-12 ml-2 ">
            <Political_Science />
          </div>
          <div className=" ml-5 w-full">
            <div className="  ">
              <h2 className="md:text-4xl text-xl sm:text-xl uppercase font-bold mb-5 mt-[7%] flex flex-row ml-3 md:justify-center items-center  ">
                Events
              </h2>
            </div>

            {Info.map((currElem) => {
              const { id, event_name, img, doc } = currElem;
              return (
                <>
                  <div className="flex justify-center">
                    <div class="first fac1 ">
                      <img class="Fac-img" src={img} alt="" />
                      <div class="fac-description-bk"></div>

                      <div class="Fac-description">
                        <p>{event_name}</p>
                      </div>

                      <a href={doc}>
                        <div class="fac-btn">View CV</div>
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
            <div>
              <h2 className="text-2xl ml-4 mt-5 font-bold mb-3">
                Face Yoga Event with Mansi 2020
              </h2>
              {/* </div> */}
              {/* <div class="box"> */}
              <div class="carousel">
                <div class="carousel__item">
                  <img
                    src="/images/ImgPages/Political_Science/face1.jpeg"
                    className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                  />
                </div>
                <div class="carousel__item">
                  <img
                    src="/images/ImgPages/Political_Science/face2.jpeg"
                    className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                  />
                </div>
                <div class="carousel__item">
                  <img
                    src="/images/ImgPages/Political_Science/face3.jpeg"
                    className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                  />
                </div>
                <div class="carousel__item">
                  <img
                    src="/images/ImgPages/Political_Science/face4.jpeg"
                    className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                  />
                </div>
                <div class="carousel__item">
                  <img
                    src="/images/ImgPages/Political_Science/face5.jpeg"
                    className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                  />
                </div>
                <div class="carousel__item">
                  <img
                    src="/images/ImgPages/Political_Science/face6.jpeg"
                    className="  mt-[3%]   w-[450px] h-[370px] rounded-2xl border-2 border-black"
                  />
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pol_Sci_events;
