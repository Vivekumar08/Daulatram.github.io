import React from "react";
import Admission_side from "../../Components/Sidebar/Admission_side.";
import guideline from '../../Dummy_data/pdfs/Admission/OBC_SC_ST_EWS_guidelines.pdf'

const Guidelines_Admission = () => {
  return (
    <div className=" flex flex-col">
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
      >
        <span className="flex flex-row uppercase text-[#000080] text-6xl justify-center pt-14">
          Guidelines{" "}
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
            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">OBC SC ST EWS Guidelines</h2>
            <div class="wrapper3 mt-5 mb-5">
              <div class="card2">
                <span className="font-bold text-xl ml-2">
                OBC SC ST EWS Guidelines
                </span>
                <div className="flex flex-col">
                  <div class="info">
                    <p className="ml-14">OBC SC ST EWS Guidelines</p>

                    <br />
                    <a href={guideline}>
                      <button className="ml-16">View</button>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines_Admission;
