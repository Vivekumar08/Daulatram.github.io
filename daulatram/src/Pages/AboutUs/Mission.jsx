import React from "react";
// import App from "./App";
import about1 from "../../Dummy_data/ImgPages/About/about1.png";
import about2 from "../../Dummy_data/ImgPages/About/about2.png";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Banner from "../../Components/Banners/Banner";


const Mission = () => {
  return (
    <>
      <div className=" flex flex-col">
        <div className="">
          <Banner />
        </div>
        <div className="flex flex-row">
          <div className="w-[350px]">
            <Sidebar />
          </div>
          <div className="w-[1100px]">
            <h2 className="text-4xl font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              College Profile Mission and Vision
            </h2>

            <figure className="flex p-4">
              <img
                src={about1}
                alt="images"
                className="rounded-3xl border-black border-2 h-[250px] mr-10"
                width={250}
              />

              <span className=" card-description text-lg text-justify font-medium ">
                Daulat Ram College is a premier educational institution in Delhi
                founded by an educationist late Shri Daulat Ram Gupta in 1960.
                It is a prestigious women’s college engaged in imparting liberal
                education to women. The college, a large constituent college of
                the University of Delhi, originally started as “Pramila College”
                at 22, Tilak Marg with thirteen members of teaching and two
                non-teaching staff with about 350 students. In 1964, the college
                shifted to its present premises in North Delhi University campus
                and was renamed as Daulat Ram College. The institution has since
                grown into a full-fledged extended college of University of
                Delhi. The college has acquired a strong identity and has
                evolved into a prestigious women’s college with its own distinct
                culture and traditions. It imparts education towards degrees at
                the bachelor’s level in arts, commerce and science and Masters
                level in arts.
              </span>
            </figure>
            <figure className="flex p-4">
              <span className="card-description text-justify text-lg font-medium ">
                The courses in science were introduced in 1968 which led to the
                construction of the science block and well-equipped science
                laboratories. The commerce and M.A. courses in many subjects, as
                well as new courses in B.A. (H) and B.A. (Pass) were added
                subsequently. Further expansion of the college took place with
                the introduction of B.Sc. (H) in Biochemistry, Chemistry and
                Mathematics, addition of Nutrition and health Education (NHE)
                and Office Management and secretarial practice (OMSP) and
                subjects in B.A. (Pass). The college building which was
                constructed in the 1960s was further expanded to cater to the
                growing needs of the students. A new block of tutorial rooms, a
                modern seminar hall, new class rooms and science laboratories
                for Physics, NHE and Biochemistry were added. Subsequently, a
                computer lab open to all students with an internet facility was
                added. Currently the college has add-on courses in foreign
                languages. At present there are 19 departments with about 4200
                students on rolls, about 180 teaching staff and 75 non-teaching
                staff.
              </span>
              <img
                src={about2}
                alt="images"
                className=" rounded-3xl h-[250px] border-black border-2 ml-10 mr-8"
              />
            </figure>
            <div className="p-3 flex  m-2">
              <span className="text-lg text-justify font-medium ">
                The college has a well-equipped computerized library, facility
                for gymnastics, table tennis, athletics and other games and
                holds leading positions both in academics and sports. Recently a
                well-equipped Conference Hall with a capacity of 200 students
                has been built. The college holds a leading position both in
                academics as well as in co-curricular activities such as
                dramatics, music, debates and sports. Students can participate
                in various societies, N.S.S., Sports and N.C.C. To help the
                students to cope with the new environment of the college and
                many other contemporary issues & problems, the Psychology
                Department runs a Counselling Centre. The In-House Skill
                Development Programmes being offered by the college equip the
                students to deal with daily challenges and create an identity
                for themselves.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
