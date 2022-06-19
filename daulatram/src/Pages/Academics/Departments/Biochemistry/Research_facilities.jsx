import React from "react";
import DepartBanner from "../../../../Components/Banners/DepartBanner";
import Departments from "../../../../Components/Sidebar/Departments";
import "./research.css";
import grant from "../../../../Dummy_data/ImgPages/Biochemistry/Grant.pdf";
import resource from "../../../../Dummy_data/ImgPages/Biochemistry/resource_centers.pdf";
import zebrafish from "../../../../Dummy_data/ImgPages/Biochemistry/Zebrafish_lab.pdf";
function Research_facilities() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <DepartBanner />
      </div>
      <div className="flex flex-row">
        <div className="w-[350px]">
          <Departments />
        </div>
        <div className="ml-3 ">
          <div className="w-[1100px]">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Research & Facilities
            </h2>
          </div>

          <div class="wrapper2 mt-5 mb-5">
            <div class="card1">
              <div className="flex flex-col">
                <div>
                  <span className=" text-2xl font-bold ">
                    Zebrafish Lab Facilities <br />
                  </span>
                </div>
              </div>
              <div class="info">
                <h1 className="font-bold">Description</h1>
                <p>
                  The aim of providing an alternative in vivo non –invasive
                  model system for science education, teaching and research.
                </p>
                <a href={zebrafish}>
                  <button>View</button>
                </a>
              </div>
            </div>
            <div class="card1">
              <div className="">
                <span className=" text-2xl font-bold">
                  Resources Centers & Resource Facilities
                </span>
              </div>
              <div class="info">
                <h1 className="font-bold">Description</h1>
                <p>
                  1. The Bioinformatics Center
                  <br />
                  2. Drosophila Resource Center
                  <br />
                  3. Campus Sustainability Center
                  <br />
                  4. Health Sustainability
                </p>
                <a href={resource}>
                  <button>View</button>
                </a>
              </div>
            </div>
            <div class="card1">
              <span className=" text-2xl font-bold">Grant & Research Guidance</span>
              <div class="info">
                <h1 className="font-bold ">Description</h1>
              <p>Star Innovation Project Cluster Innovation Center, DU</p>
              <br />
              <br />
                <a href={grant}>
                  <button>View</button>
                </a>
              </div>
            </div>
          </div>
          <div className="p-3 grid grid-cols-4 mr-2 ml-2">
                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500"
                ><a href="./biochem/faculty">
                  Faculty
                </a>
                </span>
                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="./biochem/programmesoffer">
                  Programmes Offered
                </a>
                </span>
                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                  <a href="./biochem/association">
                  Association
                </a></span>
                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="./biochem/studentsachieve">
                  Student's Achievements
                </a>
                </span>
                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="./biochem/events">
                  Events
                </a>
                </span>

            <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="./biochem/laboratorystaff">
                  Laboratory Staff
                </a>
                </span>

                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="./biochem/publications">
                  Publications
                </a>
                </span>

                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="./biochem/awards">
                 Awards
                </a>
                </span>

                
                
                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                  Time Table
                </a>
                </span>
                <span className=" mr-2 bg-blue-600 rounded-lg p-2 flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-500">
                <a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                  Photo Gallery
                </a>
                </span>







                
              </div>

        </div>
      </div>
    </div>
  );
}

export default Research_facilities;
