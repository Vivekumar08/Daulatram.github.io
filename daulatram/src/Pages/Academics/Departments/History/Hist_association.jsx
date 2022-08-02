import React, {useState} from "react";
import Histbanner from "../History/Histbanner.jsx";
import History from "../../../../Components/DepartSIde/History.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Hist_association() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <Histbanner />
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
                <History />
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
          <History />
        </div>
        <div className="w-full mr-16">
          <h2 className="md:text-3xl text-xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center ml-4 items-center ">
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

                    }}
                    className="bg-center ml-auto mr-auto mb-3 lg:w-[700px] w-[250px] h-[190px] lg:h-[450px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  ></div>
                  <div className="pr-3 pl-3 flex mr-1 md:ml-2 ml-9">
                    <span className="md:text-lg text-sm  mb-2 text-justify font-medium">
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
                  
                  <div className="pr-3 pl-3 flex mr-1 mb-2 md:ml-2 ml-9">
                    <span className="md:text-lg text-sm text-justify font-medium ">
                      In 2021, we introduced the concept of celebrating
                      Independence Week. Independence Week was organized by the
                      department and various competitions were organised under
                      its aegis. The Department Fest: ‘Perspective’, takes place
                      every year with a lot of zeal and enthusiasm and attracts
                      students from various colleges, who take part in various
                      events.
                    </span>
                  </div>
                
                  <div className="pr-3 pl-3 flex mr-1 mb-6 md:ml-2 ml-9">
                    <span className="md:text-lg text-sm text-justify font-medium ">
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
