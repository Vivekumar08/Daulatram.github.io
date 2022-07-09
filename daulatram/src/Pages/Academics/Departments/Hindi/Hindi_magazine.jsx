import React from "react";
import Hindibanner from "../Hindi/Hindibanner.jsx";
import Hindi from "../../../../Components/DepartSIde/Hindi.jsx";
import mansi_2019_20 from "../../../../Dummy_data/ImgPages/Hindi/Mansi_2019_20.pdf";
import mansi_2020_21 from "../../../../Dummy_data/ImgPages/Hindi/Mansi_2020_2021.pdf";

function Hindi_magazine() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Hindibanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col mt-12 ml-2">
          <Hindi />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Magazines & Newsletter
          </h2>
          <div className="flex flex-col">
            <div class="wrapper2 mt-5 mb-5">
              <div class="card2">
                <div className="">
                  <span className=" text-2xl font-bold ml-16">
                  2019-20
                  </span>
                </div>
                <div class="info">
                  <h1 className="font-bold flex justify-center">Description</h1>
                  <p className="flex justify-center">
                  Mansi Magazine 
                  </p>
                  <br />
                  <br />
                  <a href={mansi_2019_20}>
                    <button className="w-full">View</button>
                  </a>
                </div>
              </div>
              <div class="card2">
                <span className=" text-2xl font-bold ml-16">
2020-21
                </span>
                <div class="info">
                  <h1 className="font-bold flex justify-center ">Description</h1>
                  <p classname="flex justify-center">
                    Mansi Magazine 
                  </p>
<br /><br />

                  <a href={mansi_2020_21}>
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

export default Hindi_magazine;
