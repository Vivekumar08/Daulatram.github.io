import React from "react";
import { Link } from "react-router-dom";
import attendance1 from "../Dummy_data/images/attendance3.png";
import calendar from "../Dummy_data/images/calendar.jpg";
import datesheet from "../Dummy_data/images/datesheet.jpg";
import hostel from "../Dummy_data/images/hostel.png";
import internal_assessment from "../Dummy_data/images/internal_assessment.png";
import placement_cell from "../Dummy_data/images/placement_cell.jpg";
import scholarship from "../Dummy_data/images/scholarship.png";
import student_facilities from "../Dummy_data/images/student_facilities.png";
import student_union from "../Dummy_data/images/student_union.jpg";
import time_table from "../Dummy_data/images/time_table.png";

function Quicklinks() {
  return (
    <>
      <div className="quick mt-0 mb-0  h-auto ">
        <div className="quick_links top-[170px] flex flex-row mb-16 items-center justify-center text-center text-white font-bold ">
          <span className="quick_content uppercase">
            <strong>Quick Links</strong>
          </span>
        </div>
        <div className="flex mt-5 justify-center ml-5 mr-5">
          <div className="grid lg:grid-cols-4 grid-cols-2  sm:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-[5.5rem] ">
            <Link
              to="/Student_Zone/Attendance"
              className="gallery_item gallery_item-1 flex flex-col justify-center items-center cursor-pointer"
            >
             <img
                  
                  src = {"/images/attendance3.png"} 
                  className="attendance"
                  alt="attendance"
                />
              <p className="mt-2">
                <strong>Attendance</strong>
              </p>
            </Link>
            <Link
              to="/academics/College_Calendar"
              className="gallery_item gallery_item-2 flex flex-col justify-center items-center cursor-pointer"
            >
<img
                  
                  src = {"/images/calendar1.png"} 
                  className="calendar"
                  alt="calendar"
                />
              <p className="mt-2">
                <b>Calendar</b>
              </p>
            </Link>
            <Link
              to="/Student_Zone/Examination_Form_&_Database"
              className="gallery_item gallery_item-3 flex flex-col justify-center items-center  cursor-pointer"
            >
             <img
                  
                  src = {"/images/datesheet1.png"} 
                  className="datesheet"
                  alt="datesheet"
                />
              <p className="mt-2">
                <b>Datesheet</b>
              </p>
            </Link>
            <Link
              to="/Student_Zone/Hostel"
              className="gallery_item gallery_item-4 flex flex-col justify-center items-center cursor-pointer"
            >
              <img
                  
                  src = {"/images/hostel1.png"} 
                  className="hostel"
                  alt="hostel"
                />
              <p className="mt-2">
                <b>Hostel Facilities</b>
              </p>
            </Link>
            <Link
              to="/Student_Zone/Internal_Assesments"
              className=" gallery_item gallery_item-5 flex flex-col justify-center items-center cursor-pointer"
            >
              <img
                  
                  src = {"/images/internal_assessment.png"} 
                  className="Internal_assessment"
                  alt="internal_assessment"
                />
              <p className="mt-2 w-[160px]">
                <b>Internal Assessment</b>
              </p>
            </Link>
            <Link
              to="/Student_Zone/Placement_Cell"
              className="gallery_item gallery_item-6 flex flex-col justify-center items-center cursor-pointer"
            >
                            <img
                  
                  src = {"/images/placement1.png"} 
                  className="placement"
                  alt="placement"
                />
              <p className="mt-2">
                <b>Placement Cell</b>
              </p>
            </Link>
            <Link
              to="/Student_Zone/Scholarship"
              className="gallery_item gallery_item-7 flex flex-col justify-center items-center cursor-pointer"
            >
                           <img
                  
                  src = {"/images/scholarship.png"} 
                  className="scholarship"
                  alt="scholarship"
                />
              <p className="mt-2">
                <b>Scholarships</b>
              </p>
            </Link>
            <Link
              to="/Student_Zone/Students_Facilities"
              className="gallery_item gallery_item-8 flex flex-col justify-center items-center cursor-pointer"
            >
                           <img
                  
                  src = {"/images/facilities.png"} 
                  className="facilities"
                  alt="facilities"
                />
              <p className="mt-2">
                <b>Students' Facilities</b>
              </p>
            </Link>
            <Link
              to="/Student_Zone/Student_Union"
              className="gallery_item gallery_item-9 flex flex-col justify-center items-center cursor-pointer"
            >
                            <img
                  
                  src = {"/images/union.png"} 
                  className="union"
                  alt="union"
                />
              <p className="mt-2">
                <b>Students' Union</b>
              </p>
            </Link>
            <Link
              to="/Student_Zone/Time_Table_&_Academic_Calendar"
              className="gallery_item gallery_item-10 flex flex-col justify-center items-center cursor-pointer"
            >
                            <img
                  
                  src = {"/images/time_table.png"} 
                  className="time_table"
                  alt="time_table"
                />
              <p className="mt-2">
                <b>Time Table</b>
              </p>
            </Link>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Quicklinks;
