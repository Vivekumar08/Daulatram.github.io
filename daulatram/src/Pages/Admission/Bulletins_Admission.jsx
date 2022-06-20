import React from "react";
import Admission_side from "../../Components/Sidebar/Admission_side.";
import Bulletin from '../../Dummy_data/pdfs/Admission/UGCF_2022.pdf'

const Bulletins_Admission = () => {
  return (
    <div className=" flex flex-col">
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
      >
        <span className="flex flex-row uppercase text-[#000080] text-6xl justify-center pt-14">
          Bulletins{" "}
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
            <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">Admission Bulletin</h2>
            <div class="wrapper3 mt-5 mb-5">
              <div class="card2">
                <span className="font-bold text-xl ml-8">
                Admission Bulletin
                </span>
                <div className="flex flex-col">
                  <div class="info ml-16">
                    <p className="">Admission Bulletin</p>

                    <br />
                    <a href={Bulletin}>
                      <button className="ml-6">View</button>
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

export default Bulletins_Admission;
