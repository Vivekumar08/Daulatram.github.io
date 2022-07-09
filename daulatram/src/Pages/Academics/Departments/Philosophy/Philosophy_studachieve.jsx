import React from "react";
import Philosophybanner from "../Philosophy/Philosophybanner.jsx";
import Philosophy from "../../../../Components/DepartSIde/Philosophy";
import studachieve from "../../../../Dummy_data/ImgPages/Philosophy/Students_Achievements.pdf"
import studcorner from "../../../../Dummy_data/ImgPages/Philosophy/Students_Corner.pdf"
import studplacement from "../../../../Dummy_data/ImgPages/Philosophy/Students_Placement.pdf"

function Philosophy_studachieve() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Philosophybanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col mt-12 ml-2">
          <Philosophy />
        </div>
        <div className="mr-auto ml-auto">
          <div className="w-full mr-16">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-16 flex flex-row justify-center items-center ">
              Students Achievements
            </h2>

            <div className="flex flex-row">
              <div class="wrapper2 mt-5 mb-5">
                <div class="card2">
                  <div className="">
                    <span className=" text-2xl font-bold ml-8">
                      Achievements
                    </span>
                  </div>
                  <div class="info">
                    <h1 className="font-bold flex justify-center">
                      Description
                    </h1>
                    <p className="flex justify-centers">
                      Students's Achievements
                    </p>
                    <br />
                    <a href={studachieve}>
                      <button className="w-full">View</button>
                    </a>
                    <br />
                  </div>
                </div>
                <div class="card2">
                  <span className=" text-2xl font-bold ml-8">
                    Students' Corner
                  </span>
                  <div class="info">
                    <h1 className="font-bold flex justify-center ">
                      Description
                    </h1>
                    <p className="flex justify-center">
                    Students' Corner
                    </p>
                    <br />
                    <a href={studcorner}>
                      <button className="w-full">View</button>
                    </a>
                    <br />
                  </div>
                </div>
                <div class="card2">
                  <div className="flex flex-col">
                    <div>
                      <span className=" text-2xl font-bold ml-4 ">
                        Students' Placements
                        <br />
                      </span>
                    </div>
                  </div>
                  <div class="info">
                    <h1 className="font-bold flex justify-center">
                      Description
                    </h1>
                    <p className="flex justify-center">
                      Placements
                    </p>

                
                    <br />
                    <a href={studplacement}>
                      <button className="w-full">View</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Philosophy_studachieve;
