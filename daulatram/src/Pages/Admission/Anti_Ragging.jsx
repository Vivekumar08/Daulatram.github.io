import React from "react";
import Admission_side from "../../Components/Sidebar/Admission_side.";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Ragging from '../../Dummy_data/pdfs/Admission/Antiragging_Affidavit.pdf'

const Anti_Ragging = () => {
  return (
    <div className=" flex flex-col">
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
      >
        <span className="flex flex-row uppercase text-[#000080] text-6xl justify-center pt-14">
        Anti-Ragging Guidelins{" "}
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
              Anti-Ragging Guidelins
            </h2>
            <h1 className="mt-12">
            <FontAwesomeIcon icon={faArrowRight} className="text-blue-400" />
            <a href={Ragging} target="_blank" className="text-blue-400  hover:pl-3">{" "}Anti-Ragging Affidavit  </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anti_Ragging;
