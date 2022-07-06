import React from "react";
import Philosophybanner from "../Philosophy/Philosophybanner.jsx";
import Philosophy from "../../../../Components/DepartSIde/Philosophy";
import baprogphiloso from "../../../../Dummy_data/ImgPages/Philosophy/BA_Hons_philosophy.pdf"
import bahonsphiloso from "../../../../Dummy_data/ImgPages/Philosophy/BA_Prog_philosophy.pdf"


function Philosophy_programoffered() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Philosophybanner />
      </div>
      <div className="flex flex-row">
      <div className=" flex  flex-col  ml-2 mt-12">
              <Philosophy />
        </div>
        <div className="w-full mr-auto ml-auto">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Program offered
          </h2>

          <div className="flex flex-col">
            <div class="wrapper2 mt-5 mb-5">
              <div class="card2">
                <div className="">
                  <span className=" text-2xl font-bold ml-2">
                    B.A (Hons) Philosophy
                  </span>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p className="flex justify-center">
                    Syllabus
                  </p>
                  <br />
                  <br />
                  <a href={bahonsphiloso}>
                    <button className="w-full">View</button>
                  </a>
                </div>
              </div>
              <div class="card2">
                <span className=" text-2xl font-bold">
                B.A (Hons) Philosophy
                </span>
                <div class="info">
                  <h1 className="font-bold flex justify-center ">Description</h1>
                  <p className="flex justify-center">
                    Syllabus
                  </p>
<br /><br />
                  <a href={baprogphiloso}>
                    <button className="w-full">View</button>
                  </a>
                </div>
              </div>
            </div>


            </div>
          </div>
            
      </div>
    </div>
  );
}

export default Philosophy_programoffered;
