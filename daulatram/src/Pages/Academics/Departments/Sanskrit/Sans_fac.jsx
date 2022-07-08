import React, { useState } from "react";
import Sanskrit from "../../../../Components/DepartSIde/Sanskrit";
import { Sans_fac_info } from "../Fac_info";
import Sansbanner from "./Sansbanner";
const Sans_fac = () => {
  const [Info, setFac_info] = useState(Sans_fac_info);

  return (
    <>
      <div className=" flex flex-col">
        <div className="">
          <Sansbanner />
        </div>
        <div className="flex flex-row">
          <div className="ml-2 mt-12">
            <Sanskrit />
          </div>
          <div className=" ml-5 w-full">
            <div className="  ">
              <h2 className="text-4xl uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center items-center ">
                Faculty
              </h2>
            </div>
            <div className="  ">
              <h2 className="text-2xl uppercase font-bold m-1 flex  items-center ">
                Sansrit Faculty
              </h2>
            </div>
            {Info.map((currElem) => {
              const { id, Fac_name, Designation, filter, img, cv } = currElem;
              return (
                <>
                  {filter == "Current" && (
                    <>
                      <div class="first fac ">
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
            <div className="  ">
              <h2 className="text-2xl uppercase font-bold m-1 mt-5 flex  items-center ">
                Superannuated Faculty
              </h2>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className=" mr-2 flex flex-row ">
                <div className="w-[40%]">
                  <img
                    style={{
                      backgroundImage:
                        "url(/images/ImgPages/Sanskrit/Sushma_k_sans.jpg)",
                      width: "300px",
                      height: "300px",
                    }}
                    className="bg-center bg-no-repeat mt-[1%] bg-cover ml-1 rounded-3xl border-2 border-black"
                  />
                  <b className="ml-12">Dr. Sushma Kulshreshtha</b>
                </div>
                <div className="pr-3 pl-3 flex w-full ">
                  <div className="text-lg text-justify mt-2 mr-16 ">
                    <ul className="list-disc mt-2 ml-4 mr-2 text-justify mb-4">
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
            <p className="text-lg text-justify mt-2 mr-16">
              <b>Mrs. Lalita Kuppuswamy</b> ( born on 15.07.1946 in
              Thiruchirapalli, T.N.) M.A., Ph.D
            </p>

            <div className=" mr-2 ">
              <div className="w-full">
                <img
                  style={{
                    backgroundImage:
                      "url(/images/ImgPages/Sanskrit/Bhakti_sans.png)",
                    width: "300px",
                    height: "300px",
                  }}
                  className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-1 rounded-3xl border-2 border-black"
                />
                <b className="ml-28">Dr. Bhakti</b>

                <div className=" mr-2 flex flex-row w-full mb-5">
                  <div className="w-[40%]">
                    <img
                      style={{
                        backgroundImage:
                          "url(/images/ImgPages/Sanskrit/diya_sans.png)",
                        width: "300px",
                        height: "300px",
                      }}
                      className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-1 rounded-3xl border-2 border-black"
                    />
                    <b className="ml-28">Dr. Kaushik</b>
                  </div>
                  <div className="pr-3 pl-3 flex w-full">
                    <div className="text-lg text-justify mt-2 mr-16 ">
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
                <div className=" mr-2 flex flex-row w-full">
                  <div className="w-[40%]">
                    <img
                      style={{
                        backgroundImage:
                          "url(/images/ImgPages/Sanskrit/Nargis_sans.png)",
                        width: "300px",
                        height: "300px",
                      }}
                      className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-1 rounded-3xl border-2 border-black"
                    />
                    <b className="ml-20">Dr. Nargis Verma</b>
                  </div>
                  <div className="pr-3 pl-3 flex w-full">
                    <div className="text-lg text-justify mt-2 mr-16 ">
                      Dr. Nargis Verma Retired as Reader on February 14, 2010.
                      (born on 05.02.1945 in Peshawar.)
                    </div>
                  </div>
                </div>
                <div className=" mr-2 flex flex-row w-full">
                  <div className="w-[40%]">
                    <img
                      style={{
                        backgroundImage:
                          "url(/images/ImgPages/Sanskrit/Nirmla_sans.png)",
                        width: "300px",
                        height: "300px",
                      }}
                      className="bg-center bg-no-repeat mt-[1%] bg-cover h-10 mr-auto ml-1 rounded-3xl border-2 border-black"
                    />
                    <b className="ml-20">Dr. Nirmal Trikha</b>
                  </div>
                  <div className="pr-3 pl-3 flex w-full mb-5">
                    <div className="text-lg text-justify mt-2 mr-16 ">
                      <span className="text-lg text-justify font-medium mt-3">
                        Dr. Nirmal Trikha joined Department of Sanskrit in 1968
                        and retired as Associate Professor after 42 years of
                        dedicated service in 2010. She is B.A.(Hons) and
                        M.A.(Sanskrit) from Lady Shri Ram College and obtained
                        Ph.D. from the University of Delhi. She was selected for
                        the award of Long Term Teacher Fellowship by U.G.C.
                      </span>
                      <br />
                      <span className="text-lg text-justify font-medium mt-3">
                        In her long teaching experience, as an Incharge of
                        Sanskrit Department, Dr.Trikha was associated with
                        curriculum development and examination work. She taught
                        B.A.(Hons and Pass), M.A., Sanskrit Qualifying and
                        Concurrent Courses. Sanskrit Grammar was her
                        specialization.
                      </span>
                      <br />
                      <span className="text-lg text-justify font-medium mt-3">
                        As an Administrator, she contributed to the development
                        of the college as a Vice Principal, Bursar and staff
                        representative on the Governing Body. She worked as
                        Convenor and member in various committees of Staff
                        Council and Governing Body.
                      </span>
                      <br />
                      <span className="text-lg text-justify font-medium mt-3">
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
                      <span className="text-lg text-justify font-medium mt-3">
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
                      <br />
                      <span className="text-lg text-justify font-medium mt-3">
                        Along with her academic pursuit, Dr. Trikha possesses a
                        distinguished career in extra-curricular activities. She
                        was adjudged the Best Speaker of the University of Delhi
                        and received a special certificate from the Vice
                        Chancellor. She represented the University in Inter
                        University Youth Festival and certificate of Merit was
                        awarded to her by the Ministry of Education.
                      </span>
                      <span className="text-lg text-justify font-medium mt-3">
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
