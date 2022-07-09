import React from "react";
import Histbanner from "../History/Histbanner.jsx";
import History from "../../../../Components/DepartSIde/History.jsx";
import history_event from "../../../../Dummy_data/ImgPages/History/History_events.pdf";
function Hist_events() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Histbanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col mt-12 ml-2">
          <History />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Events
          </h2>

          <div className="flex flex-col">
            <div className="flex flex-row">
              <div>
                <div className="pr-3 pl-3 flex mr-1 ml-5">
                  <span className="text-xl underline text-justify font-bold mb-2 mt-3">
                    2017-18
                  </span>
                </div>

                {/* </div> */}
                <div className="flex gap-10 ml-5">
                  <div
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/History/symposium.jpg)",
                      width: "550px",
                      height: "400px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-3 mb-4 rounded-3xl border-2 border-black"
                  ></div>
                  <div
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/History/symposium_2.jpg)",
                      width: "550px",
                      height: "400px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-3 mb-4 rounded-3xl border-2 border-black"
                  ></div>
                </div>
                {/* </div>
              <div> */}
                <div className="pr-3 pl-3 flex mr-1 ml-5">
                  <span className="text-xl underline text-justify font-bold mb-2 mt-3">
                    2018-19
                  </span>
                </div>

                {/* </div> */}
                <div className="flex gap-10 ml-5">
                  <img
                    src="/images/ImgPages/History/2019_event_1.jpg"
                    style={{
                      width: "550px",
                      height: "400px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-3 mb-4 rounded-3xl border-2 border-black"
                  />
                  <img
                    src="/images/ImgPages/History/2019_event_2.jpg"
                    style={{
                      width: "550px",
                      height: "400px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-3 mb-4 rounded-3xl border-2 border-black"
                  />
                </div>
                <div className="pr-3 pl-3 flex mr-1 ml-5">
                  <span className="text-xl underline text-justify font-bold mb-2 mt-3">
                    2019-20
                  </span>
                </div>

                {/* </div> */}
                <div className="flex gap-10 ml-5">
                  <img
                    src="/images/ImgPages/History/Art_History.jpg"
                    style={{
                      width: "550px",
                      height: "400px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-3 mb-4 rounded-3xl border-2 border-black"
                  />
                  <img
                    src="/images/ImgPages/History/Michelangelo.jpg"
                    style={{
                      width: "550px",
                      height: "400px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-3 mb-4 rounded-3xl border-2 border-black"
                  />
                </div>
                <div className="flex gap-10 ml-5">
                  <img
                    src="/images/ImgPages/History/Nomenclature.jpeg"
                    style={{
                      width: "550px",
                      height: "400px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-3 mb-4 rounded-3xl border-2 border-black"
                  />
                  <img
                    src="/images/ImgPages/History/Nomenclature2.jpeg"
                    style={{
                      width: "550px",
                      height: "400px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-3 mb-4 rounded-3xl border-2 border-black"
                  />
                </div>
                <div className="flex gap-10 ml-5">
                  <img
                    src="/images/ImgPages/History/Subramaniam.jpeg"
                    style={{
                      width: "550px",
                      height: "400px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-3 mb-4 rounded-3xl border-2 border-black"
                  />
                  <img
                    src="/images/ImgPages/History/Vijayanagar.jpeg"
                    style={{
                      width: "550px",
                      height: "400px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-3 mb-4 rounded-3xl border-2 border-black"
                  />
                </div>
              </div>
            </div>
            <div className="pr-3 pl-3 flex mr-1 ml-5">
              <span className="text-xl underline text-justify font-bold mb-2 mt-3">
                2021-22
              </span>
            </div>
            <div className="flex justify-start ml-6">
              <a href={history_event} target="_blank">
                <span className=" mr-2 bg-blue-900 rounded-lg p-2 pr-8 pl-8 flex flex-col justify-center items-center mb-2 mt-2 text-white hover:bg-blue-600">
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
