import React from "react";
import sample from "../Campus Tour/sample.mp4";
import "./campus_tour.css";
function Campustour() {
  return (
    <>
      <div className="main_div">
        <div className="small_box1  rounded-lg ">
          <video className="rounded-lg h-[430px]" src={sample} autoplay controls loop/>
        
        </div>

        <div className="small_box2 uppercase" >
        <strong><h2>virtual</h2></strong>
        <strong><h2>Campus</h2></strong>
        <strong><h2>Tour</h2></strong>


          

        </div>
      </div>
    </>
  );
}

export default Campustour;
