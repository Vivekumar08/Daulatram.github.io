import React from "react";
import Admission_side from "../Components/Sidebar/Admission_side.";
import Departments from "../Components/Sidebar/Departments";
import DeptSidebar from "../Components/Sidebar/DeptSidebar";
import Research_side from "../Components/Sidebar/Research_side";
import Sidebar from "../Components/Sidebar/Sidebar";
import Societies_side from "../Components/Sidebar/Socieities_side";
import Staff_side from "../Components/Sidebar/Staff_side";
import Student_side from "../Components/Sidebar/Student_side";

const Sitemap = () => {
  return (
    <div className="grid grid-cols-1">
      <div className="flex flex-row mt-[10] ">

        <span className="ml-4 mr-5 mt-3 p-0">
          <Sidebar />
        </span>
        <span className="mt-0 mr-5 mb-3 p-0 ">
          <DeptSidebar />
        </span>
        <div className="ml-5 mr-5 mt-10">
          <Departments />
        </div>
        </div>
      <div className="mt-[-10%] ">
        <Staff_side />
      </div>
      <div className="mt-[-10%]"></div>
      <div className="mt-[-10%]">
        <Student_side />
      </div>
      <div className="mt-[-10%]">
        <Research_side />
      </div>
      <div className="mt-[-10%]">
        <Societies_side />
      </div>
      <div className="mt-[-10%]">
        <Admission_side />
      </div>
      <div className="mt-[-10%]"></div>
    </div>
  );
};

export default Sitemap;
