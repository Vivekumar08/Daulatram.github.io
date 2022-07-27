import React,{useState} from "react";
import Nhebanner from "../NHE/Nhebanner.jsx";
import NHE from "../../../../Components/DepartSIde/NHE.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Nhe_about() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <Nhebanner />
      </div>
      <div className="flex flex-row">
      <div className="md:hidden">
          {visible ? (
            <>
              <div className=" flex  flex-col mt-8 ml-2">
                <FontAwesomeIcon
                  icon={faClose}
                  size="lg"
                  onClick={() => setVisible(!visible)}
                  className=" border-2  border-[#000080] mr-2 hover:text-black text-white  rounded-lg p-2 cursor-pointer hover:bg-white bg-[#000080]"
                />
                <NHE />
              </div>
            </>
          ) : (
            <div className=" flex  flex-col mt-8 ml-2">
              <FontAwesomeIcon
                icon={faBars}
                size="lg"
                onClick={() => setVisible(!visible)}
                className="text-black border-2 border-[#000080] mr-2 hover:text-white bg-[#fff] rounded-lg p-2 cursor-pointer hover:bg-[#000080]"
              />
            </div>
          )}
        </div>
        <div className=" md:flex hidden md:flex-col mt-12 ml-2">
          <NHE />
        </div>
        <div className="w-full mr-16">
          <h2 className="md:text-4xl text-lg uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center ml-4 items-center">
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

                    }}
                    className="bg-center ml-auto mr-auto lg:w-[700px] w-[250px] h-[190px] lg:h-[450px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  />
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="md:text-lg text-sm text-justify font-medium">
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
