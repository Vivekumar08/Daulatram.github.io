import React from "react";
import attendance from "../Dummy_data/images/attendance.png";
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
      <div className="quick mt-0 mb-0 bg-orange-200 h-auto pb-10">
        <div class="quick_links top-[170px] flex flex-row items-center justify-center text-center text-white font-bold ">
          <span  className="quick_content uppercase">
            <strong>Quick Links</strong>
          </span >
        </div> 
        
        <div className="row ">
          <div className="col">
            <a href="#"  className="gallery_item gallery_item-1  cursor-pointer">

              <img className="attendance" src={attendance} alt="" />
              <p className="mt-2">
                <strong>Attendance</strong>
              </p>
            </a >
            <a href="#"  className="gallery_item gallery_item-2  cursor-pointer">
              <img className="calendar" src={calendar} alt="" />
              <p className="mt-2">
                <b>Calendar</b>
              </p>
            </a >
            <a href="#"  className="gallery_item gallery_item-3  cursor-pointer">
              <img className="datesheet" src={datesheet} alt="" />
              <p className="mt-2">
                <b>Datesheet</b>
              </p>
            </a >
            <a href="#"  className="gallery_item gallery_item-4  cursor-pointer">
              <img className="hostel" src={hostel} alt="" />
              <p className="mt-2">
                <b>Hostel Facilities</b>
              </p>
            </a >
            <a href="#"  className="gallery_item gallery_item-5  cursor-pointer">
              <img
                className="internal_assessment"
                src={internal_assessment}
                alt=""
              />
              <p className="mt-2">
                <b>Internal Assessment</b>
              </p>
            </a >
            <a href="#"  className="gallery_item gallery_item-6  cursor-pointer">
              <img className="placement_cell" src={placement_cell} alt="" />
              <p className="mt-2">
                <b>Placement Cell</b>
              </p>
            </a >
            <a href="#"  className="gallery_item gallery_item-7  cursor-pointer">
              <img className="scholarship" src={scholarship} alt="" />
              <p className="mt-2">
                <b>Scholarship</b>
              </p>
            </a >
            <a href="#"  className="gallery_item gallery_item-8  cursor-pointer">
              <img
                className="student_facilities" src={student_facilities} alt="" />
              <p className="mt-2">
                <b>Student Facilities</b>
              </p>
            </a >
            <a href="#"  className="gallery_item gallery_item-9  cursor-pointer">
              <img className="student_union" src={student_union} alt="" />
              <p className="mt-2">
                <b>Student Union</b>
              </p>
            </a >
            <a href="#"  className="gallery_item gallery_item-10  cursor-pointer">
              <img className="time_table" src={time_table} alt="" />
              <p className="mt-2">
                <b>Time Table</b>
              </p>
            </a >
          </div>
          </div>
        </div>
      
    </>
  );
}

export default Quicklinks;
