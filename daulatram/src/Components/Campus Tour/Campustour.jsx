import React from "react";
import sample from "../Campus Tour/Virtual_Tour_Video.mp4";
import "./campus_tour.css";
function Campustour() {
  return (
    <>
      <div className="main_div">
        <div className="small_box1  rounded-lg ">
          <video
            className="rounded-lg h-[430px]"
            src={sample}
            autoplay
            controls
            loop
          />
        </div>

        <div className="small_box2 uppercase ">
          <h2>virtual</h2>
          <h2>Campus</h2>
          <h2>Tour</h2>
        </div>
      </div>
    </>
  );
}

export default Campustour;
