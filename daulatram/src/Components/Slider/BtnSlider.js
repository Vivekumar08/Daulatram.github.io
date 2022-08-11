import React from "react";
import "./Slider.css";
// import leftArrow from "./icons/left-arrow.svg";
// import rightArrow from "./icons/right-arrow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function BtnSlider({ direction, moveSlide }) {
  // console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? " btn-slide next " : "btn-slide prev"}
    >
      <FontAwesomeIcon icon={direction === "next" ? faArrowRight : faArrowLeft} className="text-2xl"/>
    </button>
  );
}
