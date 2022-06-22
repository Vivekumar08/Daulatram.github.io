import React from "react";
import DepartBanner from "../../../../Components/Banners/DepartBanner";
import Departments from "../../../../Components/Sidebar/Departments";

function Studentsachieve() {
  return (
    <>
      <div className=" flex flex-col">
        <div className="">
          <DepartBanner />
        </div>
        <div className="flex flex-row">
          <div className="w-[350px]">
            <Departments />
          </div>
          <div className="ml-3 ">
            <div className="w-[1100px]">
              <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
                Students Achievements
              </h2>
            </div>
            <div className="flex flex-row">
              <div>
                <div className="mr-5">
                  <div>
                    <div>
                      <h2 className="text-3xl ml-4 font-bold underline mb-6">
                        Awards
                      </h2>
                      <p className="text-1xl ml-4 font-bold text-xl">
                        Academic :
                      </p>
                      <ol className="list-decimal mt-2 ml-8">
                        <li>
                          Shefali Jain, Best poster, DST Inspire Science
                          Conclave 2019: Research on the Frontier, Miranda
                          House, 16 January to 18 January 2019.
                        </li>

                        <li>
                          Pratiksha, Best poster, DBT Biotechnology meet,
                          Miranda house 2nd august 2019
                        </li>

                        <li>
                          {" "}
                          Aakanshya satpathy, All arounder, To recognise all
                          round excellence in academic and extracurricular
                          activities, Daulat Ram College, Feb, 2019.
                        </li>
                      </ol>
                    </div>
                    <div>
                      <h2 className="text-3xl ml-4 font-bold underline mb-6 mt-3">
                        Student's Progression
                      </h2>
                    </div>
                    <ol className="list-decimal ml-8">
                      <li>AAKANKSHA MAKOL 2016 batch Medical analyst.</li>
                      <li>Ridhima Batra is self employed.</li>
                      <li>Teena Bajaj masters in biochemistry.</li>
                      <li>
                        Soanli Gupta (2019) Pursuing Integrated M.Sc-PhD from
                        IISER Pune.
                      </li>
                      <li>
                        5 Shefali Anand (2015) Assistant professor in Jain
                        Univerity.
                      </li>
                      <li>6 Simran Kaur (2013) Pursuing PhD.</li>
                      <li>
                        Parul Mittal (2016) MSc biotechnology and now pursuing
                        PhD from INMAS and DU.
                      </li>
                      <li>
                        Priyanka Gupta (2016) Post graduate diploma in Dietetics
                        and Public Health Nutrition,M.Sc Food and
                        Nutrition,Certified Diabetes Educator, Lactation.
                      </li>
                      <li>
                        Anukampa Pandey (2013) MSc (Bioinformatics), CSIR-NET,
                        Assistant Professor, Banaras Hindu University , BHU
                        TRBB.
                      </li>
                      <li>Jyoti arora, pursuing PhD.</li>
                      <li>Priya Bhatnagar, PhD Scholar.</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className=" flex  flex-col ml-4 mr-16 mt-10 ">
                <a href="/biochem/faculty">
                  <span className=" bg-[#000080] rounded-lg p-2 w-[220px] flex flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
                    Faculty
                  </span>
                </a>
                <span className="  bg-[#000080] rounded-lg p-2 flex w-[220px] flex-row justify-center mb-2 mt-2 text-white hover:bg-blue-700">
                  <a href="/biochem/programmesoffer">Programmes Offered</a>
                </span>
                <span className="  bg-[#000080] rounded-lg p-2 flex flex-row w-[220px] justify-center mb-2 mt-2 text-white hover:bg-blue-700">
                  <a href="/biochem/association">Association</a>
                </span>
                <span className="  bg-[#000080] rounded-lg p-2 flex flex-row w-[220px] justify-center mb-2 mt-2 text-white hover:bg-blue-700">
                  <a href="/biochem/studentsachieve">Student's Achievements</a>
                </span>
                <span className=" bg-[#000080] rounded-lg p-2 flex flex-row w-[220px] justify-center mb-2 mt-2 text-white hover:bg-blue-700">
                  <a href="/biochem/events">Events</a>
                </span>

                <span className="  bg-[#000080] rounded-lg p-2 flex flex-row w-[220px] justify-center mb-2 mt-2 text-white hover:bg-blue-700">
                  <a href="/biochem/laboratorystaff">Laboratory Staff</a>
                </span>

                <span className="  bg-[#000080] rounded-lg p-2 flex flex-row w-[220px] justify-center mb-2 mt-2 text-white hover:bg-blue-700">
                  <a href="/biochem/publications">Publications</a>
                </span>

                <span className=" bg-[#000080] rounded-lg p-2 flex flex-row w-[220px] justify-center mb-2 mt-2 text-white hover:bg-blue-700">
                  <a href="/biochem/awards">Awards</a>
                </span>

                <span className=" bg-[#000080] rounded-lg p-2 flex flex-row w-[220px] justify-center mb-2 mt-2 text-white hover:bg-blue-700">
                  <a href="/biochem/research">Research</a>
                </span>
                <span className="  bg-[#000080] rounded-lg p-2 flex flex-row w-[220px] justify-center mb-2 mt-2 text-white hover:bg-blue-700">
                  <a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                    Time Table
                  </a>
                </span>
                <span className="  bg-[#000080] rounded-lg p-2 flex flex-row w-[220px] justify-center mb-2 mt-2 text-white hover:bg-blue-700">
                  <a href="https://drive.google.com/file/d/1GagyR2UNzjijUt-JLiLxulvspvfLdEZF/view?usp=sharing">
                    Photo Gallery
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Studentsachieve;
