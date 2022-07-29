import React, {useState} from "react";
import Mathbanner from "../Mathematics/Mathbanner.jsx";
import Mathematics from "../../../../Components/DepartSIde/Mathematics.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Math_events() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <Mathbanner />
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
                <Mathematics />
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
          <Mathematics />
        </div>
        <div className="ml-3 ">
          <div className="w-full mr-16">
            <h2 className="md:text-3xl text-lg uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center ml-4 items-center">
                Events
            </h2>
          </div>
          <div className="flex flex-row">
            <div>
              <div className="mr-20 ml-4 flex text-justify ">
                <div>
                  <p className="md:text-xl text-lg  ml-4 underline font-bold">
                    Academic year 2020-21 :
                  </p>
                  <ul className="list-decimal md:text-base text-sm mt-2 ml-8 mr-4 text-justify mb-4">
                    <li>
                      The association organised a national webinar for faculty
                      on <b>“Technology-enabled Higher education in India:
                      Challenges and opportunities”</b> on 19 June, 2020 at 3:00 pm
                      on the Google meet platform. The Resource Person for the
                      event was Prof. (Dr.) A.K. Bakhshi, Vice-Chancellor of PDM
                      University, Bahadurgarh (Haryana) and Chairman of Guru
                      Angad Dev Teaching-Learning Centre of the MHRD, GOI. The
                      event was attended by a total of 650 participants.
                      <div
                        style={{
                          backgroundImage:
                            "url(/images/ImgPages/Mathematics/Events_Webinar.jpg)",
                          
                        }}
                        className="bg-center ml-auto mr-auto lg:w-[700px] w-[250px] h-[190px] lg:h-[400px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                      ></div>
                      <div
                        style={{
                          backgroundImage:
                            "url(/images/ImgPages/Mathematics/Webinar2.jpg)",
                          
                        }}
                        className="bg-center ml-auto mr-auto lg:w-[700px] w-[250px] h-[190px] lg:h-[400px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                      ></div>
                    </li>

                    <li>
                      The association organised a webinar for students on <b>"Graph
                      Theory and The Seven Bridges Problem"</b> on 26 November 2020
                      at 3:30 p.m. The resource person was Prof. Geetha
                      Venkataraman, Dean of Dr. B.R. Ambedkar University, Delhi.
                      The webinar was attended by around 100 participants.
                      <div
                        style={{
                          backgroundImage:
                            "url(/images/ImgPages/Mathematics/Graph2.jpg)",
                         
                        }}
                        className="bg-center ml-auto mr-auto lg:w-[700px] w-[250px] h-[190px] lg:h-[400px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                      ></div>
                    </li>

                    <li>
                      {" "}
                      Fresher’s party 2021 was organised by the association to
                      welcome the new batch on 27th February 2021. The event
                      provided a platform to the freshers to get acquainted with
                      their seniors, as well as with their own classmates from
                      the warmth of their own homes.
                      <div
                        style={{
                          backgroundImage:
                            "url(/images/ImgPages/Mathematics/Freshers1.jpg)",

                        }}
                        className="bg-center ml-auto mr-auto lg:w-[700px] w-[250px] h-[190px] lg:h-[40px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                      ></div>
                    </li>
                  </ul>

                <div>
                  <p className=" ml-4 underline font-bold md:text-xl text-lg">
                    Academic year 2019-20 :
                  </p>
                </div>
                <ul className="list-decimal md:text-base text-sm mt-2 ml-8 mr-4 text-justify mb-4">
                  <li>
                    The association organised a talk on <b>“A Journey with Infinite
                    Series”</b> by Dr. Tanvi Jain, Associate Professor at Indian
                    Statistical Institute, Delhi, on 20th September 2019.
                  </li>
                  <li>
                    The association organised its annual fest “Shoonya’20” on
                    19th February 2020. On the occasion, the association
                    organised a lecture on the topic <b>“Testing of primality and
                    factorization”</b> by Dr. Mukund Madhav Mishra, Assistant
                    Professor, Department of Mathematics, Hansraj College,
                    University of Delhi.
                  </li>
                </ul>
                <div>
                  <p className=" ml-4 underline font-bold md:text-xl tetx-lg">
                    Academic year 2018-19 :
                  </p>
                </div>
                <ul className="list-decimal md:text-base text-sm mt-2 ml-10 mr-4 text-justify mb-4">
                  <li>
                    The association organised a talk on <b>“Mathematical Modelling
                    on Wild Life Preserving”</b> by Prof. Shoba Bagai, Professor at
                    Cluster Innovation Centre, University of Delhi on 3rd
                    October 2018, wherein she discussed the role of mathematical
                    models in analysing various parameters of any biographical
                    region. The session was enthusiastically attended by the
                    students.
                  </li>
                  <li>
                    The association organised its annual fest “Shoonya’19” on
                    21st February 2019. On the occasion, the association
                    organised a lecture on the topic <b>“Introduction to wavelet
                    analysis”</b> by Dr. Shiv Kumar Kaushik, Associate Professor,
                    Department of Mathematics, Kirori Mal College.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </div>
          {/* <div className=" flex  flex-col ml-4 mr-16 mt-10 ">
          <Biochemistry/>

          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Math_events;
