import React, {useState} from "react";
import Zoology from "../../../../Components/DepartSIde/Zoology";
import Zoobanner from "./Zoobanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Zoo_about() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <Zoobanner />
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
                <Zoology />
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
          <Zoology />
        </div>
        <div className="w-full mr-16">
          <h2 className="md:text-4xl text-lg uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center ml-4 items-center">
            About the department
          </h2>

          <div className="flex flex-row">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="md:text-lg text-sm text-justify font-medium">
                      Zoology Department was established in 1968 and currently
                      holds Star status by Department of Biotechnology,
                      Government of India. Department supports undergraduate
                      teaching for both Zoology (Hons) and life science
                      (program) courses. In the Choice Based Credit System,
                      Department is also offering generic elective course for
                      Botany, Biochemistry and Chemistry departments &
                      Skill-enhancement courses for Daulat Ram College students.
                      Department introduces the students to the fascinating
                      world of animals by providing a ‘bird’s –eye view as per
                      Delhi University syllabus prescribed by the different
                      courses of Zoology.
                    </span>
                  </div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2">
                    <span className="md:text-lg text-sm text-justify font-medium">
                      Zoology Department facilitates learning in classical and
                      modern systematic aspects of Animal Diversity to the
                      students of Zoology (Hons) and life science
                      undergraduates. The department has an active Zoological
                      Society which organizes special lectures, debates,
                      excursions to wild life National Parks, Sanctuaries,
                      National Laboratories and Academic Institutions. On
                      completion of the Honours course, students have the choice
                      to pursue a post graduate degree in fields like Biomedical
                      Science, Zoology, Immunology, Biotechnology, Entomology,
                      Fisheries, Agriculture, Genetics, Molecular Biology,
                      Microbiology, Environmental Management or Bioinformatics
                      and pursue Ph.D. Programs. Our students have great success
                      stories, many of them have become professors at different
                      central universities and CSIR laboratories. Many of our
                      students have also joined Indian Administrative Services
                      or US federal services and settled abroad. Apart from
                      teaching faculties of our department are also involved in
                      performing basic research, mentoring students to undertake
                      projects and present their work in national and
                      international conferences. Students from the department
                      get an opportunity to get training in Immunology at NII,
                      New Delhi, under Science-Setu programme – MOU signed with
                      DBT, National institute of Immunology and college.
                    </span>
                  </div>
                  <div className="pr-3 pl-3 flex mr-1 ml-2 mb-5">
                    <span className="md:text-lg text-sm text-justify font-medium">
                      Department has an established a Drosophila Resource Center
                      under the DBT-star college and two innovation projects
                      funded by DU innovation project and DU star innovation
                      project with Dr. Chitra Bhasin. These two projects
                      focusses on Zebra fish Danio reiro, a model organism.
                      Zebra fish project are in collaboration with Dept. of
                      Biochemistry of Daulat Ram College and IGIB-Okhla campus.
                      The zoology department also has DU innovation projects on
                      e-literacy and Polycystic ovarian syndrome with Anju Jain
                      & Dr. Jyoti Taneja as coordinators. The Department offers
                      research opportunity for undergraduate students in Zebra
                      Fish, Drosophila research Centre, Public health research
                      and Brain Research. Entrants can explore their talents
                      through various academics and extracurricular activities
                      organized by active Zoological Society.
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

export default Zoo_about;
