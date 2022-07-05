import React from "react";
import Musicbanner from "../Music/Musicbanner.jsx";
import Music from "../../../../Components/DepartSIde/Music.jsx";
function Music_about() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Musicbanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col mt-12 ml-2">
          <Music />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            About the department
          </h2>

          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <div
                    style={{
                      backgroundImage: "url(/images/ImgPages/Music/Theme_pic.jpg)",
                      width: "700px",
                      height: "450px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"
                  ></div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium mt-3 mb-10">
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
