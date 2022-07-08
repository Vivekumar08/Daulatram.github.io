import React from "react";
import Sanskrit from "../../../../Components/DepartSIde/Sanskrit";
import Sansbanner from "./Sansbanner";
function Sans_about() {
  return (
    <div className=" flex flex-col">
      <div className="">
        <Sansbanner />
      </div>
      <div className="flex flex-row">
        <div className=" flex  flex-col mt-12 ml-2">
          <Sanskrit />
        </div>
        <div className="w-full mr-16">
          <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
            About the department
          </h2>

          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Sanskrit/sans_depart.jpg)",
                      width: "700px",
                      height: "400px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-auto mb-4 rounded-3xl border-2 border-black"
                  />

                  <div className="pr-3 pl-3 flex mr-1 ml-2 mb-10">
                    <span className="text-lg text-justify font-medium mt-3">
                      The Department of Sanskrit of Daulat Ram College is among
                      the first departments of Sanskrit in the University of
                      Delhi. It was established with an aim to promote Sanskrit
                      – the most scientific and richest language. The department
                      offers Sanskrit as Honours and Programme courses and also
                      as the interdisciplinary Ability Enhancement and Generic
                      Elective Courses in both English and Hindi mediums.
                      Sanskrit is not merely a language but a subject also. It
                      is the foundation of Indian Sciences, Culture, Philosophy,
                      Religion, Literature and Linguistics. The department
                      provides lectures as well as tutorials on the Vedic and
                      Classical literature, Indian Polity and Medicine, Grammar
                      and Linguistics, Reasoning and Ontology, Aesthetics and
                      Indian theatre, Ayurveda, Epigraphy and Archaeology, etc.
                      It introduces the various genres of Sanskrit Literature,
                      be it Vedic or Classical, novels, Ghazals or Haikus. The
                      department believes in adopting the modern ICT based
                      approach and pedagogy to impart valuable knowledge
                      contained in Sanskrit Literature. It is proactive in
                      organizing events like seminars, Skill Development
                      Programs, Workshops, Intercollege competitions,
                      educational trips and lectures and talks of eminent
                      speakers to promote academic as well as all round
                      development of the students. Shreyas – the students
                      association is highly active and aims at encouraging team
                      spirit and instilling leadership qualities in the
                      students. The students get essential counseling for career
                      opportunities within the department. The various career
                      avenues available to the students are Civil Services,
                      Journalism, Law, Human Resource Management, Translation
                      work, Architecture, Astrology, Epigraphy, Manuscriptology,
                      Drama and Social Work etc. The department also holds
                      tutorials for the Post-Graduate students which are
                      supplementary to the lectures held in the Department of
                      Sanskrit, University of Delhi.
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

export default Sans_about;
