import React from "react";
import Physicsbanner from "../Physics/Physicsbanner.jsx";
import Physics from "../../../../Components/DepartSIde/Physics";
import b2017_18 from "../../../../Dummy_data/ImgPages/Physics/4bDRC_Physics_newsletter_2017-18.pdf";
import b2018_19 from "../../../../Dummy_data/ImgPages/Physics/4cDRC_Physics_newsletter_2018-19.pdf";
import b2019_20 from "../../../../Dummy_data/ImgPages/Physics/4dDRC_Physics_newsletter_2019-20.pdf";
function Physics_news_magazines() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Physicsbanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col mt-12 ml-2">
          <Physics />
        </div>

        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5  mt-[5%] flex flex-row justify-center items-center ">
            Newsletters & Magazines
          </h2>

          <div className="flex flex-row">
            <div class="wrapper2 mt-5 mb-5">
              <div class="card2">
                <div className="">
                  <span className=" text-2xl font-bold ml-16">Luminex</span>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p className="flex text-justify">
                    Luminex Edition 1 (2017-18)
                  </p>
                  <br />
                  <a href={b2017_18}>
                    <button className="w-full">View</button>
                  </a>
                  <br />
                </div>
              </div>
              <div class="card2">
                <span className=" text-2xl font-bold ml-16">Luminex</span>
                <div class="info">
                  <h1 className="font-bold flex justify-center ">
                    Description
                  </h1>
                  <p className="flex text-justify">
                    Luminex Edition 2 (2018-19)
                  </p>
                  <br />
                  <a href={b2018_19}>
                    <button className="w-full">View</button>
                  </a>
                  <br />
                </div>
              </div>
              <div class="card2">
                <div className="flex flex-col">
                  <div>
                    <span className=" text-2xl font-bold ml-16">
                      Luminex
                      <br />
                    </span>
                  </div>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p className="flex text-justify">
                    Luminex Edition 3 (2019-20) 
                  </p>
                  <br />

                  
                  <a href={b2019_20}>
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

export default Physics_news_magazines;
