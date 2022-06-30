import React from "react";
import Departments from "../../../../Components/Sidebar/Departments";
import Chembanner from "../Chemistry/Chembanner.jsx";
import Chemistry from "../../../../Components/DepartSIde/Chemistry.jsx";

function Chemevents() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Chembanner />
      </div>
      <div className="flex flex-row">
        <div className="w-[350px]">
          <Departments />
        </div>
        <div className="w-[1100px]">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            Events
          </h2>
        

        <div className="flex flex-row">
          
            <div className="mr-5">
              <div>
                <div>
                  <h2 className="text-3xl ml-4 font-bold underline mb-6">
                    Conferences
                  </h2>

                  <ol className="list-decimal mt-2 ml-8">
                    <li>
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
                  <h2 className="text-3xl ml-4 font-bold underline mb-6 mt-3">
                    Faculty Development Programmes
                  </h2>
                </div>
                <ol className="list-decimal ml-8">
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
                  <h2 className="text-3xl ml-4 font-bold underline mb-6 mt-3">
                    Workshops and Seminars
                  </h2>
                </div>
                <ol className="list-decimal ml-8">
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
                  <h2 className="text-3xl ml-4 font-bold underline mb-6 mt-3">
                    Skill Development Program
                  </h2>
                </div>
                <ol className="list-decimal ml-8">
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
                  <h2 className="text-3xl ml-4 font-bold underline mb-6 mt-3">
                    Summer Internship Programme
                  </h2>
                </div>
                <ol className="list-decimal ml-8">
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
                    width: "750px",
                    height: "420px",
                  }}
                  className="bg-center ml-auto mr-auto bg-no-repeat mt-[3%] bg-cover h-10  rounded-3xl border-2 border-black"
                  // className="rounded-3xl border-black border-2 h-[400px] mr-10 ml-64"
                ></div>
              </figure>
              <figure className="flex pr-4 pl-4 pb-2">
                <div
                  style={{
                    backgroundImage:
                      "url(/images/ImgPages/Chemistry/event_image_2.jpg)",
                    width: "750px",
                    height: "420px",
                  }}
                  className="bg-center ml-auto mr-auto bg-no-repeat mt-[3%] bg-cover h-10  rounded-3xl border-2 border-black"
                  // className="rounded-3xl border-black border-2 h-[400px] mr-10 ml-64"
                ></div>
              </figure>
              <figure className="flex pr-4 pl-4 pb-2">
                <div
                  style={{
                    backgroundImage:
                      "url(/images/ImgPages/Chemistry/event_image_3.jpg)",
                    width: "800px",
                    height: "1100px",
                  }}
                  className="bg-center ml-auto mr-auto bg-no-repeat mt-[3%] bg-cover h-10  rounded-3xl border-2 border-black"
                  // className="rounded-3xl border-black border-2 h-[400px] mr-10 ml-64"
                ></div>
              </figure>



            </div>
          
          <div className=" flex  flex-col ml-4 mt-10 ">
            <Chemistry/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Chemevents;