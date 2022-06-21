import React from "react";
import Staff_side from "../../Components/Sidebar/Staff_side";
import Laboratory from '../../Dummy_data/pdfs/Staff Zone/Laboratory_Assistant_Roster.pdf'
import NonTeachingPWDRoster from '../../Dummy_data/pdfs/Staff Zone/NonTeachingPWDRoster.pdf'
import Nonteachinglabandlib from '../../Dummy_data/pdfs/Staff Zone/Nonteching_Laboratory_and_Library.pdf'
import Roster_New_NTS from '../../Dummy_data/pdfs/Staff Zone/Roster_New_NTS.pdf'
import Roster_teaching from '../../Dummy_data/pdfs/Staff Zone/Roster_teaching.pdf'
import TeachingPwdRoster from '../../Dummy_data/pdfs/Staff Zone/Teaching_PwD_Roster.pdf'

const Roster = () => {
  return (
    <div className=" flex flex-col">
      <div
        className="Banner"
        style={{ backgroundImage: "url(/images/img1.jpg)" }}
      >
        <span className="flex flex-row uppercase text-[#000080] text-6xl justify-center pt-14">
          Staff Roster{" "}
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
              Staff Roster
            </h2>
            <div class=" wrapper3 mt-5 mb-5">
              <div class="card2">
                <span className="font-bold text-xl ml-10">Teaching Roster</span>
                <div className="flex flex-col">
                  <div class="info">
                    <p className="ml-14">Final Roster Teaching 2022</p>

                    <br />
                    <a href={Roster_teaching}>
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
              <div class="card2">
                <div className="flex flex-row justify-center">
                  <span className="font-bold text-xl ml-6">
                    Teaching Roster (PwD)
                  </span>
                </div>
                <div className="flex flex-col">
                  <div class="info ml-8">
                    <p className="ml-6">Teaching Roster PwD </p>

                    <br />
                    <a href={TeachingPwdRoster}>
                      <button className="ml-14">View</button>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </a>
                  </div>
                </div>
              </div>
              <div class="card2">
                <span className="font-bold text-xl ml-12">Non Teaching Roster</span>
                <div className="flex flex-col">
                  <div class="info ml-8">
                    <p className="ml-12">Non Teaching Roster</p>

                    <br />
                    <a href={Roster_New_NTS}>
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
            <div class="wrapper3 mt-5 mb-5">
              <div class="card2">
                <span className="font-bold text-xl ml-4">Non Teaching Roster (PwD)</span>
                <div className="flex flex-col">
                  <div class="info">
                    <p className="ml-6"> Non Teaching Roster (PwD)</p>

                    <br />
                    <a href={NonTeachingPWDRoster}>
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
              <div class="card2">
                <div className="flex flex-row justify-center">
                  <span className="font-bold text-xl mt-[-5%] ml-6">
                    Non-Teaching Roster For Library Attendant
                  </span>
                </div>
                <div className="flex flex-col">
                  <div class="info ml-8">
                    <p className="ml-6">Non-Teaching Roster For Library Attendant </p>

                    <br />
                    <a href={Nonteachinglabandlib}>
                      <button className="ml-6">View</button>
                      <br />
                      <br />
                      <br />
                      <br />
                    </a>
                  </div>
                </div>
              </div>
              <div class="card2">
                <span className="font-bold text-xl mt-[-5%] ml-4">Non-Teaching Roster For Laboratory Attendant</span>
                <div className="flex flex-col">
                  <div class="info ml-8">
                    <p className="ml-4">Non-Teaching Roster For Laboratory Attendant</p>

                    <br />
                    <a href={Laboratory}>
                      <button className="ml-6">View</button>
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

export default Roster;
