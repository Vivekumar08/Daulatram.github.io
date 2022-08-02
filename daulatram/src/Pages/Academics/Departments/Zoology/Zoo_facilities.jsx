import React, { useState } from "react";

import research_zoo from "../../../../Dummy_data/ImgPages/Zoology/Research_zoo.pdf";

import Zoobanner from "./Zoobanner";
import Zoology from "../../../../Components/DepartSIde/Zoology";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Zoo_facilities() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <Zoobanner />
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
          <h2 className="md:text-4xl text-xl sm:text-xl uppercase font-bold mb-5 mt-[7%] flex flex-row ml-3 md:justify-center items-center  ">
            Research & Facilities
          </h2>

          <div className="pr-3 pl-3 flex mr-1 ml-4">
            <span className="md:text-xl md:ml-0 ml-9 text-lg underline text-justify font-bold mb-2 mt-3">
              Drosophila Resource Center, Department of Zoology
            </span>
          </div>

          <div className="ml-6 ">
            <ul className="md:text-base text-sm list-decimal ml-10 mt-2  mr-5 text-justify mb-4 ">
              <li>
                The Department of Zoology has developed resource centers for two
                animal model organisms: Drosophila melanogaster (Banana fruit
                fly) and Danio rerio (Zebra fish)
              </li>
              <li>
                The Department of Biotechnology, (GOI) expert committee
                appreciated the work being carried out on Drosophila, and
                awarded STAR status and special grant to be a resource centre
                for training students and staff of our college and different
                colleges of Delhi University. The center was established in the
                year 2011—
              </li>
              <li>
                The stock centre is maintaining wild type and different mutants
                of Drosophila such as vestigial, dumpy , cross-veinless, curly,
                amongst the wing mutations; white, white- apricot, sepia , bar
                ,vermillion amongst the eye mutations; aristapedia,
                antennapedia, the homoeitic mutants; sepia- vestigial,
                sepia-curl, cross- veinless – white apricot, the double mutants.
                ,vestigial ,dumpy , cross-veinless wings, forked brisles
              </li>
              <li>
                Main Activities include maintenance of Drosophila Wild type
                flies and Mutants; training to students and faculty of our
                college as well as from other colleges of Delhi
              </li>
              <li>
                Training provided University on colony maintenance, mutant
                studies collection of eggs, study of various Developmental
                stages, chromosome preparations. Analysis of chorionic, larval,
                pupal moult proteins by simple SDS PAGE, eye pigment analysis by
                simple paper chromatography; demonstration of Mendelian Laws and
                other genetical studies
              </li>
              <li>
                The Animal ethics Committee has totally banned dissections,
                experiments with live organisms at the Undergraduate level as a
                result; students of Zoology and Life Sciences have no choice
                except end up doing dry Lab Experiments.
              </li>
              <li>
                To bring back a feel of handling live animals, an effort was
                made to introduce Drosophila as a model organism with some basic
                experiments designed to study various developmental Stages,
                Protein profiles, Mitotic Chromosomes, Salivary Gland
                Chromosomes, Mendelian Genetics, Evolutionary Biology etc.
              </li>
              <li>Learning is more effective when it is an active process</li>
              <li>
                Regular Hands on Training to students of Zoology, Life sciences
                and Botany Honours of the college
              </li>
              <li>
                The Drosophila Center also provides all strains to other
                Colleges
              </li>
              <li>
                The students from Life sciences. Zoology, Botany from our
                college are trained throughout the academic session in handling
                the flies, maintenance of the stocks, carry out simple
                experiments on Mendelian inheritance, Evolutionary biology,
                Developmental Biology etc
              </li>
              <li>
                A similar hands on training is also given to interested students
                from other colleges. The coordinator Dr. Chitra Bhasin has
                conducted five workshops in the college on Drosophila basics and
                transmission genetics and developmental biology , chromosome
                preparations, , behavior, developmental genetics etc.
              </li>
            </ul>
            <img
              style={{
                backgroundImage: "url(/images/ImgPages/Zoology/r1.jpg)",
              }}
              className="bg-center ml-auto mr-auto lg:w-[900px] w-[250px] h-[190px] lg:h-[450px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
            />
            <img
              style={{
                backgroundImage: "url(/images/ImgPages/Zoology/r2.jpg)",
              }}
              className="bg-center ml-auto mr-auto lg:w-[900px] w-[250px] h-[190px] lg:h-[450px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
            />
          </div>
          <div>
            <div className="pr-3 pl-3 flex mr-1 ml-4">
              <span className="md:text-xl md:ml-0 ml-9 text-lg underline text-justify font-bold mb-2 mt-3">
                Reproductive Biology lab
              </span>
            </div>
            <div className="pr-3 pl-3 flex mr-1 ml-6 md:ml-4">
              <span className=" md:text-lg text-sm text-justify ml-8 font-medium md:ml-0">
                Our Lab research efforts are focused on understanding key
                reproductive health problems and causing factors for these in
                young girls. We have completed the DU Innovation Project
                “Bio-Markers of Heat Stress & Acclimation” in 2015 and Star
                Innovation Project on “Incidence of PCOS in Young girls” in
                2019. Our research have been fostered by doing projects with
                undergraduate students. We have successfully organized symposium
                and awareness Health camps in college for our students. Our
                students were trained through various workshops for excellence
                in public health data collection and analysis. We have presented
                our work in form of poster, oral presentation in various
                conferences and symposium and published research paper in
                scientific journals.
              </span>
            </div>
            <div className="pr-3 pl-3 flex mr-1 ml-4">
              <span className=" md:text-lg text-sm text-justify md:ml-0 ml-10 font-medium">
                Professor Rita Singh from Department of Zoology, North Campus of
                Zoology was our mentor who guided us in our PCOS project. We
                have made collaboration with health clinics and Gynaecoligist
                for our research.
              </span>
            </div>
            <div className="pr-3 pl-3 flex mr-1 ml-4">
              <span className=" underline text-justify md:ml-0 ml-9 font-bold mb-1 mt-3">
                List of Symposium and Health Camp Organized
              </span>
            </div>
            <div className="ml-4 ">
              <ol className="list-inside md:text-base text-sm list-decimal mt-2 md:ml-10 ml-12 mr-5 text-justify mb-3">
                <li>Bone Mineral Density Camp March 2014</li>
                <li>Reproductive Health Camp April 2016</li>
                <li>National Symposium and Awareness Programme March 2017</li>
                <li>
                  {" "}
                  Sustainable Health Programe on PCOS Awareness September 2016
                </li>
                <li>
                  Skill Development Programme on “Life Style Management” July 3
                  rd -15 th 2017
                </li>
              </ol>
            </div>
            <div className="pr-3 pl-3 flex mr-1 ml-4">
              <span className="md:ml-0 ml-9 underline text-justify font-bold mb-1 mt-3">
                List of Symposium and Conferences attended for Oral, Poster, and
                Paper presentation.
              </span>
            </div>
            <div className="ml-4 ">
              <ol className="list-inside md:text-base text-sm list-decimal mt-2 md:ml-10 ml-12 mr-5 text-justify mb-4">
                <li>
                  “National Symposium on Reproductive Health in India: Cocerns &
                  Awareness” Deshbandhu College, Feb 2016.
                </li>
                <li>
                  {" "}
                  National Seminar on “A paradigm shift towards Enpowerment of
                  Women” Kalindi college, University of Delhi.
                </li>
                <li>
                  {" "}
                  National symposium on “Lifestyle and Reproductive Health
                  Challenges inYoung Girls”, Daulat Ram College, March 29 2017.
                </li>
                <li>
                  {" "}
                  National Conference on Communicable Diseases, Zakir Hussain
                  College, Jan 31-1 Feb 2018
                </li>
                <li>
                  Lifestyle risk factors and reproductive health in young women,
                  S.S Jain Subodh PG (Autonomous) College, Jaipur
                </li>
              </ol>
              <img
                style={{
                  backgroundImage: "url(/images/ImgPages/Zoology/r3.JPG)",
                }}
                className="bg-center ml-auto mr-auto lg:w-[900px] w-[250px] h-[190px] lg:h-[450px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
              />
              <img
                style={{
                  backgroundImage: "url(/images/ImgPages/Zoology/r5.JPG)",
                }}
                className="bg-center ml-auto mr-auto lg:w-[900px] w-[250px] h-[190px] lg:h-[450px] bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zoo_facilities;
