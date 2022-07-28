import React, { useState } from "react";
import Botanybanner from "../Botany/Botanybanner.jsx";
import Departments from "../../../../Components/Sidebar/Departments";
import bot_depart from "../../../../Dummy_data/ImgPages/Botany/Botany_Depart.png";
import Botany from "../../../../Components/DepartSIde/Botany.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

function About() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <Botanybanner />
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
                <Botany />
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
          <Botany />
        </div>
        <div className="w-full mr-16">
          <h2 className="md:text-3xl text-lg uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center ml-4 items-center ">
            About the department
          </h2>

          <div className="flex flex-row">
            <div className="flex flex-col">
              <figure className="flex pr-4 pl-4 pb-2">
                <div
                  style={{
                    backgroundImage:
                      "url(/images/ImgPages/Botany/Botany_Depart.png)",
                  }}
                  className="bg-center ml-auto mr-auto lg:w-[700px] w-[250px] h-[190px] lg:h-[300px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  // className="rounded-3xl border-black border-2 h-[400px] mr-10 ml-64"
                ></div>
              </figure>
              <div className="pr-3 pl-3 flex mr-1 mb-3 ml-2">
                <p className="md:text-lg text-sm text-justify font-medium ">
                  The Botany Department of Daulat Ram College, one of the
                  leading Departments of Delhi University was established in
                  1968 and completed 50 glorious years of its existence in 2018.
                  The department is a part of Star College Project, awarded by
                  the Department of Biotechnology, Govt. of India since 2011.
                  With its competent and dedicated faculty, the department is
                  actively involved in devising innovative means of teaching and
                  research in plant sciences. Based on the academic and research
                  performance of students and faculty members, Department of
                  Botany along with four other Science departments of the
                  College, was awarded prestigious{" "}
                  <span>
                    <strong>“Star College Status”</strong>{" "}
                  </span>
                  by DBT, Govt. of India in 2014 . The Department has well
                  equipped, projector fitted, air conditioned classrooms,
                  Laboratories, Museum, Culture room with tissue culture
                  facility, Bioinformatics lab and a Botanical garden. Keeping
                  in pace with the recent advancements in the field of plant
                  sciences and the revised undergraduate curriculum thereof, the
                  department regularly organizes workshops, seminars,
                  conferences and skill enhancement courses for students as well
                  as faculty members. For a better and in-depth understanding of
                  the subjects taught in the classroom, the department organizes
                  educational trips to various Research Institutes, Biodiversity
                  Parks, and Industries for students. Apart from academics, the
                  students are given a chance to showcase their talent and
                  creativity by participating in various co-curricular and
                  extra-curricular activities of the botanical society{" "}
                  <strong>“Vasundhara”</strong>.
                </p>
              </div>

              <div className="pr-3 pl-3 flex mr-1 ml-2">
                <span className="md:text-lg text-sm text-justify font-medium ">
                  The annual inter college botanical festival{" "}
                  <strong>“Orchidz”</strong> is also celebrated with great
                  enthusiasm. <strong>“Liana”,</strong> the botanical society
                  magazine gives the student a platform to learn and contribute
                  about interesting and latest events in the field of plant
                  sciences. Thus, the three year CBCS course in B.Sc. (Hons)
                  Botany and B.Sc. Life Science not only gives the student an
                  in-depth knowledge about the subject, but also equips them to
                  face the new challenges in the field of plant science
                  research.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
