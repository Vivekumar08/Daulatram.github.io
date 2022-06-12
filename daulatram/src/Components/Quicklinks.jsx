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
      <div className="quick mt-20">
        <div class="quick_links top-[170px] flex flex-row items-center justify-center text-center text-white font-bold">
          {/* <span className="quick_content"> */}
            <strong>Quick Links</strong>
          {/* </span> */}
        </div>
        <div className="row">
          <div className="col">
            <span className="gallery_item gallery_item-1">
              <img className="attendance" src={attendance} alt="" />
              <p>
                <strong>Attendance</strong>
              </p>
            </span>
            <span className="gallery_item gallery_item-2">
              <img className="calendar" src={calendar} alt="" />
              <p>
                <b>Calendar</b>
              </p>
            </span>
            <span className="gallery_item gallery_item-3">
              <img className="datesheet" src={datesheet} alt="" />
              <p>
                <b>Datesheet</b>
              </p>
            </span>
            <span className="gallery_item gallery_item-4">
              <img className="hostel" src={hostel} alt="" />
              <p>
                <b>Hostel Facilities</b>
              </p>
            </span>
            <span className="gallery_item gallery_item-5">
              <img
                className="internal_assessment"
                src={internal_assessment}
                alt=""
              />
              <p>
                <b>Internal Assessment</b>
              </p>
            </span>
            <span className="gallery_item gallery_item-6">
              <img className="placement_cell" src={placement_cell} alt="" />
              <p>
                <b>Placement Cell</b>
              </p>
            </span>
            <span className="gallery_item gallery_item-7">
              <img className="scholarship" src={scholarship} alt="" />
              <p>
                <b>Scholarship</b>
              </p>
            </span>
            <span className="gallery_item gallery_item-8">
              <img
                className="student_facilities"
                src={student_facilities}
                alt=""
              />
              <p>
                <b>Student Facilities</b>
              </p>
            </span>
            <span className="gallery_item gallery_item-9">
              <img className="student_union" src={student_union} alt="" />
              <p>
                <b>Student Union</b>
              </p>
            </span>
            <span className="gallery_item gallery_item-10">
              <img className="time_table" src={time_table} alt="" />
              <p>
                <b>Time Table</b>
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quicklinks;
