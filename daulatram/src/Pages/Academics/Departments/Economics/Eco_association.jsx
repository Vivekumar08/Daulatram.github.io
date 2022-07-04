import React from "react";
import Departments from "../../../../Components/Sidebar/Departments";
import Ecobanner from "../Economics/Ecobanner.jsx";
import Economics from "../../../../Components/DepartSIde/Economics.jsx";
function Eco_association() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Ecobanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col ml-2 mt-12">
          <Economics />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Association
          </h2>

          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="pr-3 pl-3 flex mr-1 ml-2">
                <span className="text-lg text-justify font-medium mt-3">
                  The Economics Association of Daulat Ram College -{" "}
                  <strong>‘ECLAT’ </strong>
                  takes immense pride in organizing a plethora of activities
                  year-round covering Fresher’s, Farewell, Fest- ‘Economania’,
                  year-round seminars, skill enhancement workshops, and guest
                  lectures by prominent personalities.
                </span>
              </div>
              <br />
              <div className="pr-3 pl-3 flex mr-1 ml-2">
                <span className="text-lg text-justify font-medium ">
                  The department members are also members of the Economics
                  Association, <strong>‘Éclat’</strong> which apart from
                  organising activities like freshers welcome and farewell for
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
              <figure className="flex pr-4 pl-4 pb-2">
                <div
                  style={{
                    backgroundImage:
                      "url(/images/ImgPages/Economics/asso1.jpg)",
                    width: "750px",
                    height: "370px",
                  }}
                  className="bg-center ml-auto mr-auto mb-4 bg-no-repeat mt-[3%] bg-cover h-10  rounded-3xl border-2 border-black"
                  // className="rounded-3xl border-black border-2 h-[400px] mr-10 ml-64"
                ></div>
              </figure>
              <figure className="flex pr-4 pl-4 pb-2">
                <div
                  style={{
                    backgroundImage:
                      "url(/images/ImgPages/Economics/asso2.jpg)",
                    width: "750px",
                    height: "370px",
                  }}
                  className="bg-center ml-auto mr-auto mb-4 bg-no-repeat mt-[3%] bg-cover h-10  rounded-3xl border-2 border-black"
                  // className="rounded-3xl border-black border-2 h-[400px] mr-10 ml-64"
                ></div>
              </figure>
              <figure className="flex pr-4 pl-4 pb-2">
                <div
                  style={{
                    backgroundImage:
                      "url(/images/ImgPages/Economics/asso3.jpg)",
                    width: "750px",
                    height: "370px",
                  }}
                  className="bg-center ml-auto mr-auto mb-4 bg-no-repeat mt-[3%] bg-cover h-10  rounded-3xl border-2 border-black"
                  // className="rounded-3xl border-black border-2 h-[400px] mr-10 ml-64"
                ></div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eco_association;
