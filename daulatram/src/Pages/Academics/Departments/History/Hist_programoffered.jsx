import React from "react";

import Histbanner from "../History/Histbanner.jsx";
import History from "../../../../Components/DepartSIde/History.jsx";
import bahonshist from "../../../../Dummy_data/ImgPages/History/Bahonshistory.pdf"
import baproghist from "../../../../Dummy_data/ImgPages/History/baproghistory.pdf"
import progoffer from "../../../../Dummy_data/ImgPages/History/historyprogoffer.pdf"


function Hist_programoffered() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Histbanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col ml-2 mt-12">
          <History />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Program Offered
          </h2>

          <div className="flex flex-row">
            <div class="wrapper2 mt-5 mb-5">
              <div class="card2">
                <div className="">
                  <span className=" text-2xl ml-2 font-bold">
                    BA (Hons) History
                  </span>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p className="flex justify-center">Syllabus</p>
                  <br />

                  <a href={bahonshist}>
                    <button className="w-full">View</button>
                  </a>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
              <div class="card2">
                <span className=" text-2xl ml-12 font-bold">BA (Prog) History</span>
                <div class="info">
                  <h1 className="font-bold  flex justify-center ">
                    Description
                  </h1>
                  <p className="flex justify-center">Syllabus</p>
                  <br />
                  <a href={baproghist}>
                    <button className="w-full">View</button>
                  </a>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
              <div class="card2">
                <div className="flex flex-col">
                  <div>
                    <span className=" text-2xl ml-7 font-bold ">
                    History Program Offered
                      <br />
                    </span>
                  </div>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p className="flex justify-center">Programs</p>
                  <br />
                  <a href={progoffer}>
                    <button className="w-full">View</button>
                  </a>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hist_programoffered;
