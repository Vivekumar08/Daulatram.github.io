import React from "react";
import DepartBanner from "../../../../Components/Banners/DepartBanner";
import Departments from "../../../../Components/Sidebar/Departments";
import "./research.css";
import grant from "../../../../Dummy_data/ImgPages/Biochemistry/Grant.pdf";
import resource from "../../../../Dummy_data/ImgPages/Biochemistry/resource_centers.pdf";
import zebrafish from "../../../../Dummy_data/ImgPages/Biochemistry/Zebrafish_lab.pdf";
import Biochemistry from "../../../../Components/DepartSIde/Biochemistry";
function Research_facilities() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <DepartBanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col mt-12 ml-2 ">
          <Biochemistry />
        </div>
        <div className=" ml-auto mr-auto">
          <div className="w-full ml-2">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Research & Facilities
            </h2>
          </div>
          <div className="flex flex-row">
            <div>
              <div class="wrapper2 mt-5 mb-5">
                <div class="card1">
                  <div className="flex flex-row">
                    <div>
                      <span className=" text-2xl font-bold mr-5">
                        Zebrafish Lab Facilities <br />
                      </span>
                    </div>
                  </div>
                  <div class="info ">
                    <h1 className="font-bold flex justify-center">Description</h1>
                    <p className="flex text-justify">
                      The aim of providing an alternative in vivo non –invasive
                      model system for science education, teaching and research.
                    </p>
                    <br />
                    <a href={zebrafish}>
                      <button className="w-full">View</button>
                    </a>
                    <br />
                  </div>
                </div>
                <div class="card1">
                  <div className="">
                    <span className=" text-2xl font-bold">
                      Resources Centers & Resource Facilities
                    </span>
                  </div>
                  <div class="info">
                    <h1 className="font-bold flex justify-center">Description</h1>
                    <p className="flex text-justify">
                      1.The Bioinformatics Center
                      <br />
                      2.Drosophila Resource Center
                      <br />
                      3.Campus Sustainability Center
                      <br />
                      4. Health Sustainability
                    </p>
                    <br />
                    <br />
                    <a href={resource}>
                      <button className="w-full">View</button>
                    </a>
                    <br />
                  </div>
                </div>
                <div class="card1">
                  <span className=" text-2xl font-bold">
                    Grant & Research Guidance
                  </span>
                  <div class="info">
                    <h1 className="font-bold flex justify-center ">Description</h1>
                    <p className=" flex text-justify">Star Innovation Project, Cluster Innovation Center, DU</p>
<br /><br /><br /><br />
                    <a href={grant}>
                      <button className="w-full">View</button>
                    </a>
                    <br />
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

export default Research_facilities;
