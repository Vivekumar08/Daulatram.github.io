import React, {useState} from "react";
import Mathbanner from "../Mathematics/Mathbanner.jsx";
import Mathematics from "../../../../Components/DepartSIde/Mathematics.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
function Math_studachieve() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" flex flex-col">
      <div className="">
        <Mathbanner />
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
                <Mathematics />
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
          <Mathematics />
        </div>
        <div className="ml-3 ">
          <div className="w-full mr-16">
            <h2 className="md:text-3xl text-lg uppercase font-bold mb-5 mt-[5%] flex flex-row justify-center ml-4 items-center ">
              Students Achievements
            </h2>
          </div>
          <div className="flex flex-row">
            <div>
              <div className="mr-5 ml-4">
                <div>
                  <h2 className="mdtext-2xl text-xl ml-4 font-bold underline mb-3">
                    Awards
                  </h2>
                  <p className=" ml-4 font-bold md:text-xl text-lg">Academic :</p>
                  <ul className="list-decimal md:text-base text-sm mt-2 ml-10 mr-4 text-justify mb-4">
                    <li>
                      Sneha Goyal (Batch 2017-20) won{" "}
                      <b>Silver Jubilee Merit Scholarship</b> for securing
                      Second position in University in B.Sc. (H) Maths second
                      year.
                    </li>

                    <li>
                      Mansi (Batch 2017-20) won{" "}
                      <b>Silver Jubilee Merit Scholarship</b>
                      for securing Third position in University in B.Sc.(H)
                      Maths second year.
                    </li>

                    <li>
                      {" "}
                      Swati (Batch 2017-20) won{" "}
                      <b>Silver Jubilee Merit Scholarship</b>
                      for securing Third position in University in B.Sc.(H)
                      Maths second year.
                    </li>
                    <li>
                      Neha (Batch 2011-14) has been awarded{" "}
                      <b>Silver Jubilee Merit Scholarship</b> for securing first
                      position in University in B.Sc. (H) Maths second year.
                    </li>
                    <li>
                      Deepshikha (Batch 2009-12) has been awarded{" "}
                      <b>Silver Jubilee Merit Scholarship</b> for securing first
                      position in University in B.Sc. (H) Maths second year.
                    </li>
                    <li>
                      Deepshikha (Batch 2009-12) has been awarded{" "}
                      <b>Teacher's Memorial Prize</b> for securing third
                      position in the university in B.Sc. (H) Maths (All three
                      years combined).
                    </li>
                  </ul>
                  <br />
                  <p className="ml-4 font-bold md:text-xl text-lg">Sports:</p>

                  <ul className="list-decimal md:text-base text-sm mt-2 ml-10 mr-4 text-justify mb-4">
                    <li>
                      Nandni Sorout (Batch 2017-20) has twice won first position
                      in 100 m Hurdles in 8th and 33rd Haryana State Junior
                      Athletics Championships organised by Athletics Haryana at
                      Rohtak in August, 2019 and October 2019 respectively.
                    </li>
                    <li>
                      Nandni Sorout won third position in 4*400 m Relay race in
                      34th National Junior Athletics Championships organised by
                      Jharkhand Athletics Association at Ranchi from 2-5
                      November, 2018.
                    </li>
                    <li>
                      Nandni Sorout won Second position in 400 m Hurdles and
                      third position in 4*100 m Relay in 30th North Zone Junior
                      Athletics Championships organised by Haryana Athletics
                      Association at Rohtak on 6,7 October, 2018.
                    </li>
                    <li>
                      Usha Yadav (Batch 2014-17) won first prize in the
                      Basketball Senior Wing competition organized by NCC in Jan
                      2016.
                    </li>
                    <li>
                      Anshu Choudhary (Batch 2018-2021) won Third prize in Shot
                      put at annual sports day of the college held on 24
                      February, 2020.
                    </li>
                    <li>
                      Swati Kaushik (Batch 2013-16) won 1 Gold medal, 1 silver
                      and several prizes in various Taekwondo Championships.
                    </li>
                  </ul>

                  <p className="ml-4 font-bold md:text-xl text-lg">
                    Cultural / Others:
                  </p>

                  <ul className="list-decimal md:text-base text-sm mt-2 ml-10 mr-4 text-justify mb-4">
                    <li>
                      Punyakshi (Batch 2018-21) won second prize in the Inter
                      College Speech Competition organized by P.G.D.A.V.(Eve) on
                      23 February, 2019.{" "}
                    </li>
                    <li>
                      Sanghita P. Nath (Batch 2018-21) won Second Prize in
                      Rangoli Bihu in Bihuoti competition held on 13 April 2019
                      by Assam Association Gurgaon.
                    </li>
                    <li>
                      Navya Whig (Batch 2017-20) won first prize in event
                      “Designing Marathon” in the Commerce Fest 2020 organised
                      by P.G.D.A.V College (Eve).
                    </li>
                    <li>
                      Navya Whig won first prize in the event “Indian Classical
                      Music Solo” organised by Dyal Singh College.
                    </li>
                    <li>
                      Navya Whig won second prize in the event “Music Duo”
                      organised by Sri Guru Gobind Singh College of Commerce.
                    </li>
                    <li>
                      Navya Whig won first prize in “Agaaz '' event held at
                      Rendezvous 18, IIT Delhi.
                    </li>
                    <li>
                      Shreya Gulati (Batch 2017-20) won first prize in events
                      “Industry Simulation” and “Business Simulation” organised
                      by International Management Institute, New Delhi on 13
                      January, 2019.
                    </li>
                    <li>
                      Pinky Chauhan (Batch 2014-17) participated in a special
                      National Integration camp held at GSSS, Kavaratti
                      (Lakshadweep) from 14 Apr to 25 April 2017. She
                      participated in NIAP and group dance competitions and was
                      awarded 2nd and 3rd prize respectively.
                    </li>
                    <li>
                      Garima Rathi (Batch 2013-16) won the Best Delegate Award
                      in India’s First M-UNEA organized by Shaheed Bhagat Singh
                      College in the year 2014.
                    </li>
                    <li>
                      Devanshi Thapliyal (2013-16) won the Shri Krishna Mohan
                      Memorial Prize for Best All-Round Student in the college
                      in 2015-16.{" "}
                    </li>
                    <li>
                      Vibhuti Dhadich (Batch 2012-15) as a part of Dramatics
                      Society received the 2nd Prize for Street play at Delhi
                      government Sahitya Kala Parishad in the year 2014.
                    </li>
                    <li>
                      Riya Arora (Batch 2012-15) received the 2nd Prize in the
                      event “Taarangana” in the annual fest of IGDTUW.
                    </li>
                  </ul>
                  
                </div>
                <div>
                  <h2 className="md:text-2xl text-xl ml-4 font-bold underline mb-3 mt-3">
                    Student's Progression
                  </h2>
                </div>
                <ul className="list-decimal md:text-base text-sm mt-2 ml-10 mr-4 text-justify mb-4">
                  <li>
                    Sneha Goyal (Batch 2017-20) AIR 117 in JAM (Mathematics),
                    2020, pursuing M.Sc. from IIT Roorkee.
                  </li>
                  <li>
                    Sameepta Ahuja (Batch 2017-20) AIR 167 in JAM
                    (Mathematics),2020, pursuing M.Sc. from IIT Roorkee.
                  </li>
                  <li>
                    Aakanksha Sigar (Batch 2017-20) AIR 170 in JAM
                    (Mathematics),2020, pursuing M.Sc. from IIT Kharagpur.
                  </li>
                  <li>
                    Sushma Kumari (Batch 2017-20) AIR 250 in JAM (Statistics),
                    2020, pursuing M.Sc. in Applied Statistics and Informatics
                    from IIT Bombay.
                  </li>
                  <li>
                    Tanisha Kumari (Batch 2017-20), pursuing M. Sc from IIT
                    Indore.
                  </li>
                  <li>
                    Komal (Batch 2016-19) AIR 35 in Delhi Technological
                    University entrance exam for M.Sc.,2019.
                  </li>
                  <li>
                    Ridhi Bakshi (Batch 2016-19) AIR 37 in Delhi Technological
                    University entrance exam for M.Sc., 2019.
                  </li>
                  <li>
                    Rashi Kamra (Batch 2016-19) AIR 271 in JAM (Mathematics),
                    2019 and pursuing M.Sc. from IIT Ropar.
                  </li>
                  <li>
                    H. Laxmi (Batch 2015-18) AIR 210 in JAM (Mathematics), 2018
                    and AIR 257 in JAM (Statistics), 2018 and pursuing Ph.D.
                    (Maths and Computing) from IIT Guwahati.
                  </li>
                  <li>
                    Sonakshi Agarwal (Batch 2015-18) pursuing MBA in
                    International Business from Indian Institute of Foreign
                    Trade (IIFT) Delhi.
                  </li>
                  <li>Rishika (Batch 2015-18) pursuing MBA from IIM Indore.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className=" flex  flex-col ml-4 mr-16 mt-10 ">
          <Biochemistry/>

          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Math_studachieve;
