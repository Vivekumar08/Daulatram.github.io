import React from "react";
import Admission_side from "../../Components/Sidebar/Admission_side.";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"

const Helpdesk = () => {
  return (
    <div className=" flex flex-col">
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
      >
        <span className="flex flex-row uppercase text-[#000080] text-6xl justify-center pt-14">
          Online Admission{" "}
        </span>
        <div className="ml-2 text-lg text-white mt-28">
          <span className="ml-5">Home</span>
          <span className="ml-5">Admisssion</span>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-[350px]">
          <Admission_side />
        </div>
        <div className="ml-3 mb-5">
          <div className="w-[1100px]">
            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              Online Admission
            </h2>
            <p className="mt-12 ">
            For any queries relating to admissions 2022-23, contact the following:
            </p>
            <h1 className="mt-2">
            <FontAwesomeIcon icon={faArrowRight} className="text-blue-400" />
            <a href="https://admission.uod.ac.in/?Admission-Helpdesk" target="_blank" className="text-blue-400  hover:pl-3"> https://admission.uod.ac.in/?Admission-Helpdesk</a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helpdesk;
