import React, {useState} from "react";
import Botanybanner from "./Botanybanner.jsx";
import Departments from "../../../../Components/Sidebar/Departments";
import Botany from "../../../../Components/DepartSIde/Botany";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Botany_Association() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <Botanybanner />
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
        <div className="ml-auto mr-auto">
          <div className="w-full ml-auto mr-auto">
            <h2 className="md:text-4xl text-lg sm:text-lg uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center md:justify-center items-center ">
              Association
            </h2>
          </div>
          <div className="flex flex-row justify-between ">
            <div className=" ">
              <div>
                <p className=" card-description lg:text-3xl md:text-2xl sm:text-lg flex pr-4 pl-4 mt-10 text-blue-900 text-justify justify-center font-bold ">
                  Botanical Society – “Vasundhara”
                </p>
              </div>
              {/* <div> */}
              <div className="pr-4 pl-4 mt-5 mr-14">
                <span className="md:text-base lg:text-lg text-sm text-justify font-medium">
                  <p>
                    {" "}
                    The activities of Botanical Society “Vasundhara” are
                    initiated every year at the beginning of the new academic
                    session by conducting the election for the posts of its
                    office bearers. The society formally starts with an
                    inaugural lecture on{" "}
                    <strong>
                      {" "}
                      “Our Nature and Wildlife Heritage: Past, Present & Future
                      ”
                    </strong>{" "}
                    by one of our bright alumnae{" "}
                    <strong>Ms. Radha Sharma,</strong> Co-founder and Director,
                    Earth Calling Expeditions, Mylapore, Chennai.
                  </p>
                </span>
              </div>

              <div className="pr-4 pl-4 mt-5 mr-14">
                <span className="md:text-base lg:text-lg text-sm text-justify font-medium">
                  <p>
                    The speaker shared her inspiring personal experiences about
                    wildlife safari’s. She highlighted major issues related to
                    Tiger conservation and importance of tigers as Umbrella
                    species in forest ecosystems. With an aim of knowledge
                    enhancement and holistic development of students, various
                    co-curricular and extra-curricular activities such as Paper
                    Presentation, Botanical Quiz, Nature through lens, Botanical
                    Rangoli, Phytodiversity, Sketching Competition are organized
                    throughout the year. The annual inter-college botanical
                    festival <strong>“Orchidz” </strong> is celebrated with
                    great fervour that receives active and overwhelming
                    participation from the students across Delhi University.
                  </p>
                </span>
              </div>
              <div>
                <div
                  style={{
                    backgroundImage: "url(/images/ImgPages/Botany/Fest_1.jpg)",

                  }}
                  className="bg-center flext flex-row justify-center bg-no-repeat mt-[1%]  bg-cover lg:w-[70%] mr-28 w-[270px] h-[190px] lg:h-[470px] ml-20 md:ml-28 mb-4 rounded-2xl border-2 border-black"
                ></div>
              </div>
              <div>
                <div
                  style={{
                    backgroundImage: "url(/images/ImgPages/Botany/Fest_2.jpg)",

                  }}
                  className="bg-center flext flex-row justify-center bg-no-repeat mt-[1%]  bg-cover lg:w-[70%] mr-28 w-[270px] h-[190px] lg:h-[470px] ml-20 md:ml-28 mb-4 rounded-2xl border-2 border-black"
                ></div>
              </div>
              <div>
                <div
                  style={{
                    backgroundImage: "url(/images/ImgPages/Botany/Fest_3.jpg)",
                    
                  }}
                  className="bg-center flext flex-row justify-center bg-no-repeat mt-[1%]  bg-cover lg:w-[70%] mr-28 w-[270px] h-[190px] lg:h-[900px] sm-ml-28 ml-20 md:ml-28 mb-4 rounded-2xl border-2 border-black"
                ></div>
              </div>

              <div className="pr-4 pl-4 mt-5 mr-14">
                <span className="md:text-base lg:text-lg text-sm text-justify font-medium">
                  <p>
                    The most important event of the fest is{" "}
                    <strong>Paper Reading Competition</strong> for rolling{" "}
                    <strong>Deepika Vigyan Trophy</strong>. Another highlight of
                    the society is the publication of its annual magazine{" "}
                    <strong>LIANA</strong>, compilation of articles contributed
                    by students and faculty.
                  </p>
                </span>
              </div>
              <div>
                <div
                  style={{
                    backgroundImage: "url(/images/ImgPages/Botany/Liana.png)",

                  }}
                  className="bg-center flext flex-row justify-center bg-no-repeat mt-[1%]  bg-cover lg:w-[70%] w-[270px] h-[350px] lg:h-[1200px] ml-20 md:ml-28  mb-4 rounded-2xl border-2 border-black"
                ></div>
              </div>
              {/* </div> */}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Botany_Association;
