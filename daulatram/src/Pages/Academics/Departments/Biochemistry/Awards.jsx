import React from "react";
import DepartBanner from "../../../../Components/Banners/DepartBanner";
import Departments from "../../../../Components/Sidebar/Departments";
import Awds from "../../../../Dummy_data/ImgPages/Biochemistry/Awards.pdf"
import "./awards.css";
function Awards() {
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
              Awards
            </h2>
          </div>
          <div class="wrapper3 mt-5 mb-5">
            <div class="card2">
                
                <span className="font-bold text-2xl ml-16" >Awards</span>
              <div className="flex flex-col">
                <div class="info">
                  <p className="ml-14">Faculty/ Non Teaching Staff</p>
                  
                  <br/>
                  <a href={Awds}>
                    <button className="ml-16">View</button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                  </a>
                </div>
                
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
                <a href="./biochem/research">
                  Research
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

export default Awards;
