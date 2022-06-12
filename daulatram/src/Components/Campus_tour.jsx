import React from "react";
import campus_tour_img from "../Dummy_data/images/campus_tour_img.jpg";
function Campus_tour() {
  return (
    <>
      <div className="campus_tour_container">
        <div className="campus_video">
          <img className="video" src={campus_tour_img} alt="" />
        </div>
        <div className="tour">
          <span className="tour_name">
            <strong>Campus Video Tour</strong>
          </span>
        </div>
      </div>
    </>
  );
}

export default Campus_tour;
