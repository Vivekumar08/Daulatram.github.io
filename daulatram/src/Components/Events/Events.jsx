import React from "react";
import "./Events.css";
const Events = () => {
  return (
    <>
      <div className="quick_links flex flex-row items-center mt-6 justify-center text-center text-white font-bold  ">
        <span className="quick_content uppercase w-full">
          <strong>College Events and Activities </strong>
        </span>
      </div>
      <div className="main_div1">
        <div className="small_box">
          <img
            className="event_img z=-10"
            style={{ width: "300px", height: "300px" }}
            src="images/IQAC1.jpg"
            alt="IQAC Events"
          />
          <span className="event_name text-4xl font-bold w-[200px] text-justify">IQAC Events</span>
          <a href="">
            <button className="read_btn ">Read More </button>
          </a>
        </div>
        <div className="small_box">
          <img
            className="event_img z=-10"
            style={{ width: "300px", height: "300px" }}
            src="images/Vidya.png"
            alt="IQAC Events"
          />
          <span className="event_name text-4xl font-bold w-[200px] text-justify">Vidya Vistar</span>
          <a href="">
            <button className="read_btn ">Read More </button>
          </a>
        </div>

        {/* <div className="small_box">
          <img
            className="event_img z=-10"
            src="images/Vidya.png"
            alt="IQAC Events"
          />
          <a href="">
            <button className="read_btn">Read More </button>
          </a>
        </div>
        <div className="small_box">
          <img
            className="event_img z=-10"
            src="images/add_on.png"
            alt="IQAC Events"
          />
          <a href="">
            <button className="read_btn">Read More </button>
          </a>
        </div>
        <div className="small_box">
          <img
            className="event_img z=-10"
            src="images/student.png"
            alt="IQAC Events"
          />
          <a href="">
            <button className="read_btn">Read More </button>
          </a>
        </div> */}
      </div>
    </>
  );
};

export default Events;
