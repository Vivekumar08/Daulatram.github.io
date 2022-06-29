import React from "react";
import Departments from "../../../../Components/Sidebar/Departments";
import Commercebanner from "../Commerce/Commercebanner.jsx";
import Commerce from "../../../../Components/DepartSIde/Commerce.jsx";
import publication_com from "../../../../Dummy_data/ImgPages/Commerce/Publications_com.pdf";

function Com_publications() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Commercebanner />
      </div>
      <div className="flex flex-row">
        <div className="w-[350px]">
          <Departments />
        </div>
        <div>
          <div className="w-[1100px]">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Publications
            </h2>
          </div>
          <div className="flex flex-row justify-between ">
            <div class="wrapper2  mt-5 mb-5">
              <div class="card1">
                <div className="">
                  <span className=" text-2xl font-bold">Publications</span>
                </div>
                <div class="info">
                  <h1 className="font-bold">Description</h1>
                  <p>
                    1. Awards
                    <br />
                    2. Publications
                    <br />
                  </p>
                  <br />
                  <a href={publication_com}>
                    <button>View</button>
                    <br />
                  </a>
                  <br />
                </div>
              </div>
            </div>
            <div className=" flex  flex-col   mt-4">
              <Commerce />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Com_publications;
