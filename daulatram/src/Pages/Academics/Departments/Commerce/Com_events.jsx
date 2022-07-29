import React, {useState} from "react";
import Departments from "../../../../Components/Sidebar/Departments";
import Commercebanner from "../Commerce/Commercebanner.jsx";
import Commerce from "../../../../Components/DepartSIde/Commerce.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Com_Events() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <Commercebanner />
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
                <Commerce />
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
          <Commerce />
        </div>
        <div className="w-full mr-16">
          <h2 className="md:text-3xl text-lg uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center ml-4 items-center  ">
            Commerce Department: Events
          </h2>
          <div className="pr-3 pl-3 flex mr-1 ml-2">
            <span className="md:text-lg text-sm text-justify font-medium mb-2">
              We bring to you glimpses of some of the recent events, activities
              and workshops organised by our Department
            </span>
          </div>
          <div>
            <h2 className="md:text-3xl text-lg ml-4 font-bold underline mb-2">2020-21</h2>

            <ol className="md:text-base text-sm list-decimal mt-2 ml-8">
              <li>
                <strong>.E-SDP</strong> Commerce Association organised E-SDP
                during 17th - 19th August, 2020 on the topic "Simplifying Online
                Learning through ICT Tools".
                <figure className="flex pr-4 pl-4 pb-2">
                  <div
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Commerce/Event_1.jpg)",

                    }}
                    className="bg-center ml-auto mr-auto lg:w-[720px] w-[350px] h-[200px] lg:h-[400px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                    // className="rounded-3xl border-black border-2 h-[400px] mr-10 ml-64"
                  ></div>
                </figure>
              </li>

              <li>
                <strong> Webinar -</strong> Association organised webinar with
                Dr. Arpita Kaul,Assistant professor,Sri Venkateswara college as
                Resource Person on the Topic entitled "Google Classroom & Google
                Meet" held on 1st August 2020.
                <figure className="flex pr-4 pl-4 pb-2">
                  <div
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Commerce/Event_2.jpg)",

                    }}
                    className="bg-center ml-auto mr-auto lg:w-[780px] w-[350px] h-[250px] lg:h-[520px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                    // className="rounded-3xl border-black border-2 h-[400px] mr-10 ml-64"
                  ></div>
                </figure>
              </li>
              <li>
                <strong> National webinar -</strong> National Webinar held on
                4th July 2020 conducted on Google Meet Platform on the topic
                entitled "Mentoring Teachers for Effective Online Teaching" with
                Mr. Rajiv Jain, as Resource Person
                <figure className="flex pr-4 pl-4 pb-2">
                  <div
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Commerce/Event_3.jpg)",
                     
                    }}
                    className="bg-center ml-auto mr-auto lg:w-[780px] w-[360px] h-[250px] lg:h-[520px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                    // className="rounded-3xl border-black border-2 h-[400px] mr-10 ml-64"
                  ></div>
                </figure>
              </li>
              <li>
                <strong> Natinal Webinar -</strong> Dr. Indu Jain with Dr.
                Mithila Bagai, Resource Person at National Webinar on " Sahaja
                Yoga Meditation: Discover Inner Peace and Positivity" organized
                on 11th July 2020 on Google Meet Platform.
                <figure className="flex pr-4 pl-4 pb-2">
                  <div
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Commerce/Event_4.jpg)",

                    }}
                    className="bg-center ml-auto mr-auto lg:w-[780px] w-[350px] h-[250px] lg:h-[520px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                    // className="rounded-3xl border-black border-2 h-[400px] mr-10 ml-64"
                  ></div>
                </figure>
              </li>
              <li>
                <strong>E-FDP</strong> Mrs. Sushma Arora, e-FDP Convenor with
                Resource Persons Dr. Nikhil Rajput & Ms. Bhavya Grover at e- FDP
                entitled “Empowering Teaching-Learning Process using Google
                Classroom & Other ICT Tools: A Comprehensive Practical Approach”
                organized by the Department of Commerce, Daulat Ram College
                during 21st – 23rd July, 2020.
                <figure className="flex pr-4 pl-4 pb-2">
                  <div
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Commerce/Event_5.jpg)",
                      
                    }}
                    className="bg-center ml-auto mr-auto lg:w-[780px] w-[350px] h-[220px] lg:h-[450px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                    // className="rounded-3xl border-black border-2 h-[400px] mr-10 ml-64"
                  ></div>
                </figure>
              </li>
              <li>
                <strong> National Conference</strong> -Mrs. Sushma Arora,
                Conference Advisor with Dr.Indrani Mukherjee, Chief Guest &Dr.
                Rita Rani, Conference Convenor at Valedictory Function of
                National Conference held on 21st January 2020 at Daulat Ram
                College.
                <figure className="flex pr-4 pl-4 pb-2">
                  <div
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Commerce/Event_6.png)",
                      
                    }}
                    className="bg-center ml-auto mr-auto lg:w-[780px] w-[350px] h-[290px] lg:h-[450px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                    // className="rounded-3xl border-black border-2 h-[400px] mr-10 ml-64"
                  ></div>
                </figure>
              </li>
            </ol>
          </div>
          <br />
          <div>
            <h2 className="md:text-3xl text-lg ml-4 font-bold underline mb-6">2019-20</h2>

            <ol className="md:text-base text-sm list-decimal mt-2 ml-8">
              <li>
                <strong>Freshers Party</strong> -Faculty Members together with
                the Student Union members on the occasion of Freshers’ Party for
                students of B.Com (H) course held on 3rd September 2019.
              </li>

              <li>
                <strong>Annual Fest</strong>- Dr. Kavita Sharma, Head of
                Department of Commerce, Delhi School of Economics, University of
                Delhi addressing the students during the inaugural session of
                annual fest COMVISION 2019 held on 17th January 2019.
              </li>
              <li>
                <strong>Farewell party</strong>- The outgoing batch of students
                of our Department pose together as they bid adieu to their
                college on the occasion of Farewell 2018-19.
              </li>
              <li>
                <strong> Natinal Webinar -</strong> Dr. Indu Jain with Dr.
                Mithila Bagai, Resource Person at National Webinar on " Sahaja
                Yoga Meditation: Discover Inner Peace and Positivity" organized
                on 11th July 2020 on Google Meet Platform.
              </li>
              <li>
                <strong>E-FDP</strong> Mrs. Sushma Arora, e-FDP Convenor with
                Resource Persons Dr. Nikhil Rajput & Ms. Bhavya Grover at e- FDP
                entitled “Empowering Teaching-Learning Process using Google
                Classroom & Other ICT Tools: A Comprehensive Practical Approach”
                organized by the Department of Commerce, Daulat Ram College
                during 21st – 23rd July, 2020.
              </li>
              <li>
                <strong> National Conference</strong> -Mrs. Sushma Arora,
                Conference Advisor with Dr.Indrani Mukherjee, Chief Guest &Dr.
                Rita Rani, Conference Convenor at Valedictory Function of
                National Conference held on 21st January 2020 at Daulat Ram
                College.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Com_Events;
