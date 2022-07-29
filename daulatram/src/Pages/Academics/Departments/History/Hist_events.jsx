import React, { useState } from "react";
import Histbanner from "../History/Histbanner.jsx";
import History from "../../../../Components/DepartSIde/History.jsx";
import history_event from "../../../../Dummy_data/ImgPages/History/History_events.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Hist_events() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <Histbanner />
      </div>
      <div className="flex flex-row">
        <div className="md:hidden lg:hidden absolute bg-white">
          {visible ? (
            <>
              <div className=" flex  flex-col mt-8 ml-2">
                <FontAwesomeIcon
                  icon={faClose}
                  size="2xl"
                  onClick={() => setVisible(!visible)}
                  className=" border-2  border-[#000080] mr-2 hover:text-black text-white  rounded-2xl p-2 cursor-pointer hover:bg-white bg-[#000080]"
                />
                <History />
              </div>
            </>
          ) : (
            <div className=" flex  flex-col mt-8 ml-2">
              <FontAwesomeIcon
                icon={faBars}
                size="2xl"
                onClick={() => setVisible(!visible)}
                className="text-black border-2 border-[#000080] mr-2 hover:text-white bg-[#fff] rounded-2xl p-2 cursor-pointer hover:bg-[#000080]"
              />
            </div>
          )}
        </div>
        <div className=" md:flex hidden md:flex-col mt-12 ml-2">
          <History />
        </div>
        <div className="w-full mr-16">
          <h2 className="md:text-3xl text-xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center ml-4 items-center ">
            Events
          </h2>

          <div className="flex flex-col">
            <div className="flex flex-row">
              <div>
                <div className="pr-3 pl-3 flex mr-1 ml-5">
                  <span className="md:text-xl text-2xl underline text-justify font-bold mb-2 mt-3">
                    2017-18
                  </span>
                </div>

                {/* </div> */}
                <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 2xl:grid-cols-2  w-full mt-5 mb-5">
                  <div
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/History/symposium.jpg)",
                    }}
                    className="bg-center ml-16 mr-auto  2xl:w-[550px] 2xl-h[400px] xl:w-[440px] xl:h-[350px] lg:w-[330px] lg:h[310px] md:w-[390px] md:h-[270px] sm:w-[390px] sm:h-[260px] w-[350px] h-[250px]   bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  ></div>

                  <div
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/History/symposium_2.jpg)",
                    }}
                    className="bg-center ml-16 mr-auto  2xl:w-[550px] 2xl-h[400px] xl:w-[440px] xl:h-[350px] lg:w-[330px] lg:h[310px] md:w-[390px] md:h-[270px] sm:w-[390px] sm:h-[260px] w-[350px] h-[250px]  bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  ></div>
                </div>
                {/* </div>
              <div> */}
                <div className="pr-3 pl-3 flex mr-1 ml-5">
                  <span className="md:text-xl text-2xl underline text-justify font-bold mb-2 mt-3">
                    2018-19
                  </span>
                </div>

                {/* </div> */}
                <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 2xl:grid-cols-2  w-full mt-5 mb-5">
                  <img
                    src="/images/ImgPages/History/2019_event_1.jpg"
                    style={{}}
                    className="bg-center ml-16 mr-auto  2xl:w-[550px] 2xl-h[400px] xl:w-[440px] xl:h-[350px] lg:w-[330px] lg:h[310px] md:w-[390px] md:h-[270px] sm:w-[390px] sm:h-[260px] w-[350px] h-[250px]  bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  />
                  <img
                    src="/images/ImgPages/History/2019_event_2.jpg"
                    className="bg-center ml-16 mr-auto  2xl:w-[550px] 2xl-h[400px] xl:w-[440px] xl:h-[350px] lg:w-[330px] lg:h[310px] md:w-[390px] md:h-[270px] sm:w-[390px] sm:h-[260px] w-[350px] h-[250px]  bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  />
                </div>
                <div className="pr-3 pl-3 flex mr-1 ml-5">
                  <span className="md:text-xl text-2xl underline text-justify font-bold mb-2 mt-3">
                    2019-20
                  </span>
                </div>

                {/* </div> */}
                <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 2xl:grid-cols-2  w-full mt-5 mb-5">
                  <img
                    src="/images/ImgPages/History/Art_History.jpg"
                    className="bg-center ml-16 mr-auto  2xl:w-[550px] 2xl-h[400px] xl:w-[440px] xl:h-[350px] lg:w-[330px] lg:h[310px] md:w-[390px] md:h-[270px] sm:w-[390px] sm:h-[260px] w-[350px] h-[250px]  bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  />
                  <img
                    src="/images/ImgPages/History/Michelangelo.jpg"
                    className="bg-center ml-16 mr-auto  2xl:w-[550px] 2xl-h[400px] xl:w-[440px] xl:h-[350px] lg:w-[330px] lg:h[310px] md:w-[390px] md:h-[270px] sm:w-[390px] sm:h-[260px] w-[350px] h-[250px]  bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  />
                  <img
                    src="/images/ImgPages/History/Nomenclature.jpeg"
                    className="bg-center ml-16 mr-auto  2xl:w-[550px] 2xl-h[400px] xl:w-[440px] xl:h-[350px] lg:w-[330px] lg:h[310px] md:w-[390px] md:h-[270px] sm:w-[390px] sm:h-[260px] w-[350px] h-[250px]  bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  />
                  <img
                    src="/images/ImgPages/History/Nomenclature2.jpeg"
                    className="bg-center ml-16 mr-auto  2xl:w-[550px] 2xl-h[400px] xl:w-[440px] xl:h-[350px] lg:w-[330px] lg:h[310px] md:w-[390px] md:h-[270px] sm:w-[390px] sm:h-[260px] w-[350px] h-[250px]  bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  />
                  <img
                    src="/images/ImgPages/History/Subramaniam.jpeg"
                    className="bg-center ml-16 mr-auto  2xl:w-[550px] 2xl-h[400px] xl:w-[440px] xl:h-[350px] lg:w-[330px] lg:h[310px] md:w-[390px] md:h-[270px] sm:w-[390px] sm:h-[260px] w-[350px] h-[250px]  bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  />
                  <img
                    src="/images/ImgPages/History/Vijayanagar.jpeg"
                    className="bg-center ml-16 mr-auto  2xl:w-[550px] 2xl-h[400px] xl:w-[440px] xl:h-[350px] lg:w-[330px] lg:h[310px] md:w-[390px] md:h-[270px] sm:w-[390px] sm:h-[260px] w-[350px] h-[250px]  bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  />
                </div>
              </div>
            </div>
            <div className="pr-3 pl-3 flex mr-1 ml-5">
              <span className="md:text-xl text-2xl underline text-justify font-bold mb-2 mt-3">
                2021-22
              </span>
            </div>
            <div className="flex justify-start ml-6">
              <a href={history_event} target="_blank">
                <span className=" mr-2 bg-blue-900 rounded-2xl p-2 pr-8 pl-8 flex flex-col justify-center items-center mb-2 mt-2 text-white hover:bg-blue-600">
                  <span>History Association Annual Report </span>
                  <span>(Click here)</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hist_events;
