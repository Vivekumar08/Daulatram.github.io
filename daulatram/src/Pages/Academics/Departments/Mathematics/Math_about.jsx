import React from "react";

import Mathbanner from "../Mathematics/Mathbanner.jsx";
import Mathemtics from "../../../../Components/DepartSIde/Mathematics.jsx";
function Math_about() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Mathbanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col mt-12 ml-2">
          <Mathemtics />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            About the department
          </h2>

          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <div
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Mathematics/Newsletter.jpg)",
                      width: "700px",
                      height: "450px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"
                  ></div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium mt-3">
                      In the education system across the globe, there is one
                      constant subject, a language that is universally spoken:
                      Mathematics. The department of Mathematics was established
                      in 1964. Initially, mathematics was offered as one of the
                      Discipline subjects in B.A. (Prog.). Later on, B.Sc.(H)
                      Mathematics was introduced in the year 2006. At present,
                      the department offers B.Sc.(H) Mathematics to the students
                      of all streams (Humanities, Commerce and Science) under
                      the Learning outcomes Based Curriculum Framework (LOCF)
                      course structure. Besides the honours course, it is
                      offered as a Discipline course in B.A. (Prog) and General
                      Elective course for other B.A.(H) and B.Sc.(H) courses.
                    </span>
                  </div>
                  <br />
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium ">
                      The course structure allows the students to develop
                      conceptual and geometrical understanding and a deeper
                      approach to learning via the use of advanced software such
                      as Mathematica, R, Latex, TORA etc. The teaching
                      methodology lays emphasis on interactive classes, skilful
                      problem-solving techniques and uses various available
                      e-resources.
                    </span>
                  </div>
                  <br />
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium ">
                      “Affine”, the Mathematics association organises various
                      lectures by eminent Professors throughout the year. An
                      inter-college annual festival “Shoonya” is organised
                      wherein several competitions related to Mathematics are
                      held. In addition to it, the annual newsletter “Mathpunch”
                      is launched, which brings forth the creative talent of the
                      students. A fresher’s party to welcome its new batch and a
                      farewell to bid adieu to its outgoing batch is also
                      organised by the association.
                    </span>
                    <br />
                  </div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium ">
                      To motivate the students to excel in academics, the
                      college awards Proficiency Prizes (for securing highest
                      marks in each year), Silver Jubilee Merit Scholarship (for
                      securing I,II or III rank at university level in Ist or
                      IIndyear) and Teachers Memorial Prize (for securing I, II
                      or III rank at university level, all three years
                      combined). Apart from this, students can also apply for
                      various scholarships such as NBHM scholarship, Inspire
                      program etc during or after their B.Sc. or M.Sc. Course in
                      Mathematics.
                    </span>
                  </div>
                  <br />
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium ">
                      <b>Vision and Mission Statement of the Department:</b>
                      <br />
                      <p>
                        <b>Vision:</b>
                        <br /> To provide world class learning opportunities to
                        its students and to prepare them for taking up
                        challenging career opportunities worldwide.
                      </p>
                      <p>
                        <b>Mission</b>
                        <br />{" "}
                        <ul className="list-disc ml-5">
                          <li  >
                            To discover, mentor, and nurture mathematically
                            inclined students by providing them a supportive
                            environment which engages them in interdisciplinary
                            collaborative research work and is based on use of
                            effective educational tools and computing skills for
                            the undergraduate courses.
                          </li>
                          <li>
                            To undertake educational outreach and community
                            engagement that increases mathematical and computing
                            literacy nationally and globally.
                          </li>
                        </ul>
                      </p>
                    </span>
                  </div>
<br />
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium ">
                      Students with undergraduate degree in Mathematics have the
                      option of attaining higher education in the form of Master
                      degree in Mathematics, Statistics, Operational Research,
                      MBA, MCA, Actuarial Sciences etc. Mathematics offers a
                      huge variety of career opportunities in areas such as
                      Accountancy, Banking, Computing and ICT, Statistical
                      Research and Teaching.
                    </span>
                  </div>

                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Math_about;
