import React from "react";
import Departments from "../../../../Components/Sidebar/Departments";
import Ecobanner from "../Economics/Ecobanner.jsx";
import Economics from "../../../../Components/DepartSIde/Economics.jsx";

function Eco_about() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Ecobanner />
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
                      "url(/images/ImgPages/Economics/Eco_about.png)",
                    width: "750px",
                    height: "370px",
                  }}
                  className="bg-center ml-auto mr-auto bg-no-repeat mt-[3%] bg-cover h-10  rounded-3xl border-2 border-black"
                  // className="rounded-3xl border-black border-2 h-[400px] mr-10 ml-64"
                ></div>
              </figure>
              <div className="pr-3 pl-3 flex mr-1 ml-2">
                <span className="text-lg text-justify font-medium mt-3">
                  The Department of Economics of Daulat Ram College was
                  established in 1960. The Department oﬀers a complete
                  three-year undergraduate B.A.(Hons) Economics course. Further,
                  it oﬀers interdisciplinary courses ( like Introductory Micro
                  and Macroeconomics, Indian Economy, Money and Banking, Public
                  Finance etc.) and skill enhancement courses (like Research
                  Methodology, Contemporary Economic Issues etc.). The papers
                  and the course oﬀered, aims to provides a theoretical and
                  practical understanding of the core economic principles both,
                  at micro and macro level and enables one to understand what,
                  ‘being developed’ entails in this globalized world and what
                  policy initiatives can be taken to make India a developed
                  nation.
                </span>
              </div>
              <br />
              <div className="pr-3 pl-3 flex mr-1 ml-2">
                <span className="text-lg text-justify font-medium ">
                  The cut-oﬀ for admissions to the BA (Hons) Economics course
                  for the last 5 years has been in the range of 95%-97%. The
                  department comprises of a team of dedicated faculty members to
                  guide and support students at every stage. The faculty has
                  vast experience in the ﬁeld of teaching and research, with a
                  number of research papers published in various national and
                  international journals. The department as a whole comprising
                  of both, teachers and students has been one of the most
                  proactive and innovative departments of the college.
                </span>
              </div>
              <br />
              <div className="pr-3 pl-3 flex mr-1 ml-2">
                <span className="text-lg text-justify font-medium ">
                  The department members are also members of the Economics
                  Association,<strong> ‘Éclat’</strong> which apart from
                  organising activities like fresher’s welcome and farewell for
                  the students of Economics, conducts several seminars, national
                  and international conferences to enlighten them about the
                  possible future prospects they may have and to provide them a
                  clear understanding of all the possible post graduate courses
                  that the students can pursue in future. Further, the
                  association organises ‘Mutasir’, a youth conference, in which
                  prominent economists are invited to talk about contemporary
                  economic issues. This helps in broadening the scope and
                  understanding of the students regarding the discipline. The
                  association also launches the annual publication ‘Optima’,
                  which is an interesting mosaic of ideas and understanding of
                  various topics of economics, by the students and the faculty
                  members. Further, the annual economics festival ‘Economania’,
                  is organised by the association. In the festival, events like
                  debate, paper presentations, MUNs or Modelling United Nations
                  and so on, are conducted to keep up the competitive spirit
                  among the students.
                </span>
              </div>
              <br />
              <div className="pr-3 pl-3 flex mr-1 ml-2 mb-6">
                <span className="text-lg text-justify font-medium ">
                  The students of the discipline are also encouraged to be
                  active members of the Entrepreneurship Cell and Finance and
                  Investment Cell of the College (Co-convened by the Economics
                  Department). Overall, the department, through regular classes
                  and associations and cells activities aim to equip the student
                  with tools to harness future career opportunities in ﬁelds of
                  Academics, Consultancy, Think-Tanks, Policymaking, Analysts,
                  Research, Business Administration, Banking, Government
                  Administration, Corporate consultants, among others. Students
                  can bag various prestigious fellowships like the Young India
                  Fellowship, LAMP Fellowship (Legislative Assistant to Member
                  of Parliament), Gandhi fellowship(social sector
                  fellowship),Teach for India fellowship. Students with an
                  economics background usually avail of various internship
                  prospects with Niti Aayog, Ministry of Finance, Ministry of
                  External Aﬀairs, Corporates etc.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex  flex-col mr-16 mt-32">
          <Economics />
        </div>
      </div>
    </div>
  );
}

export default Eco_about;
