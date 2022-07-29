import React, {useState} from "react";
import Physicsbanner from "./Physicsbanner";
import Physics from "../../../../Components/DepartSIde/Physics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Physics_about() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <Physicsbanner />
      </div>
      <div className="flex flex-row">
      <div className="md:hidden absolute bg-white">
          {visible ? (
            <>
              <div className=" flex  flex-col mt-8 ml-2">
                <FontAwesomeIcon
                  icon={faClose}
                  size="lg"
                  onClick={() => setVisible(!visible)}
                  className=" border-2  border-[#000080] mr-2 hover:text-black text-white  rounded-lg p-2 cursor-pointer hover:bg-white bg-[#000080]"
                />
                <Physics />
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
          <Physics />
        </div>
        <div className="w-full mr-16">
          <h2 className="md:text-3xl text-lg uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center ml-4 items-center">
            About the department
          </h2>

          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Physics/Physics_depart.jpg)",
                    
                    }}
                    className="bg-center ml-auto mr-auto lg:w-[700px] w-[250px] h-[190px] lg:h-[400px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  />

                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="md:text-lg text-sm text-justify font-medium">
                      Physics is basic among all the natural sciences. It
                      encompasses the study of universe from largest galaxies to
                      smallest subatomic particles. Physics Department of Daulat
                      Ram College is 45 years old and has well equipped
                      laboratories and a well-stocked library. The college
                      started Honors course in Physics from academic session
                      2017-18. The course not only provides an in-depth
                      knowledge of core topics of physics but also integrates
                      them with mathematics and chemistry. The course is
                      designed to develop among students analytical,
                      quantitative and problem solving skills. A physicist has
                      the ability to synthesize and analyze large quantity of
                      data and present their analysis in an easily
                      understandable form. The skill a physics student develops
                      is a sense of wonder about how things work. These are
                      valuable skills that can be applied in a range of careers.
                      The Department also organises Skill Development Programmes
                      during summer and winter breaks for students to enrich
                      their learning by hands on experiences on various applied
                      skills and techniques.
                    </span>
                  </div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2 mb-5">
                    <span className="md:text-lg text-sm text-justify font-medium">
                      After graduating in Physics student can pursue
                      post-graduation in courses such as Physics, Geophysics,
                      Electronics, Material Science, Nanotechnology, Biophysics,
                      Computational Physics, Data Science etc. This further
                      opens a plethora of career opportunities to students in
                      Academics as teachers/professors, in research institutes
                      as scientists, in industries such as semiconductor,
                      electronics, analog instrumentation industries etc., and
                      in defence and banking sectors as well. Other conventional
                      service sectors are also open to these graduates.
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

export default Physics_about;
