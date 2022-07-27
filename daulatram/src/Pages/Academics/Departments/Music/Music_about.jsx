import React, {useState} from "react";
import Musicbanner from "../Music/Musicbanner.jsx";
import Music from "../../../../Components/DepartSIde/Music.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Music_about() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <Musicbanner />
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
                <Music />
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
          <Music />
        </div>
        <div className="w-full mr-16">
          <h2 className="md:text-4xl text-lg uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center ml-4 items-center">
            About the department
          </h2>

          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <div
                    style={{
                      backgroundImage: "url(/images/ImgPages/Music/Theme_pic.jpg)",

                    }}
                    className="bg-center ml-auto mr-auto lg:w-[700px] w-[250px] h-[190px] lg:h-[450px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                  ></div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="md:text-lg text-sm text-justify font-medium">
                      The music department was established in 1971 and since
                      then its dedicated faculty has been working for academic
                      and cultural growth of the college. It oﬀers B. A.
                      Programme course in music and teaches Classical Music
                      (Vocal) and Classical Instrumental (Sitar) covering
                      diﬀerent areas of Hindustani Music. The department also
                      registers students for three years B.A. Honors course and
                      two years M.A. Music course for which classes are held in
                      the faculty of music, University of Delhi. The course
                      familiarizes the students with the fundamentals of various
                      ragas, history of music and life sketches of great
                      musicians and musicologists. It helps them to develop
                      their potential in music and opens up channels for entry
                      into post graduation, M.Phil, Ph.D in Music and teaching
                      career later on.
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

export default Music_about;
