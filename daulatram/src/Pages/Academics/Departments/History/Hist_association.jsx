import React from "react";
import Histbanner from "../History/Histbanner.jsx";
import History from "../../../../Components/DepartSIde/History.jsx";
function Hist_association() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Histbanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col mt-12 ml-2">
          <History />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Association
          </h2>

          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <div
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/History/association_hist.jpg)",
                      width: "700px",
                      height: "450px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"
                  ></div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium mt-3">
                      The History Association of Daulat Ram College takes
                      colossal pride in organizing various events and activities
                      all year round to imbibe teamwork among students. The
                      Annual Fresher Meet takes place every year and is hosted
                      by the 2nd and 3rd years to welcome their juniors and make
                      them feel comfortable and at home. The Annual Farewell is
                      organized to bid adieu to the third-year students after
                      they complete their three-year journey in the department
                      and move ahead towards new milestones in their lives.
                    </span>
                  </div>
                  <br />
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium ">
                      In 2021, we introduced the concept of celebrating
                      Independence Week. Independence Week was organized by the
                      department and various competitions were organised under
                      its aegis. The Department Fest: ‘Perspective’, takes place
                      every year with a lot of zeal and enthusiasm and attracts
                      students from various colleges, who take part in various
                      events.
                    </span>
                  </div>
                  <br />
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium ">
                      The Department Union consists of members who are elected
                      by the students. They work tirelessly to ensure the smooth
                      functioning of the Association. The President and Cultural
                      Secretary of the association (3rd years) are the
                      experienced leaders of the society who are supported by
                      the General Secretary and the Treasurer from the second
                      year. The Class Representatives from all three years work
                      efficiently to safeguard the interests of the students.
                      The History Association is a body that is made with the
                      love and support of the teachers and students who work
                      together to mutually grow and learn.
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

export default Hist_association;
