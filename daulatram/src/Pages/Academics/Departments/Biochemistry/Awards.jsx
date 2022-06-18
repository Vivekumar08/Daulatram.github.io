import React from "react";
import DepartBanner from "../../../../Components/Banners/DepartBanner";
import Departments from "../../../../Components/Sidebar/Departments";
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
                <span>cakcbsjkvbsdvbskbj</span>
              <div className="flex flex-col">
                <div class="info">
                  <h1 className="font-bold text-2xl">Awards</h1>
                  <p>Faculty/ Non Teaching Staff</p>
                  <a href={"#"}>
                    <button>View</button>
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

export default Awards;
