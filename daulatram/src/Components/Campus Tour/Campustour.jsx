import React from "react";
import sample from "../Campus Tour/sample.mp4";
import "./campus_tour.css";
function Campustour() {
  return (
    <>
      <div className="main_div">
        <div className="small_box1  rounded-lg ">
          <video className="rounded-lg" src={sample} autoplay controls loop/>
        
        </div>

        <div className="small_box2 uppercase" >
        <strong><h1>virtual</h1></strong>
        <strong><h1>Campus</h1></strong>
        <strong><h1>Tour</h1></strong>


          

        </div>
      </div>
    </>
  );
}

export default Campustour;
