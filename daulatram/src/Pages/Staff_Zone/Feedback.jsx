import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Staff_side from "../../Components/Sidebar/Staff_side";

const Feedback = () => {
  return (
    <div className=" flex flex-col">
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
      >
        <span className="flex flex-row uppercase text-[#000080] text-6xl justify-center pt-14">
        Feedback{" "}
        </span>
        <div className="ml-2 text-lg text-white mt-28">
          <span className="ml-5">Home</span>
          <span className="ml-5">Staff Zone</span>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-[350px]">
          <Staff_side />
        </div>
        <div className="ml-3 mb-5">
          <div className="w-[1100px]">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Feedback
            </h2>
            <h1 className="mt-12">
            <FontAwesomeIcon icon={faArrowRight} className="text-blue-400" />
            <a href="https://docs.google.com/forms/d/1yUy-IG9fouD9XAd1IMjnejzCAYiszoasrOfdrr0Y10A/edit" target="_blank" className="text-blue-400  hover:pl-3">{" "} Feedback Form </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
