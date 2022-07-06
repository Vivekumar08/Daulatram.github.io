import React from "react";
import Nhebanner from "../NHE/Nhebanner.jsx";
import NHE from "../../../../Components/DepartSIde/NHE.jsx";
function Nhe_about() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Nhebanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col mt-12 ml-2">
          <NHE />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            About the department
          </h2>

          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/NHE/Nhedepart.jpg)",
                      width: "700px",
                      height: "450px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"
                  />
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium mt-3 mb-10">
                      The Nutrition & Health Education (NHE) department was set
                      up in 1984, the year in which Delhi University introduced
                      a number of restructured courses in B.A. (Pass) and B.Sc.
                      (Gen). It is the oldest NHE department of the University.
                      Under CBCS-LOCF, it is offering B.A. Programme with
                      Nutrition and Health Education (NHE). The course enables
                      the students to understand and apply fundamentals of
                      nutrition and health at the family level and make them
                      aware of the various nutrition and health related problems
                      in the community. This course aims at enriching the minds
                      of the students who have interest in learning finer points
                      of nutrition. The syllabus covers basic aspects of
                      nutrients, nutrition concerns in various stages of life
                      cycle, food safety, as well as opens a vast understanding
                      of public nutrition and basic therapeutic nutrition. The
                      Skill Enhancement Courses (SECs) offered in semesters III
                      and IV further equip the students to discover vast
                      opportunities in the fields of home based catering and
                      fitness. This course would equip the students for
                      entrepreneurship, community role and employment in health
                      clinics, NGOs, government run programmes etc. The
                      department has one temporary lab.
                      <p>
                        <b>Faculty:</b> Pooja Jain M.Sc, Ph.D (incharge)
                      </p>
                      <p>Priyanka Verma M.Sc (adhoc)</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nhe_about;
