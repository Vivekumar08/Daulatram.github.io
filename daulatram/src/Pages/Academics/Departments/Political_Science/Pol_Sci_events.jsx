import React, { useState } from "react";
import PolScibanner from "./PolScibanner";
import Political_Science from "../../../../Components/DepartSIde/Political_Science";
import { Pol_Sci_fac_info } from "../Political_Science/event_info";
const Pol_Sci_events = () => {
  const [Info, setFac_info] = useState(Pol_Sci_fac_info);

  return (
    <>
      <div className=" flex flex-col">
        <div className="">
          <PolScibanner />
        </div>
        <div className="flex flex-row">
          <div className="ml-2 mt-12">
            <Political_Science />
          </div>
          <div className=" ml-5 w-full">
            <div className="  ">
              <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
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
