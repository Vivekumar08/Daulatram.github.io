import React from "react";
import Histbanner from "../History/Histbanner.jsx";
import History from "../../../../Components/DepartSIde/History.jsx";
function Hist_about() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Histbanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col mt-12 ml-2">
          <History />
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
                      backgroundImage:
                        "url(/images/ImgPages/History/History_depart_img.JPG)",
                      width: "700px",
                      height: "450px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"
                  ></div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium mt-3">
                      The department of history was set up in the year 1960,
                      when the discipline was offered in the B.A. Programme
                      course. Subsequently, it was upgraded as a fully-fledged
                      Honours course. Today the department also offers many
                      interdisciplinary papers to students from other
                      departments in the form of general elective and skill
                      enhancement courses. The syllabus offered by the
                      department covers both Indian and World history from
                      antiquity to the contemporary period. The department has
                      dedicated and qualified teachers, with a variety of
                      research and teaching specialization.
                    </span>
                  </div>
                  <br />
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium ">
                      The teaching methodology is interdisciplinary with a
                      hands-on approach, with emphasis on interactive classes,
                      group discussions, field trip and movie screenings.
                      Students are encouraged to go beyond the textbooks for
                      completing their projects and assignments. Audio-visual
                      media is used during the lectures and tutorial classes.
                      The department is visited by many eminent historians and
                      scholars every semester, who delivers lectures and
                      interact with the students. We also have a well-stocked
                      library with books in English and Hindi.
                    </span>
                  </div>
                  <br />
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="text-lg text-justify font-medium ">
                      The department also organizes regularly various skill
                      enhancement courses. We have collaborated with
                      institutions like INTACH, and encourage students to apply
                      for internships in the National Archive, National Museum,
                      Nehru Memorial Museum and Library,
                      Archaeological Survey of India and other organizations.
                      While research and teaching are obvious career options for
                      History students, the course also provides foundation for
                      other career opportunities in Social work, Tourism,
                      Heritage Management, Publication, Journalism and
                      Bureaucracy. Besides, students could also embark on highly
                      specialized courses after graduating in History like
                      archaeology, numismatics, epigraphy, Indology, museology,
                      archival studies, and art conservation, preservation and
                      management. 
                    </span>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hist_about;
