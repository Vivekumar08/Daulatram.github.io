import React, { useState } from "react";
import DepartBanner from "../../../../Components/Banners/DepartBanner";
import Biochemistry from "../../../../Components/DepartSIde/Biochemistry";
import Departments from "../../../../Components/Sidebar/Departments";
import Biochemistry1 from "../../../../Dummy_data/ImgPages/Biochemistry/Biochemistry1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const Biochem = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="">
        <DepartBanner />
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
                  <Biochemistry />
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
          <Biochemistry />
        </div>
        <div className=" w-full mr-16 ">
          <div className=" ">
            <h2 className="md:text-4xl text-lg  uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
              About the department
            </h2>
            <div className="flex flex-row ">
              <div>
                <div
                  style={{
                    backgroundImage:
                      "url(/images/ImgPages/Biochemistry/Biochemistry1.jpg)",
                  }}
                  className="bg-center bg-no-repeat mt-[1%]  bg-cover lg:w-[600px] mr-auto w-[250px] h-[190px] lg:h-[450px] ml-auto mb-4 rounded-2xl border-2 border-black"
                ></div>
                <div className="">
                  <div className="pr-3 pl-3 flex  ml-2">
                    <span className=" md:text-lg text-sm text-justify font-medium md:flex">
                      The Department of Biochemistry was started in the year
                      1988 and offers a BSc (Hons) course which is unique to
                      only a few colleges in India. This unique course covers
                      areas in basic Biochemistry such as biomolecules,
                      proteins, enzymology and intermediary metabolism as well
                      as advanced areas in Biology such as cell biology,
                      physiology, hormone biochemistry, nutritional
                      biochemistry, biochemistry of diseases, immunology,
                      molecular biology, genetics and recombinant DNA
                      technology. The department has well equipped laboratories
                      wherein all modern biology experiments can be conducted.
                      In addition a Drosophila Resource Centre and Zebrafish lab
                      facility has been established, where students can
                      undertake short term training, and research
                      internships.These advanced research facilities have been
                      established under the Star College Project Funds granted
                      as part of the Star Status awarded to the college science
                      departments, by the Department of Biotechnology, GOI.
                    </span>
                  </div>{" "}
                  <br />
                  <div className="pr-3 pl-3 flex ml-2">
                    <span className="md:text-lg text-sm text-justify font-medium ">
                      Over the years, the department has been awarded projects
                      from the Department of Science and Technology, DU
                      Innovation Projects, Star Innovation projects and DRDO to
                      faculty members. Recently, Bioinformatics lab has been a
                      recent addition to the ever growing biochemistry
                      department.
                    </span>
                  </div>
                  <div className="p-3 flex ml-2">
                    <span className="md:text-lg text-sm text-justify font-medium ">
                      Students are exposed to scientific research conducted in
                      various prestigious institutes like IISER Pune, IISER
                      Mohali, NBRC, NIN Hyderabad, CDFD, RCB, BHU, IGIB etc by
                      taking them on either educational trips or open days
                      conducted by these institutes. Eminent scientists are
                      invited to the department under a programme called ‘Meet
                      the scientist’ where students get a one to one chance to
                      interact with the scientists. Students are even encouraged
                      for off-campus internships at these scientific
                      institutions in summer break. These activities in addition
                      to teaching groom the students to be future scientists.
                    </span>
                  </div>
                  <div className="p-3 flex ml-2">
                    <span className="md:text-lg text-sm text-justify font-medium ">
                      The department has the distinction of having over 90%
                      first classes as well as University positions every year.
                      Our students have been recipients of University gold
                      medals for securing first position in University, KVPY
                      fellowships, DRC silver jubilee merit scholarships, all
                      rounder awards and proficiency prizes. Graduates from the
                      department have been selected for integrated Ph.D. and MSc
                      programmes through entrance exams in Biochemistry,
                      Biotechnology, Molecular Biology, Neurosciences, Genetics
                      and other Life Science courses in leading scientific
                      Institutions such as IISc (Bengaluru), TIFR-NCBS, IISERs,
                      AIIMS, JNU, UDSC as well as Cambridge and Universities in
                      the US and Germany.
                    </span>
                  </div>
                  <div className="p-3 flex ml-2">
                    <span className="md:text-lg text-sm text-justify font-medium ">
                      The department since its inception is also involved in
                      conducting training workshops for school and college
                      students and teachers. Recently, DST Inspire Science Camp
                      was organized in which more than 150 school students from
                      Delhi/NCR participated and were introduced to
                      Biotechnology as a future prospect. The department is
                      proud of its alumni who hold faculty/ scientific positions
                      at prestigious US universities, JNU, DRDO, Delhi
                      University Biochemistry Department, and many undergraduate
                      Colleges.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Biochem;
