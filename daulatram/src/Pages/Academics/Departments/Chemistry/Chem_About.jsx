import React from "react";
import Departments from "../../../../Components/Sidebar/Departments";
import Chembanner from "../Chemistry/Chembanner.jsx";
import Chemistry from "../../../../Components/DepartSIde/Chemistry.jsx";
import Aboutchem from "../../../../Dummy_data/ImgPages/Chemistry/Aboutchem.jpg"

function Chem_About() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Chembanner />
      </div>
      <div className="flex flex-row">
        <div className="w-[350px]">
          <Departments />
        </div>
        <div className="w-[1100px]">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            About the department
          </h2>

          <div className="flex flex-row">
            <div className="flex flex-col">
              <figure className="flex pr-4 pl-4 pb-2">
                <div
                  style={{
                    backgroundImage:
                      "url(/images/ImgPages/Chemistry/Aboutchem.jpg)",
                    width: "400px",
                    height: "370px",
                  }}
                  className="bg-center ml-auto mr-auto bg-no-repeat mt-[3%] bg-cover h-10  rounded-3xl border-2 border-black"
                  // className="rounded-3xl border-black border-2 h-[400px] mr-10 ml-64"
                ></div>
              </figure>
              <div className="pr-3 pl-3 flex mr-1 ml-2">
                <span className="text-lg text-justify font-medium mt-3">
                  The Department of Chemistry, Daulat Ram College was
                  established in 1968 . The department has highly qualified,
                  dedicated and experienced faculty. It has well equipped
                  laboratories for regular practical classes as well as research
                  activities. There is also an Instrumentation Lab with
                  state-of-the-art instruments such as Flame photometer,
                  UV-Visible Spectrophotometer, Microwave Oven and Rotary
                  Evaporator. A few faculty members have also authored Chemistry
                  textbooks for undergraduate students.
                </span>
              </div>
              <br />
              <div className="pr-3 pl-3 flex mr-1 ml-2">
                <span className="text-lg text-justify font-medium ">
                  The Department has been awarded star status by DBT. It has
                  been running the DBT <strong>Star College Project</strong>{" "}
                  since 2011. The department takes pride in successfully
                  completing nine innovation projects involving students along
                  with the faculty. One of the projects was awarded the best
                  innovative idea award for the year 2014-15 by University of
                  Delhi.The department also hosts research students pursuing
                  their PhD degrees registered under Delhi University . Over the
                  years many summer research internship programs have been
                  conducted and both undergraduate and postgraduate students
                  have received training and certificates as interns under our
                  esteemed faculty. The department takes pride in its continuous
                  research activities in Green Chemistry and has published
                  several research papers in journals of international repute
                  with high impact factor .
                </span>
              </div>
              <div className="pr-3 pl-3 flex mr-1 ml-2">
                <span className="text-lg text-justify font-medium ">
                  The department runs a vibrant and prestigious co-scholastic
                  society “CHEMPHORIA” with all students and teachers as its
                  members. The society has the tradition of electing its own
                  office bearers who under the guidance of faculty members
                  regularly organize seminars, inter college competitions,
                  educational trips, and departmental festival “QUANTA” etc.
                </span>
              </div>
              <div className="pr-3 pl-3 flex mr-1 ml-2">
                <span className="text-lg text-justify font-medium ">
                  To its credit, the department has one International conference
                  (November 2016) and National conference (March 2018). These
                  conferences were attended enthusiastically by academia from
                  institutions all over India which led to exchange of ideas and
                  establish collaborations. The students were highly motivated
                  to pursue research by these conferences.
                </span>
              </div>
              <div className="pr-3 pl-3 flex mr-1 ml-2">
                <span className="text-lg text-justify font-medium ">
                  Skill development programmes for students during summer and
                  winter breaks are organized by the Department every year.
                  These programmes give extensive practical hands-on training to
                  our students apart from the curriculum and prepare them for
                  various jobs through job oriented skills .
                </span>
              </div>
              <div className="pr-3 pl-3 flex mr-1 ml-2">
                <span className="text-lg text-justify font-medium ">
                  Year after year the majority of Daulat Ram College Chemistry
                  students graduate with high grades and some of them also get
                  university positions. Some of our students are pursuing
                  post-graduation at the IITs and the IISc, Bangalore and some
                  are also doing Ph D at top-ranking universities. Many
                  Chemistry alumnae are faculty members in various colleges,
                  universities and institutions in India and abroad. A number of
                  alumnae are engaged in research work at reputed pharmaceutical
                  companies and research laboratories in India and abroad. They
                  are also well-represented in diverse fields such as computer
                  applications, management and law.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex  flex-col mr-16 mt-32">
          <Chemistry/>
        </div>
      </div>
    </div>
  );
}

export default Chem_About;
