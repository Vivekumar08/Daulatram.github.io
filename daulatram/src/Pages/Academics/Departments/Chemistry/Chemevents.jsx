import React, {useState} from "react";
import Departments from "../../../../Components/Sidebar/Departments";
import Chembanner from "../Chemistry/Chembanner.jsx";
import Chemistry from "../../../../Components/DepartSIde/Chemistry.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Chemevents() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <Chembanner />
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
                <Chemistry />
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

      <div className=" md:flex hidden md:flex-col mt-12 ml-2 ">
          <Chemistry/>
        </div>


          <div className="w-full mr-auto ml-auto">
          <h2 className="md:text-3xl text-xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center ml-4 items-center ">
            Events
          </h2>
        

        <div className="flex flex-row">
          
            <div className="mr-5">
              <div>
                <div>
                  <h2 className="md:text-2xl sm:text-xl text-lg ml-4 font-bold underline mb-3">
                    Conferences
                  </h2>

                  <ol className="md:text-base text-sm list-decimal mt-2 ml-8">
                    <li className="text-justify font-medium">
                      International Conference on "Green Chemistry in
                      Environmental Sustainability & Chemical Education" 17 to
                      18 November 2016
                    </li>

                    <li>
                      National Conference on "Innovations in Sciences and
                      Emerging Challenges in Health and Environment"(NSHE-2018)
                      on 20 March 2018
                    </li>
                  </ol>
                </div>
                <div>
                  <h2 className="md:text-2xl sm:text-xl text-lg ml-4 font-bold underline mb-3">
                    Faculty Development Programmes
                  </h2>
                </div>
                <ol className="md:text-base text-sm list-decimal mt-2 ml-8">
                  <li>
                    Faculty Development Program entitled "From Chemistry of Life
                    to Chemistry of Diseases: Understanding Clinical
                    Biochemistry (UCB-17)" from 15 to 22 June 2017 .
                  </li>
                  <li>
                    Faculty Development Program entitled “empowering teaching
                    learning processes using google classroom and other ICT
                    tools : A comprehensive practical approach from 21st to 23rd
                    July 2020 .
                  </li>
                </ol>
                <div>
                  <h2 className="md:text-2xl sm:text-xl text-lg ml-4 font-bold underline mb-3">
                    Workshops and Seminars
                  </h2>
                </div>
                <ol className="md:text-base text-sm list-decimal mt-2 ml-8">
                  <li>
                    National workshop cum seminar on Novel Trends in Green
                    Chemistry & Sustainable Development on 26 to 27 February
                    2016
                  </li>
                  <li>
                    Indo-French Symposium on Recent Advances in Biomedical
                    Engineering on 6 February 2017
                  </li>
                </ol>
                <div>
                  <h2 className="md:text-2xl sm:text-xl text-lg ml-4 font-bold underline mb-3">
                    Skill Development Program
                  </h2>
                </div>
                <ol className="md:text-base text-sm list-decimal mt-2 ml-8">
                  <li>
                    In-House Skill Development Course on Green Genesis and
                    Sustainability of Personal Care Products and Food Stuff from
                    1 July to 15 July, 2016
                  </li>
                  <li>
                    In-House Skill Development Course on "Instrumentation,
                    Clinical Analytical and Computational Chemistry" from 31 May
                    2017 to 13 June 2017.
                  </li>
                  <li>
                    In-house Skill Development Program on Exploring Everyday
                    Chemistry from 21st Dec 2018 to 29th Dec 2018.
                  </li>
                  <li>
                    In-house Skill Development Program on exploring chemicals in
                    natural products, processed food and nutritional food
                    supplements from 4th July 2019 to 11th July 2019.
                  </li>
                  <li>
                    Three day in house skill development program on enhancing
                    learning through ICT tools from 17th august to 19th august
                    2020.
                  </li>
                </ol>
                <div>
                  <h2 className="md:text-2xl sm:text-xl text-lg ml-4 font-bold underline mb-3">
                    Summer Internship Programme
                  </h2>
                </div>
                <ol className="md:text-base text-sm list-decimal mt-2 ml-8">
                  <li>
                    Two week online summer internship programme on Research
                    methodology in chemistry from 16th May to 30th May 2020.
                  </li>
                </ol>
              </div>
              <figure className="flex pr-4 pl-4 pb-2">
                <div
                  style={{
                    backgroundImage:
                      "url(/images/ImgPages/Chemistry/event_image_1.jpg)",
                    
                  }}
                  className="bg-center ml-auto mr-auto lg:w-[750px] w-[270px] h-[150px] lg:h-[420px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  // className="rounded-3xl border-black border-2 h-[400px] mr-10 ml-64"
                ></div>
              </figure>
              <figure className="flex pr-4 pl-4 pb-2">
                <div
                  style={{
                    backgroundImage:
                      "url(/images/ImgPages/Chemistry/event_image_2.jpg)",

                  }}
                  className="bg-center ml-auto mr-auto lg:w-[750px] w-[220px] h-[120px] lg:h-[420px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  // className="rounded-3xl border-black border-2 h-[400px] mr-10 ml-64"
                ></div>
              </figure>
              <figure className="flex pr-4 pl-4 pb-2">
                <div
                  style={{
                    backgroundImage:
                      "url(/images/ImgPages/Chemistry/event_image_3.jpg)",
                    
                  }}
                  className="bg-center ml-auto mr-auto lg:w-[800px] w-[370px] h-[500px] lg:h-[1100px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
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

export default Chemevents;
