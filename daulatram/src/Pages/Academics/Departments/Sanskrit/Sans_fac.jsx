import React, { useState } from "react";
import Sanskrit from "../../../../Components/DepartSIde/Sanskrit";
import { Sans_fac_info } from "../Fac_info";
import Sansbanner from "./Sansbanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
const Sans_fac = () => {
  const [visible, setVisible] = useState(false);
  const [Info, setFac_info] = useState(Sans_fac_info);

  return (
    <>
      <div className=" flex flex-col">
        <div className="">
          <Sansbanner />
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
                  <Sanskrit />
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
          <div className=" md:flex ww-[250px] hidden md:flex-col mt-12 ml-2">
            <Sanskrit />
          </div>
          <div className=" ml-5 w-full">
            <div className="  ">
              <h2 className="md:text-4xl text-xl sm:text-xl uppercase font-bold mb-5 mt-[7%] flex flex-row ml-3 md:justify-center items-center  ">
                Faculty
              </h2>
            </div>
            <div className="  ">
              <h2 className="md:text-2xl text-lg uppercase font-bold m-1 flex  items-center ">
                Sansrit Faculty
              </h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:mt-5 lg:grid-cols-3 xl:grid-cols-4 w-full mt-5 mb-6 md:mb-5">
              {Info.map((currElem) => {
                const { id, Fac_name, Designation, filter, img, cv } = currElem;
                return (
                  <>
                    {filter == "Current" && (
                      <>
                        <div class="first fac mb-14">
                          <img class="Fac-img" src={img} alt="" />
                          <div class="fac-description-bk"></div>

                          <div class="Fac-description">
                            <p>{Fac_name}</p>
                            <p className="font-medium"> {Designation}</p>
                          </div>

                          <a href={cv}>
                            <div class="fac-btn">View CV</div>
                          </a>
                        </div>
                      </>
                    )}
                  </>
                );
              })}
            </div>
            <div className="  ">
              <h2 className="md:text-2xl text-lg uppercase font-bold m-1 flex  items-center  ">
                Superannuated / Former Faculty 
              </h2>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className=" mr-2 flex flex-row ">
                <div className="w-[40%]">
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Sanskrit/Sushma_k_sans.jpg)",
                    }}
                    className="bg-center ml-auto mr-auto lg:w-[300px] w-[250px] h-[190px] lg:h-[300px] mb-3 bg-no-repeat mt-[18%] bg-cover  rounded-2xl border-2 border-black"
                  />
                  <b className="md:ml-4 lg:ml-6  ml-2">
                    Dr. Sushma Kulshreshtha
                  </b>
                </div>
                <div className="pr-3 pl-3 flex w-full ">
                  <div className="text-lg text-justify mt-2 md:mr-16 ">
                    <ul className="list-disc mt-2 md:ml-4 ml-8  mr-2 md:text-base text-sm text-justify mb-4">
                      <li>
                        Dr. Sushma Kulshreshtha (born on 13.03.1945 in Khurja)
                        joined Daulat Ram College as a Lecturer in Sanskrit in
                        October '1964.
                      </li>
                      <li>Dr. Kulshreshtha was the President Awardee</li>

                      <li>
                        She was appointed as the Vice Chancellor of Tirupati
                        University.
                      </li>
                      <li>
                        She was M.A., Acharya (Sahitya), D.Phil., D.Litt. FRAS
                        (London).
                      </li>
                      <li>
                        She had been the Director of Kalidas Academy of Skt.
                        Music and Fine Arts Delhi and Member of Faculty of Arts,
                        D.U.
                      </li>
                      <li>
                        She was also the recipient of Sanskrit Shiksha Puraskar,
                        Akhil Bharatiya Maulik Sanskrit Rachna Puraskar,
                        Certificate of Honour by Darbhanga Univesity.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-2 mb-5" />
            <p className="md:text-lg text-sm text-justify mt-2 mr-16">
              <b>Mrs. Lalita Kuppuswamy</b> ( born on 15.07.1946 in
              Thiruchirapalli, T.N.) M.A., Ph.D
            </p>

            <div className=" mr-2 ">
              <div className="w-full">
                <hr className="mt-2 mb-5" />
                <img
                  style={{
                    backgroundImage:
                      "url(/images/ImgPages/Sanskrit/Bhakti_sans.png)",
                  }}
                  className="bg-center ml-auto mr-auto lg:w-[300px] w-[250px] h-[190px] lg:h-[300px] mb-3 bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                />
                <b className="flex justify-center lg:mr-16 ">Dr. Bhakti</b>
                <hr className="mt-2 mb-5" />
                <div className=" mr-2 flex flex-row w-full mb-5">
                  <div className="w-[40%]">
                    <img
                      style={{
                        backgroundImage:
                          "url(/images/ImgPages/Sanskrit/diya_sans.png)",
                      }}
                      className="bg-center ml-auto mr-auto lg:w-[300px] w-[250px] h-[190px] lg:h-[300px] mb-3 bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                    />
                    <b className="ml-2 lg:ml-12">Dr. Kaushik</b>
                  </div>
                  <div className="pr-3 pl-3 flex w-full">
                    <div className="md:text-lg text-sm ml-8 text-justify font-medium md:mr-16 ">
                      Dr. Kaushik joined the Department of Sanskrit in 1960 and
                      was the sole bearer of the responsibilities for the nest 3
                      years. M.A. in Sanskrit Grammar, she is the recipient of
                      prestigious Makhan Lal Medal and Shivakama Radhakrishnan
                      Awards besides being the Gold Medalist in her academic
                      career. She also had a Ph.D. in German from Maxmuller
                      Bhawan, Delhi. She did research under Sh. Satyavrata
                      Shastri ji and her Ph.D. on Panini, Patanjali and
                      Katyayana was published by the University of Delhi Press
                      and was released by Dr. Shankar Dayal Sharma, then
                      President of India. Due to her efforts, the Department
                      grew to its honours branch and a separate section started
                      in the college Magazine for Sanskrit compositions. Due to
                      her efforts, the College got the present rendition of its
                      prayer – Samgacchadhvam Samvadaddhvam Sam Vo Manamsi…The
                      Department and its association flourished and achieved
                      many laurels under her guidance for years. She retired
                      from the service in 2004 but is still active in guiding
                      and supervising the Sanskrit News on DD News channel.
                    </div>
                  </div>
                </div>
                <hr className="mt-2 mb-5" />
                <div className=" mr-2 flex flex-row w-full">
                  <div className="w-[40%]">
                    <img
                      style={{
                        backgroundImage:
                          "url(/images/ImgPages/Sanskrit/Nargis_sans.png)",
                      }}
                      className="bg-center ml-auto mr-auto lg:w-[300px] w-[250px] h-[190px] lg:h-[300px] mb-3 bg-no-repeat mt-[3%] bg-cover  rounded-2xl border-2 border-black"
                    />
                    <b className="lg:ml-6">Dr. Nargis Verma</b>
                  </div>
                  <div className="pr-3 pl-3  flex w-full">
                    <div className="md:text-lg ml-8 mb-2 text-sm text-justify md:mr-16 font-medium ">
                      Dr. Nargis Verma Retired as Reader on February 14, 2010.
                      (born on 05.02.1945 in Peshawar.)
                    </div>
                  </div>
                </div>
                <hr className="mt-2 mb-5" />
                <div className=" mr-2 flex flex-row w-full">
                  <div className="w-[40%]">
                    <img
                      style={{
                        backgroundImage:
                          "url(/images/ImgPages/Sanskrit/Nirmla_sans.png)",
                      }}
                      className="bg-center ml-auto mr-auto lg:w-[300px] w-[260px] h-[190px] lg:h-[300px] mb-3 bg-no-repeat mt-[15%] bg-cover  rounded-2xl border-2 border-black"
                    />
                    <b className="lg:ml-6">Dr. Nirmal Trikha</b>
                  </div>
                  <div className="pr-3 pl-3 flex w-full mb-5">
                    <div className="md:text-lg text-sm text-justify ml-8 md:mr-16 mt-2 mr-4 ">
                      <span className="md:text-lg mb-2 text-sm text-justify  font-medium">
                        Dr. Nirmal Trikha joined Department of Sanskrit in 1968
                        and retired as Associate Professor after 42 years of
                        dedicated service in 2010. She is B.A.(Hons) and
                        M.A.(Sanskrit) from Lady Shri Ram College and obtained
                        Ph.D. from the University of Delhi. She was selected for
                        the award of Long Term Teacher Fellowship by U.G.C.
                      </span>
                      <br />
                      <span className="md:text-lg mb-2 text-sm text-justify font-medium">
                        In her long teaching experience, as an Incharge of
                        Sanskrit Department, Dr.Trikha was associated with
                        curriculum development and examination work. She taught
                        B.A.(Hons and Pass), M.A., Sanskrit Qualifying and
                        Concurrent Courses. Sanskrit Grammar was her
                        specialization.
                      </span>
                      <br />
                      <span className="md:text-lg mb-2 text-sm text-justify font-medium">
                        As an Administrator, she contributed to the development
                        of the college as a Vice Principal, Bursar and staff
                        representative on the Governing Body. She worked as
                        Convenor and member in various committees of Staff
                        Council and Governing Body.
                      </span>
                      <br />
                      <span className="md:text-lg mb-2 text-sm text-justify font-medium">
                        Being Incharge of Sanskrit Association several times,
                        she organized Inter College Competitions and directed
                        Sanskrit Plays. She was Chief Editor of College Magazine
                        'Pramila' and edited Sanskrit Section many times. She
                        was keenly interested in activities of Women Development
                        Centre and participated in activities of Sports
                        Department. As a resource person and subject expert, she
                        has been associated with Delhi Sanskrit Academy,
                        N.C.E.R.T., S.C.E.R.T. and U.G.C. She received 'Sanskrit
                        Samaaraadhaka Sammaana' Six times.
                      </span>
                      <br />
                      <span className="md:text-lg mb-2 text-sm text-justify font-medium">
                        Dr.Trikha participated in national and international
                        conferences, seminars, lectures and workshops and
                        presented more than sixty research papers. Most of the
                        papers are published in books and reputed journals.
                        'Faiths and Beliefs in the Kathasaritsagara,
                        'संस्कृतविज्ञानदीपिका' and 'Scientific Knowledge in
                        Sanskrit Literature ' are the books published by her.
                        Her field of interest is the scientific study of
                        Sanskrit Literature with special reference to pure and
                        applied Botany.
                      </span>

                      <span className="md:text-lg mb-2 text-sm text-justify font-medium">
                        Along with her academic pursuit, Dr. Trikha possesses a
                        distinguished career in extra-curricular activities. She
                        was adjudged the Best Speaker of the University of Delhi
                        and received a special certificate from the Vice
                        Chancellor. She represented the University in Inter
                        University Youth Festival and certificate of Merit was
                        awarded to her by the Ministry of Education.
                      </span>
                      <span className="md:text-lg text-sm mb-2 text-justify font-medium">
                        Dr. Nirmal Trikha retired as Reader on October 31, 2010.
                      </span>
                    </div>
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

export default Sans_fac;
